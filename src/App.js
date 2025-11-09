import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Features from './pages/Features';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';

function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Compare Images Instantly ⚡</h1>
          <p>The most powerful visual diff tool to spot differences between images with pixel-perfect accuracy</p>
          <div className="hero-buttons">
            <Link to="/demo" className="btn-primary">Start Free Trial</Link>
            <Link to="/features" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features">
        <div className="container">
          <h2>Why Choose ImageDiff? 🚀</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast ⚡</h3>
              <p>Compare images in milliseconds with our optimized algorithms</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Pixel Perfect</h3>
              <p>Detect even the smallest differences with high precision</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Easy to Use</h3>
              <p>Simple drag-and-drop interface, no technical skills required</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/features" className="btn-secondary">View All Features</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">🖼️ ImageDiff</Link>
          <ul className="nav-links">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/demo">Demo</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
          <Link to="/demo" className="cta-button">Try Now</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">🖼️ ImageDiff</div>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
          <div>&copy; 2024 ImageDiff. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;