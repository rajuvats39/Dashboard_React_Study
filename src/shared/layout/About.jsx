// src/AboutPage.js
import React from 'react';
import './Layout.css'; // Import the corresponding CSS file

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Discover our team, mission, and values.</p>
      </section>
      <section className="about-content">
        <div className="about-section mission">
          <h2>Our Mission</h2>
          <p>We strive to create impactful digital experiences for users globally.</p>
        </div>
        <div className="about-section team">
          <h2>Our Team</h2>
          <p>Our diverse team of designers, developers, and visionaries work together to bring innovative ideas to life.</p>
        </div>
        <div className="about-section values">
          <h2>Our Values</h2>
          <p>We believe in creativity, collaboration, and continuous growth.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
