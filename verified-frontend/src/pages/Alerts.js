import React from 'react';
import AlertFeed from '../components/AlertFeed';
import '../assets/styles/alerts.css';

export default function Alerts() {
  const alerts = [
    { title: "Misinformation Detected", description: "Potential false claim about election results.", timestamp: "10:45 AM" },
    { title: "Source Unverified", description: "Unverified source cited in live broadcast.", timestamp: "9:30 AM" }
  ];

  return (
    <div className="alerts-page">
      <h1 className="alerts-title">Alerts</h1>
      <AlertFeed alerts={alerts} />
    </div>
  );
}