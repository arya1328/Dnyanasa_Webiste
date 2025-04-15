// src/pages/healthcaretraining.js
import React from 'react';
import './healthcaretraining.css';

function HealthcareTraining() {
  return (
    <main>
      <section className="hero-section">
        <h1>Healthcare Training</h1>
        <p>Empowering medicos with essential skills & practical knowledge</p>
      </section>

      <section className="classes-wrapper">
        <div className="accordion-section">
          <h2>Programs Offered</h2>
          <ul className="class-list">
            <li>First Aid & Emergency Response</li>
            <li>CPR & Basic Life Support</li>
            <li>Medical Ethics & Communication</li>
            <li>Patient Care Techniques</li>
          </ul>
        </div>

        <div className="reviews-section">
          <h5>🩺 Testimonials</h5>
          <div className="review-card">
            "The CPR training was incredibly helpful!" <br /><span>- Dr. Sharma</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HealthcareTraining;
