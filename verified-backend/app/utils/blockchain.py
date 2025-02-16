import hashlib
import json
from datetime import datetime
from app.models.blockchain import Blockchain
from app import db

class BlockchainLedger:
    def __init__(self, app):
        self.app = app
        self.chain = []
        self.create_genesis_block()

    def create_genesis_block(self):
        # Create the first block (genesis block)
        with self.app.app_context():  # Use the Flask app context
            genesis_block = {
                'index': 0,
                'previous_hash': '0',
                'data': 'Genesis Block',
                'timestamp': datetime.now(),  # Use datetime object
                'hash': self.calculate_hash(0, '0', 'Genesis Block', datetime.now())
            }
            self.chain.append(genesis_block)
            self.save_block_to_db(genesis_block)

    def add_block(self, data):
        # Add a new block to the chain
        with self.app.app_context():  # Use the Flask app context
            previous_block = self.chain[-1]
            new_block = {
                'index': len(self.chain),
                'previous_hash': previous_block['hash'],
                'data': data,
                'timestamp': datetime.now(),  # Use datetime object
                'hash': self.calculate_hash(len(self.chain), previous_block['hash'], data, datetime.now())
            }
            self.chain.append(new_block)
            self.save_block_to_db(new_block)
            return new_block

    def calculate_hash(self, index, previous_hash, data, timestamp):
        # Calculate the hash of a block
        block_string = json.dumps({
            'index': index,
            'previous_hash': previous_hash,
            'data': data,
            'timestamp': timestamp.isoformat()  # Convert datetime to ISO format string
        }, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()

    def save_block_to_db(self, block):
        # Save the block to the database
        new_block = Blockchain(
            previous_hash=block['previous_hash'],
            data=block['data'],
            timestamp=block['timestamp'],  # Pass datetime object
            hash=block['hash']
        )
        db.session.add(new_block)
        db.session.commit()