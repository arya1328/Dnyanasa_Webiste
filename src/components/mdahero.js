import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './mdahero.css';

// Import all images you want to cycle through
import bg1 from '../assets/images/background1.jpg';
import bg2 from '../assets/images/background.jpg';
import bg3 from '../assets/images/music.jpg';

export default function MdaHero() {
  return (
    <div className="img-container">
      <Carousel controls={false} indicators={false} fade interval={4000} pause={false}>
        {[bg1, bg2, bg3].map((img, index) => (
          <Carousel.Item key={index}>
            <img className="img-fluid carousel-img" src={img} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="big-tagline">
        <h1>Welcome to <br /><strong>Dnyanasa</strong> Foundation</h1>
        <p className="lead">
          A community-focused organization dedicated to enhancing the well-being 
          and quality of life for individuals in our community.
        </p>
      </div>
    </div>
  );
}
