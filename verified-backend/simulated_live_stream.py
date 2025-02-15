import random
import time

def generate_live_stream():
    headlines = [
        "Breaking: Election results announced!",
        "New study shows benefits of exercise.",
        "Rumors about alien invasion are false.",
        "Stock market reaches all-time high.",
        "Misinformation about COVID-19 spreads online.",
        "Government announces new policies.",
        "Celebrity spotted at local restaurant.",
        "Fake news about climate change debunked.",
        "New technology revolutionizes healthcare.",
        "Conspiracy theories about vaccines gain traction."
    ]

    while True:
        stream = {
            "id": random.randint(1, 1000),
            "title": random.choice(headlines),
            "status": "Analyzing",
            "confidence": 0
        }
        yield stream
        time.sleep(5)