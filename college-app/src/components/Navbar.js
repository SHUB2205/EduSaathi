import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">common app</div>
      <div className="menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/my-colleges">My Colleges</Link>
        <Link to="/common-app">Common App</Link>
        <Link to="/college-search">College Search</Link>
        <Link to="/financial-aid">Financial Aid</Link>
      </div>
      <div className="user-info">
        <span>Welcome, Shivam!</span>
        <button>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
