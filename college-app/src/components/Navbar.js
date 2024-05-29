import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.png'; // replace with the path to your logo

const Navbar = ({ user, onSignOut }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
      </div>
      <div className="menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/my-colleges">My Colleges</Link>
        <Link to="/common-app">Common App</Link>
        <Link to="/college-search">College Search</Link>
        <Link to="/financial-aid">Financial Aid</Link>
      </div>
      <div className="user-info">
        {user && <span>Welcome, {user.name}!</span>}
        <button onClick={onSignOut}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;

