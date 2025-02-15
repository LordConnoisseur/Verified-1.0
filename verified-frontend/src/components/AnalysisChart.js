import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../assets/styles/analysischart.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AnalysisChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Verified Claims',
        data: [65, 59, 80, 81, 56, 72],
        borderColor: '#27ae60',
        fill: false,
      },
      {
        label: 'Flagged Claims',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: '#e74c3c',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Verification Trends',
      },
    },
  };

  // Cleanup chart on unmount
  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="analysis-chart">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}