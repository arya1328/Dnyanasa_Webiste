// src/pages/yoga.js
import React from 'react';
import './yoga.css';

function Yoga() {
  return (
    <main>
      <section className="hero-section">
        <h1>Yoga & Wellness</h1>
        <p>Enhancing mind-body harmony through daily yoga sessions</p>
      </section>

      <section className="classes-wrapper">
        <div className="accordion-section">
          <h2>Yoga Programs</h2>
          <ul className="class-list">
            <li>Morning Flow Yoga</li>
            <li>Pranayama & Breathing Techniques</li>
            <li>Meditation & Mindfulness</li>
            <li>Therapeutic Yoga for Back & Posture</li>
          </ul>
        </div>

        <div className="reviews-section">
          <h5>🧘 Participant Reflections</h5>
          <div className="review-card">
            "The morning sessions have become my daily boost!" <br /><span>- Meera S.</span>
          </div>
          <div className="review-card">
            "Helped me manage stress and sleep better." <br /><span>- Arjun K.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Yoga;
