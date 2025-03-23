// Date: 03/06/2021
import './pages/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';




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
            <a href="formulas.html">formulas v</a>
            <div class="dropdown-content">
                <a href="formulas.html#deformationOfSolids">4.1 Deformation Of Solids</a>
                <a href="formulas.html#thermalPhysics">4.2 Thermal Physics</a>
                <a href="formulas.html#uniformCircularMotion">4.3 Uniform Circular Motion</a>
                <a href="formulas.html#simpleHarmonicMotion">4.4 Simple Harmonic Motion</a>
                <a href="formulas.html#theNucleus">4.5 The Nucleus</a>
                <a href="formulas.html#nuclearDecay">4.6 Nuclear Decay</a>
                <a href="formulas.html#nuclearEnergy">4.7 Nuclear Energy</a>
                <a href="formulas.html#nuclearFissionFusion">4.8 Nuclear Fission + Fusion</a>
                <a href="formulas.html#electricFields">4.9 Electric Fields</a>
                <a href="formulas.html#magneticFields">4.10 Magnetic Fields</a>
                <a href="formulas.html#forceFields">5.1 Force Fields</a>
                <a href="formulas.html#gravitationalFields">5.2 Gravitational Fields</a>
                <a href="formulas.html#electricFieldsExtended">5.3 Electric Fields</a>
                <a href="formulas.html#magneticFieldsExtended">5.4 Magnetic Fields</a>
                <a href="formulas.html#electromagneticInduction">5.5 Electromagnetic Induction</a>
                <a href="formulas.html#alternatingCurrent">5.6 Alternating Current</a>
                <a href="formulas.html#particleAccelerators">5.7 Particle Accelerators</a>
                <a href="formulas.html#fundamentalParticles">5.8 Fundamental Particles</a>
            </div>
        </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
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

