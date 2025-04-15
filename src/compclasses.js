// src/pages/compclasses.js
import React from 'react';
import './compclasses.css';

function CompClasses() {
  return (
    <main>
      <section className="hero-section">
        <h1>Computer Classes</h1>
        <p>Learn programming languages, tools, and digital skills</p>
      </section>

      <section className="classes-wrapper">
        <div className="accordion-section">
          <h2>What You Can Learn</h2>
          <ul className="class-list">
            <li>Python & C++ Basics</li>
            <li>Web Development</li>
            <li>MS Office Suite</li>
            <li>Graphic Design & Canva</li>
          </ul>
        </div>

        <div className="reviews-section">
          <h5>💻 Learner Reviews</h5>
          <div className="review-card">
            "I created my first website here!" <br /><span>- Rohan P.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompClasses;
