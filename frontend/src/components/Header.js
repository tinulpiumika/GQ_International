import React from 'react'
import { Link } from 'react-router-dom';

function HeaderBar() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary shadow"
        style={{ color: 'white' }}
      >
        <span className="navbar-brand mb-0 h1" style={{ marginLeft: '10px' }}>
          Automatic Names Generator
        </span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{ color: 'white' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" style={{ color: 'white' }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/namelist" className="nav-link" style={{ color: 'white' }}>
              {' '}
              Name List
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  export default HeaderBar;