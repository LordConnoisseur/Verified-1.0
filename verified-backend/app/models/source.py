from app import db

class Source(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    reliability = db.Column(db.String(50), nullable=False)
    last_used = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f'<Source {self.name}>'