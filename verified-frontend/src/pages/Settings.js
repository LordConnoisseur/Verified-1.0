import React from 'react';
import '../assets/styles/settings.css';

export default function Settings() {
  return (
    <div className="settings">
      <h1 className="settings-title">Settings</h1>
      
      <div className="settings-content">
        <div className="settings-section">
          <h2>Notifications</h2>
          <label>
            <input type="checkbox" /> Enable Email Notifications
          </label>
          <label>
            <input type="checkbox" /> Enable Push Notifications
          </label>
        </div>

        <div className="settings-section">
          <h2>Preferences</h2>
          <label>
            <input type="checkbox" /> Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}