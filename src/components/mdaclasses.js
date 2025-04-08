import React from "react";
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './mdaclasses.css';
import { mdainstrumets } from './serviceslist';
import { mdaart } from './serviceslist'; // ✅ import the services list
import { mdadance } from './serviceslist'; // ✅ import the services list
import useScrollUtils from './scrollUtils'; // ✅ hook import

function MdaClasses() {
  const { scrollRef: scrollRefMusic, handleNext: handleNextMusic } = useScrollUtils();
const { scrollRef: scrollRefArt, handleNext: handleNextArt } = useScrollUtils();
const { scrollRef: scrollRefDance, handleNext: handleNextDance } = useScrollUtils();
const { scrollRef: scrollRefSinging, handleNext: handleNextSinging } = useScrollUtils();
  return (
    <div className="classes-wrapper">
      {/* Left Side: Accordion */}
      <div className="accordion-section">
        <h2>Our Classes</h2>
        <p className="lead">Explore different programs we offer</p>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>🎵 Musical Instruments</Accordion.Header>
            <Accordion.Body>
            <div className="carousel-wrapper">
              <div className="scrolling-cards" ref={scrollRefMusic}>
                {mdainstrumets.map((service) => (
                  <div className="service-card" key={service.id}>
                    <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
                    <div className="overlay">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="dark"
                className="scroll-arrow"
                onClick={handleNextMusic}
              >
                →
              </Button>
</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> 🎨 Art</Accordion.Header>
            <Accordion.Body>
            <div className="carousel-wrapper">
              <div className="scrolling-cards" ref={scrollRefArt}>
                {mdaart.map((service) => (
                  <div className="service-card" key={service.id}>
                    <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
                    <div className="overlay">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="dark"
                className="scroll-arrow"
                onClick={handleNextArt}
              >
                →
              </Button>
</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> 💃 Dance</Accordion.Header>
            <Accordion.Body>
            <div className="carousel-wrapper">
              <div className="scrolling-cards" ref={scrollRefDance}>
                {mdadance.map((service) => (
                  <div className="service-card" key={service.id}>
                    <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
                    <div className="overlay">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="dark"
                className="scroll-arrow"
                onClick={handleNextDance}
              >
                →
              </Button>
</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header> 🎤 Singing</Accordion.Header>
            <Accordion.Body>
            <div className="carousel-wrapper">
              <div className="scrolling-cards" ref={scrollRefSinging}>
                {mdadance.map((service) => (
                  <div className="service-card" key={service.id}>
                    <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
                    <div className="overlay">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="dark"
                className="scroll-arrow"
                onClick={handleNextSinging}
              >
                →
              </Button>
</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* Right Side: Reviews */}
      <div className="reviews-section">
        <h5>🌟 Student Reviews</h5>
        <div className="review-card">
          "Amazing instructors and vibrant classes!"<br /><span>- Riya S.</span>
        </div>
        <div className="review-card">
          "My child loves the art sessions!"<br /><span>- Neha M.</span>
        </div>
        <div className="review-card">
          "Great place to learn and grow creatively."<br /><span>- Aarav P.</span>
        </div>
      </div>
    </div>
  );
}

export default MdaClasses;
