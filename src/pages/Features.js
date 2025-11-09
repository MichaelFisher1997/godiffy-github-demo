import React from 'react';

const Features = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <h1>Powerful Features 💪</h1>
          <p>Everything you need for professional-grade image comparison</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast ⚡</h3>
              <p>Compare images instantly with our optimized algorithms. No more waiting around for results.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Pixel Perfect</h3>
              <p>Detect even the smallest differences with high precision. Every pixel matters.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Easy to Use</h3>
              <p>Simple drag-and-drop interface, no technical skills required. Just upload and compare.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Detailed Reports</h3>
              <p>Get comprehensive analysis and visual comparison reports with detailed insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your images are processed securely and never stored. Privacy is our priority.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Cloud Based</h3>
              <p>Access from anywhere, no installation required. Works on any device with a browser.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to get started? 🚀</h2>
          <p>Join over 10,000 professionals who trust ImageDiff for their image comparison needs.</p>
          <a href="/demo" className="btn-primary">Try It Now</a>
        </div>
      </section>
    </div>
  );
};

export default Features;