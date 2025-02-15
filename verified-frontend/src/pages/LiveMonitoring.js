import React, { useEffect, useState } from 'react';
import LiveStreamCard from '../components/LiveStreamCard';
import '../assets/styles/livemonitoring.css';

export default function LiveMonitoring() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = () => {
      fetch('http://localhost:5000/api/streams')
        .then(response => response.json())
        .then(data => setStreams(data))
        .catch(error => console.error('Error fetching streams:', error));
    };

    fetchStreams();
    const interval = setInterval(fetchStreams, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);
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