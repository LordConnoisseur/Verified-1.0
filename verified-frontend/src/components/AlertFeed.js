import React from 'react';
import '../assets/styles/alertfeed.css';

export default function AlertFeed({ alerts }) {
  return (
    <div className="alert-feed">
      {alerts.map((alert, index) => (
        <div key={index} className="alert-card">
          <h3>{alert.title}</h3>
          <p>{alert.description}</p>
          <span className="timestamp">{alert.timestamp}</span>
        </div>
      ))}
    </div>
  );
}