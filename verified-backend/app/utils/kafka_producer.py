from kafka import KafkaProducer
import json
from simulated_live_stream import generate_live_stream

# Initialize Kafka producer
producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

def ingest_live_stream():
    for stream in generate_live_stream():
        # Send stream data to Kafka topic
        producer.send('live-streams', value=stream)
        print(f"Ingested stream: {stream}")

# Start ingestion
ingest_live_stream()