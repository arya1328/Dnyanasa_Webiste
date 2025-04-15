import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './mdaclasses.css';
import { mdainstrumets, mdaart, mdadance, mdadrama, mdasinging } from './serviceslist';
import useScrollUtils from './scrollUtils';

function MdaClasses() {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const { scrollRef: scrollRefMusic, handleNext: handleNextMusic } = useScrollUtils();
  const { scrollRef: scrollRefArt, handleNext: handleNextArt } = useScrollUtils();
  const { scrollRef: scrollRefDance, handleNext: handleNextDance } = useScrollUtils();
  const { scrollRef: scrollRefSinging, handleNext: handleNextSinging } = useScrollUtils();
  const { scrollRef: scrollRefDrama, handleNext: handleNextDrama } = useScrollUtils();

  const handleOpenModal = (classData) => {
    setSelectedClass(classData);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const renderCards = (data, handleScroll) => (
    <div className="carousel-wrapper">
      <div className="scrolling-cards" ref={handleScroll.scrollRef}>
        {data.map((service) => (
          <div
            className="service-card"
            key={service.id}
            onClick={() => handleOpenModal(service)}
          >
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
        onClick={handleScroll.handleNext}
      >
        →
      </Button>
    </div>
  );

  return (
    <div className="classes-wrapper">
      <div className="accordion-section">
        <h2>Our Classes</h2>
        <p className="lead">Explore different programs we offer</p>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>🎵 Musical Instruments</Accordion.Header>
            <Accordion.Body>
              {renderCards(mdainstrumets, { scrollRef: scrollRefMusic, handleNext: handleNextMusic })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> 🎨 Art</Accordion.Header>
            <Accordion.Body>
              {renderCards(mdaart, { scrollRef: scrollRefArt, handleNext: handleNextArt })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> 💃 Dance</Accordion.Header>
            <Accordion.Body>
              {renderCards(mdadance, { scrollRef: scrollRefDance, handleNext: handleNextDance })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header> 🎤 Singing</Accordion.Header>
            <Accordion.Body>
              {renderCards(mdasinging, { scrollRef: scrollRefSinging, handleNext: handleNextSinging })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header> 🎭 Drama</Accordion.Header>
            <Accordion.Body>
              {renderCards(mdadrama, { scrollRef: scrollRefDrama, handleNext: handleNextDrama })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

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

      {/* Popup Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedClass?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={process.env.PUBLIC_URL + selectedClass?.image}
            alt={selectedClass?.title}
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <p><strong>Description:</strong> {selectedClass?.description}</p>
          <p><strong>Batches:</strong></p>
          <ul>
            {selectedClass?.batches?.map((batch, index) => (
              <li key={index}>{batch}</li>
            ))}
          </ul>
          <p><strong>Fees:</strong> {selectedClass?.fees}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={() => alert("Redirect to registration page coming soon!")}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MdaClasses;
