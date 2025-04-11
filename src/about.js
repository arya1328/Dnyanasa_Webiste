// about.js
import React from "react";
import "./about.css";

const About = () => {
  return (

    <div className="about-page">

      <section className="hero-section">
        <img
          src="./images/background1.jpg"
          alt="Team working"
          className="hero-img"
        />
        <h1 className="hero-title">About Us</h1>
      </section>

      <section className="quote-section">
        <blockquote>
          "Our work does make sense only if it is a faithful witness of the time."
        </blockquote>
        <p className="quote-author">- Unknown</p>
      </section>

      <section className="core-values">
        <div className="value-card">
          <img src="./images/Dnyanasa_Logo.jpeg" alt="Goals" />
          <h3>Goals</h3>
        </div>
        <div className="value-card">
          <img src="./images/Dnyanasa_Logo.jpeg" alt="Vision" />
          <h3>Vision</h3>
        </div>
        <div className="value-card">
          <img src="./images/Dnyanasa_Logo.jpeg" alt="Mission" />
          <h3>Mission</h3>
        </div>
      </section>

      <section className="team-section">
        <h2>Team Member</h2>
        <div className="team-grid">
          {[...Array(6)].map((_, index) => (
            <div className="team-circle" key={index}></div>
          ))}
        </div>
      </section>

      <section className="journey-section">
        <h2>Our Journey</h2>
        <div className="journey-flow">
          {[...Array(7)].map((_, index) => (
            <div className="journey-dot" key={index}></div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <div>Contact us -</div>
        <div>Address -</div>
      </footer>
    </div>
  );
};

export default About;
