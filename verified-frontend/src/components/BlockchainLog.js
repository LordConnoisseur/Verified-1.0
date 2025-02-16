import React from 'react';

export default function BlockchainLog({ logs }) {
  return (
    <div className="blockchain-log">
      <h3>Blockchain Logs</h3>
      <div className="log-list">
        {logs.map(log => (
          <div key={log.index} className="log-item">
            <p><strong>Index:</strong> {log.index}</p>
            <p><strong>Data:</strong> {log.data}</p>
            <p><strong>Timestamp:</strong> {log.timestamp}</p>
            <p><strong>Hash:</strong> <code>{log.hash}</code></p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}