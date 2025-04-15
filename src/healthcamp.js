// src/pages/healthcamp.js
import React from 'react';
import './healthcamp.css';

function HealthCamp() {
  return (
    <main>
      <section className="hero-section">
        <h1>Weekly Health Camps</h1>
        <p>Free checkups, awareness drives, and wellness sessions</p>
      </section>

      <section className="classes-wrapper">
        <div className="accordion-section">
          <h2>Services at Our Camps</h2>
          <ul className="class-list">
            <li>General Health Check-ups</li>
            <li>Eye & Dental Screening</li>
            <li>Blood Pressure & Sugar Tests</li>
            <li>Health Awareness Seminars</li>
          </ul>
        </div>

        <div className="reviews-section">
          <h5>🧑‍⚕️ Community Voices</h5>
          <div className="review-card">
            "These camps are a blessing for the elderly." <br /><span>- Suresh R.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HealthCamp;
