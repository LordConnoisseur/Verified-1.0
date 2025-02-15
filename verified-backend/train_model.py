from transformers import BertForSequenceClassification, BertTokenizer, AdamW
import torch

# Load pre-trained BERT model and tokenizer
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Sample training data (text, label)
train_data = [
    ("Breaking: Election results announced!", 0),
    ("Rumors about alien invasion are false.", 1),
    ("New study shows benefits of exercise.", 0),
    ("Fake news about climate change debunked.", 1),
    ("Stock market reaches all-time high.", 0),
    ("Conspiracy theories about vaccines gain traction.", 1)
]

# Tokenize training data
inputs = tokenizer([text for text, _ in train_data], padding=True, truncation=True, return_tensors="pt")
labels = torch.tensor([label for _, label in train_data])

# Define optimizer
optimizer = AdamW(model.parameters(), lr=5e-5)

# Train the model
model.train()
for epoch in range(3):  # Train for 3 epochs
    outputs = model(**inputs, labels=labels)
    loss = outputs.loss
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()
    print(f"Epoch {epoch + 1}, Loss: {loss.item()}")

# Save the model
model.save_pretrained("misinformation-detection-model")
tokenizer.save_pretrained("misinformation-detection-model")