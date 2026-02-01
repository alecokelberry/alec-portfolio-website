import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect old routes to /about for better UX */}
          <Route path="/education" element={<About />} />
          <Route path="/experience" element={<About />} />
          <Route path="/research" element={<About />} />
          <Route path="/skills" element={<About />} />
          <Route path="/awards" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
