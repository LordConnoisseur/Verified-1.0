class Blockchain:
    def __init__(self):
        self.chain = []
        self.current_transactions = []

    def new_block(self):
        # Placeholder for creating a new block
        block = {
            'index': len(self.chain) + 1,
            'transactions': self.current_transactions,
        }
        self.current_transactions = []
        self.chain.append(block)
        return block

    def new_transaction(self, data):
        # Placeholder for adding a new transaction
        self.current_transactions.append(data)
        return self.last_block['index'] + 1

    @property
    def last_block(self):
        return self.chain[-1]

# Singleton Blockchain Instance
blockchain = Blockchain()