import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MyColleges from './components/MyColleges';
import CommonApp from './components/CommonApp';
import CollegeSearch from './components/CollegeSearch';
import FinancialAid from './components/FinancialAid';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-colleges" element={<MyColleges />} />
          <Route path="/common-app" element={<CommonApp />} />
          <Route path="/college-search" element={<CollegeSearch />} />
          <Route path="/financial-aid" element={<FinancialAid />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
