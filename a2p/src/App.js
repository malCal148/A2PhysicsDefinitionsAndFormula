// Date: 03/06/2021
import './pages/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Formulas from './pages/Formula';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="topnav">
        <h1> A2physics</h1>
        <NavLink
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Definitions
        </NavLink>
        <NavLink
          to="/formulas"
          className={location.pathname === '/formulas' ? 'active' : ''}
        >
          Formulas
        </NavLink>
        {/* Add more links as needed */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulas" element={<Formulas />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

