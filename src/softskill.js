// src/pages/softskill.js
import React from 'react';
import './softskill.css';

function SoftSkill() {
  return (
    <main>
      <section className="hero-section">
        <h1>Soft Skill Development</h1>
        <p>Building communication, confidence & career readiness</p>
      </section>

      <section className="classes-wrapper">
        <div className="accordion-section">
          <h2>Topics Covered</h2>
          <ul className="class-list">
            <li>Public Speaking & Confidence</li>
            <li>Leadership & Team Building</li>
            <li>Time Management</li>
            <li>Interview Preparation</li>
          </ul>
        </div>

        <div className="reviews-section">
          <h5>🎤 Student Feedback</h5>
          <div className="review-card">
            "Helped me crack my campus interview!" <br /><span>- Aditi M.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SoftSkill;
