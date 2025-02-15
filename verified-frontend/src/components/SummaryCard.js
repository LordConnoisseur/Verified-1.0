import React from 'react';
import '../assets/styles/summarycard.css';

export default function SummaryCard({ title, value, trend }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className="trend">{trend}</p>
    </div>
  );
}