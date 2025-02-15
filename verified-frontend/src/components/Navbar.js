import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Verified</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Dashboard</Link>
          <Link to="/live" className="navbar-link">Live Monitoring</Link>
          <Link to="/alerts" className="navbar-link">Alerts</Link>
          <Link to="/sources" className="navbar-link">Sources</Link>
        </div>
      </div>
    </nav>
  );
}