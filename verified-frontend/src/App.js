import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LiveMonitoring from './pages/LiveMonitoring';
import Alerts from './pages/Alerts';
import SourceAttribution from './pages/SourceAttribution';
import Settings from './pages/Settings';
import './assets/styles/main.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/live" element={<LiveMonitoring />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/sources" element={<SourceAttribution />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}