import React from 'react';
import '../assets/styles/sourceattribution.css';

export default function SourceAttribution() {
  const sources = [
    { name: "Reuters", reliability: "High", lastUsed: "2 hours ago" },
    { name: "Anonymous Blog", reliability: "Low", lastUsed: "5 days ago" },
    { name: "Government Report", reliability: "Medium", lastUsed: "1 day ago" }
  ];

  return (
    <div className="source-attribution">
      <h1 className="source-attribution-title">Source Attribution</h1>
      
      <div className="sources-list">
        {sources.map((source, index) => (
          <div key={index} className="source-card">
            <h3>{source.name}</h3>
            <p>Reliability: <span className={`reliability ${source.reliability.toLowerCase()}`}>{source.reliability}</span></p>
            <p>Last Used: {source.lastUsed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}