from flask import Blueprint, jsonify, request
from app.models.stream import Stream
from app.models.alert import Alert
from app.models.source import Source
from app import db

api_bp = Blueprint('api', __name__)

# Stream Routes
@api_bp.route('/streams', methods=['GET'])
def get_streams():
    streams = Stream.query.all()
    return jsonify([{
        'id': stream.id,
        'title': stream.title,
        'status': stream.status,
        'confidence': stream.confidence
    } for stream in streams])

@api_bp.route('/streams', methods=['POST'])
def add_stream():
    data = request.get_json()
    new_stream = Stream(
        title=data['title'],
        status=data['status'],
        confidence=data['confidence']
    )
    db.session.add(new_stream)
    db.session.commit()
    return jsonify({'message': 'Stream added successfully'}), 201

# Alert Routes
@api_bp.route('/alerts', methods=['GET'])
def get_alerts():
    alerts = Alert.query.all()
    return jsonify([{
        'id': alert.id,
        'title': alert.title,
        'description': alert.description,
        'timestamp': alert.timestamp
    } for alert in alerts])

@api_bp.route('/alerts', methods=['POST'])
def add_alert():
    data = request.get_json()
    new_alert = Alert(
        title=data['title'],
        description=data['description'],
        timestamp=data['timestamp']
    )
    db.session.add(new_alert)
    db.session.commit()
    return jsonify({'message': 'Alert added successfully'}), 201

# Source Routes
@api_bp.route('/sources', methods=['GET'])
def get_sources():
    sources = Source.query.all()
    return jsonify([{
        'id': source.id,
        'name': source.name,
        'reliability': source.reliability,
        'last_used': source.last_used
    } for source in sources])

@api_bp.route('/sources', methods=['POST'])
def add_source():
    data = request.get_json()
    new_source = Source(
        name=data['name'],
        reliability=data['reliability'],
        last_used=data['last_used']
    )
    db.session.add(new_source)
    db.session.commit()
    return jsonify({'message': 'Source added successfully'}), 201

@api_bp.route('/stats', methods=['GET'])
def get_stats():
    stats = [
        {'title': 'Processed Streams', 'value': '1,234', 'trend': '+12%'},
        {'title': 'Verified Claims', 'value': '892', 'trend': '+8%'},
        {'title': 'Active Alerts', 'value': '23', 'trend': '-4%'},
        {'title': 'System Health', 'value': '98%', 'trend': 'Stable'}
    ]
    return jsonify(stats)