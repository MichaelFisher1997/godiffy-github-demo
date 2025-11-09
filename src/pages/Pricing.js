import React from 'react';

const Pricing = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that fits your needs</p>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="pricing-card" style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h3>Free</h3>
              <div className="price" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4f46e5' }}>$0</div>
              <p style={{ color: '#666' }}>Perfect for trying out ImageDiff</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 5 comparisons per month</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Basic comparison features</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Email support</li>
                <li style={{ marginBottom: '0.5rem' }}>✗ Advanced analytics</li>
              </ul>
              <button className="btn-secondary" style={{ width: '100%' }}>Get Started</button>
            </div>

            <div className="pricing-card" style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '2px solid #4f46e5' }}>
              <div style={{ background: '#4f46e5', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px', display: 'inline-block', marginBottom: '1rem' }}>Popular</div>
              <h3>Pro</h3>
              <div className="price" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4f46e5' }}>$19</div>
              <p style={{ color: '#666' }}>For professionals and teams</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Unlimited comparisons</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Advanced comparison tools</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Priority support</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Detailed analytics</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ API access</li>
              </ul>
              <button className="btn-primary" style={{ width: '100%' }}>Start Free Trial</button>
            </div>

            <div className="pricing-card" style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h3>Enterprise</h3>
              <div className="price" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4f46e5' }}>Custom</div>
              <p style={{ color: '#666' }}>For large organizations</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Everything in Pro</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Custom integrations</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Dedicated support</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ SLA guarantee</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ On-premise option</li>
              </ul>
              <button className="btn-secondary" style={{ width: '100%' }}>Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ background: '#f8fafc', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>30-day money-back guarantee</h2>
          <p>Try ImageDiff risk-free. If you're not satisfied, get a full refund.</p>
          <a href="/demo" className="btn-primary">Start Your Free Trial</a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;