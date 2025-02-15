import React, { useEffect, useState } from 'react';
import AnalysisChart from '../components/AnalysisChart';
import SummaryCard from '../components/SummaryCard';
import '../assets/styles/dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch stats from the backend
    fetch('/api/stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Analytics Dashboard</h1>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <SummaryCard key={index} {...stat} />
        ))}
      </div>

      <div className="chart-container">
        <h2 className="chart-title">Verification Trends</h2>
        <AnalysisChart />
      </div>
    </div>
  );
}