from kafka import KafkaConsumer
from transformers import BertForSequenceClassification, BertTokenizer
import torch
import json
from app.models.stream import Stream
from app.utils.blockchain import BlockchainLedger  # Import the BlockchainLedger class
from app import create_app, db

# Load the trained model and tokenizer
model = BertForSequenceClassification.from_pretrained("misinformation-detection-model")
tokenizer = BertTokenizer.from_pretrained("misinformation-detection-model")

# Initialize Flask app
app = create_app()

# Initialize BlockchainLedger with the Flask app
blockchain = BlockchainLedger(app)

# Initialize Kafka consumer
consumer = KafkaConsumer(
    'live-streams',
    bootstrap_servers='localhost:9092',
    value_deserializer=lambda v: json.loads(v.decode('utf-8'))
)

def analyze_stream(stream):
    # Tokenize the stream title
    inputs = tokenizer(stream['title'], return_tensors="pt", padding=True, truncation=True)
    
    # Predict using the model
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits
        prediction = torch.argmax(logits, dim=1).item()
    
    # Update stream status and confidence
    stream['status'] = "Misinformation" if prediction == 1 else "Verified"
    stream['confidence'] = torch.softmax(logits, dim=1)[0][prediction].item() * 100
    return stream

# Process live streams
with app.app_context():  # Create a Flask application context
    for message in consumer:
        stream = message.value
        analyzed_stream = analyze_stream(stream)
        
        # Save analyzed stream to the database
        new_stream = Stream(
            title=analyzed_stream['title'],
            status=analyzed_stream['status'],
            confidence=analyzed_stream['confidence']
        )
        db.session.add(new_stream)
        db.session.commit()

        # Add verification decision to the blockchain
        blockchain.add_block(f"Stream ID {stream['id']}: {analyzed_stream['status']}")
        
        print(f"Analyzed stream: {analyzed_stream}")