import React, { useEffect, useState } from 'react';
import '../assets/styles/sourceattribution.css';

export default function SourceAttribution() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    // Fetch sources from the backend
    fetch('/api/sources')
      .then(response => response.json())
      .then(data => setSources(data))
      .catch(error => console.error('Error fetching sources:', error));
  }, []);

  return (
    <div className="source-attribution">
      <h1 className="source-attribution-title">Source Attribution</h1>
      
      <div className="sources-list">
        {sources.map((source, index) => (
          <div key={index} className="source-card">
            <h3>{source.name}</h3>
            <p>Reliability: <span className={`reliability ${source.reliability.toLowerCase()}`}>{source.reliability}</span></p>
            <p>Last Used: {source.last_used}</p>
          </div>
        ))}
      </div>
    </div>
  );
}