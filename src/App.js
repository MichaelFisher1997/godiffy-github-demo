import React, { useState } from 'react';

function App() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageUpload = (e, imageNumber) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (imageNumber === 1) {
          setImage1(reader.result);
        } else {
          setImage2(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">🖼️ ImageDiff</div>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#demo">Demo</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#demo" className="cta-button">Try Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Compare Images Instantly</h1>
          <p>Powerful visual diff tool to spot differences between images with pixel-perfect accuracy</p>
          <div className="hero-buttons">
            <a href="#demo" className="btn-primary">Start Free Trial</a>
            <a href="#features" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>Why Choose ImageDiff?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Compare images in seconds with our optimized algorithms</p>
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
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Detailed Reports</h3>
              <p>Get comprehensive analysis and visual comparison reports</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your images are processed securely and never stored</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Cloud Based</h3>
              <p>Access from anywhere, no installation required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo" id="demo">
        <div className="container">
          <h2>Try It Now</h2>
          <p>Upload two images to see the magic happen</p>
          
          <div className="demo-area">
            <div className="upload-area">
              <div className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 1)}
                  style={{ display: 'none' }}
                  id="image1"
                />
                <label htmlFor="image1" style={{ cursor: 'pointer' }}>
                  {image1 ? (
                    <img src={image1} alt="Image 1" style={{ maxWidth: '100%', maxHeight: '150px' }} />
                  ) : (
                    <div>
                      <div style={{ fontSize: '2rem' }}>📁</div>
                      <p>Upload Original Image</p>
                    </div>
                  )}
                </label>
              </div>
              
              <div className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 2)}
                  style={{ display: 'none' }}
                  id="image2"
                />
                <label htmlFor="image2" style={{ cursor: 'pointer' }}>
                  {image2 ? (
                    <img src={image2} alt="Image 2" style={{ maxWidth: '100%', maxHeight: '150px' }} />
                  ) : (
                    <div>
                      <div style={{ fontSize: '2rem' }}>📁</div>
                      <p>Upload Modified Image</p>
                    </div>
                  )}
                </label>
              </div>
            </div>
            
            {image1 && image2 && (
              <div style={{ marginTop: '2rem' }}>
                <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                  🚀 Compare Images
                </button>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                  Full comparison engine coming soon! Sign up for early access.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;