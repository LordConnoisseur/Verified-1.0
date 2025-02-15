from app import db

class Stream(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(50), nullable=False)
    confidence = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Stream {self.title}>'