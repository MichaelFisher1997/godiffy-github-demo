import React, { useState } from 'react';

const Demo = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  const [showResults, setShowResults] = useState(false);

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

  const handleCompare = () => {
    setIsComparing(true);
    setTimeout(() => {
      setIsComparing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <h1>Live Demo 🎬</h1>
          <p>See ImageDiff in action - upload two images and watch the magic happen instantly</p>
        </div>
      </section>

      <section className="demo">
        <div className="container">
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
                    <img src={image1} alt="Original" style={{ maxWidth: '100%', maxHeight: '150px' }} />
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
                    <img src={image2} alt="Modified" style={{ maxWidth: '100%', maxHeight: '150px' }} />
                  ) : (
                    <div>
                      <div style={{ fontSize: '2rem' }}>📁</div>
                      <p>Upload Modified Image</p>
                    </div>
                  )}
                </label>
              </div>
            </div>
            
            {image1 && image2 && !showResults && (
              <div style={{ marginTop: '2rem' }}>
                <button 
                  className="btn-primary" 
                  style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}
                  onClick={handleCompare}
                  disabled={isComparing}
                >
                  {isComparing ? '🔄 Analyzing Images...' : '⚡ Compare Now'}
                </button>
              </div>
            )}

            {showResults && (
              <div className="results" style={{ marginTop: '3rem', textAlign: 'center' }}>
                <h3>Comparison Results</h3>
                <div className="results-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                  <div className="result-card" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px' }}>
                    <h4>📊 Similarity Score</h4>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4f46e5' }}>92%</p>
                  </div>
                  <div className="result-card" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px' }}>
                    <h4>🔍 Differences Found</h4>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>23</p>
                  </div>
                  <div className="result-card" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px' }}>
                    <h4>⏱️ Processing Time</h4>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>1.2s</p>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button className="btn-secondary" onClick={() => setShowResults(false)}>
                    🔄 Compare Another Set
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;