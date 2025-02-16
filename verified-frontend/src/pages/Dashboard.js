import React, { useEffect, useState } from 'react';
import AnalysisChart from '../components/AnalysisChart';
import SummaryCard from '../components/SummaryCard';
import BlockchainLog from '../components/BlockchainLog';
import '../assets/styles/dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [blockchainLogs, setBlockchainLogs] = useState([]);

  useEffect(() => {
    // Fetch stats
    fetch('http://localhost:5000/api/stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error fetching stats:', error));

    // Fetch blockchain logs
    fetch('http://localhost:5000/api/blockchain')
      .then(response => response.json())
      .then(data => setBlockchainLogs(data))
      .catch(error => console.error('Error fetching blockchain logs:', error));
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

      <div className="blockchain-container">
        <BlockchainLog logs={blockchainLogs} />
      </div>
    </div>
  );
}