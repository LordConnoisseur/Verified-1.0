import React, { useEffect, useState } from 'react';
import AlertFeed from '../components/AlertFeed';
import '../assets/styles/alerts.css';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts from the backend
    fetch('/api/alerts')
      .then(response => response.json())
      .then(data => setAlerts(data))
      .catch(error => console.error('Error fetching alerts:', error));
  }, []);

  return (
    <div className="alerts-page">
      <h1 className="alerts-title">Alerts</h1>
      <AlertFeed alerts={alerts} />
    </div>
  );
}