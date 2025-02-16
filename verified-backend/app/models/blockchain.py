from app import db

class Blockchain(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    previous_hash = db.Column(db.String(64), nullable=False)
    data = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())
    hash = db.Column(db.String(64), nullable=False)

    def __repr__(self):
        return f'<Block {self.id}>'