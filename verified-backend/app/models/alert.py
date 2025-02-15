from app import db

class Alert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    timestamp = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f'<Alert {self.title}>'