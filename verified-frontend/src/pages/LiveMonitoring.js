import React from 'react';
import LiveStreamCard from '../components/LiveStreamCard';
import '../assets/styles/livemonitoring.css';

export default function LiveMonitoring() {
  const streams = [
    { id: 1, title: "News Channel 24", status: "Analyzing", confidence: 92 },
    { id: 2, title: "Global Update", status: "Verified", confidence: 98 },
    { id: 3, title: "Breaking News", status: "Flagged", confidence: 65 }
  ];

  return (
    <div className="live-monitoring">
      <h1 className="live-monitoring-title">Live Stream Monitoring</h1>
      
      <div className="streams-grid">
        {streams.map(stream => (
          <LiveStreamCard key={stream.id} {...stream} />
        ))}
      </div>
    </div>
  );
}