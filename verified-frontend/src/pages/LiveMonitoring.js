import React, { useEffect, useState } from 'react';
import LiveStreamCard from '../components/LiveStreamCard';
import '../assets/styles/livemonitoring.css';

export default function LiveMonitoring() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    // Fetch live streams from the backend
    fetch('/api/streams')
      .then(response => response.json())
      .then(data => setStreams(data))
      .catch(error => console.error('Error fetching streams:', error));
  }, []);

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