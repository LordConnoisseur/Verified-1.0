import React, { useEffect, useState } from 'react';

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Connect to the SSE endpoint
    const eventSource = new EventSource('http://localhost:5000/notifications');

    eventSource.onmessage = (event) => {
      const newBlock = JSON.parse(event.data);
      setNotifications((prev) => [
        {
          id: newBlock.index,
          message: `New verification: ${newBlock.data}`,
          timestamp: newBlock.timestamp,
        },
        ...prev,
      ]);
    };

    return () => {
      eventSource.close();  // Clean up on unmount
    };
  }, []);

  return (
    <div className="notification-container">
      <h3>Real-Time Notifications</h3>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <p>{notification.message}</p>
            <small>{new Date(notification.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}