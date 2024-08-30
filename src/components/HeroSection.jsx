import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
      <h2 className="hero-subtitle">Make your <strong>Website</strong> Smart</h2>
        <h1 className="hero-title">AI Chat Bots That Learn,adapt &<br />Boost Youre Sales....</h1>
        <div className="hero-buttons">
          <button className="btn btn-primary">Sign up</button>
          <button className="btn btn-secondary">Request a demo</button>
        </div>
      </div>
      <div className="trusted-by">
        <p>TRUSTED BY</p>
        <div className="logo-container">
          <img src="/api/placeholder/100/30" alt="MetaMap" className="company-logo" />
          <img src="/api/placeholder/100/30" alt="Ninenets" className="company-logo" />
          <img src="/api/placeholder/100/30" alt="RagaAI" className="company-logo" />
          <img src="/api/placeholder/100/30" alt="Osfin.ai" className="company-logo" />
          <img src="/api/placeholder/100/30" alt="PAYS" className="company-logo" />
          <img src="/api/placeholder/100/30" alt="AXIO" className="company-logo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;