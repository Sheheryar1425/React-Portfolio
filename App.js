import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
          <h1 style={{ display: 'inline' }}>SA</h1>
          <Link to="/" style={{ margin: '10px', color: '#fff' }}>Home</Link>
          <Link to="/about" style={{ margin: '10px', color: '#fff' }}>About Me</Link>
          <Link to="/projects" style={{ margin: '10px', color: '#fff' }}>Projects</Link>
          <Link to="/services" style={{ margin: '10px', color: '#fff' }}>Services</Link>
          <Link to="/contact" style={{ margin: '10px', color: '#fff' }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
