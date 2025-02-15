import React from 'react';
import '../assets/styles/livestreamcard.css';

export default function LiveStreamCard({ title, status, confidence }) {
  return (
    <div className="live-stream-card">
      <h3>{title}</h3>
      <p>Status: <span className={`status ${status.toLowerCase()}`}>{status}</span></p>
      <p>Confidence: {confidence}%</p>
    </div>
  );
}