import React from 'react';
import AnalysisChart from '../components/AnalysisChart';
import SummaryCard from '../components/SummaryCard';
import '../assets/styles/dashboard.css';

export default function Dashboard() {
  const stats = [
    { title: "Processed Streams", value: "1,234", trend: "+12%" },
    { title: "Verified Claims", value: "892", trend: "+8%" },
    { title: "Active Alerts", value: "23", trend: "-4%" },
    { title: "System Health", value: "98%", trend: "Stable" }
  ];

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