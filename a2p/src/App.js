// Date: 03/06/2021
import './pages/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Formulas from './pages/Formula';



function TopNav() {
  return (
    <div>
      <Router>
          <nav class="topnav" id="topnav">
        <h1>CCEA Spec - A2 Definitions</h1>
        <div class="dropdown">
            <Link class="active" to="/">Definitions</Link>

            </div>
        <div class="dropdown">
            <Link to="/Formulas">Formulas</Link>
        </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formulas" element={<Formulas />} />
    </Routes>
    </Router>
    </div>
  );
}

function App() {
  return (
    <>

    <TopNav/>
    </>
  );
}


export default App;

