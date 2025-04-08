import React from 'react';
import background from '../assets/images/background1.jpg'; // correct path from src
import './hero.css'; // Import your CSS file for styling
export default function AppHero() {
    return (
        <div className="img-container">
            <img 
                id="teamwork" 
                src={background}
                className="img-fluid" 
                alt="background" 
            />
            <div className="big-tagline">
                <h1>Welcome to <br/><strong>Dnyanasa</strong> Foundation</h1>
                <p className="lead">
                    A community-focused organization dedicated to enhancing the well-being 
                    and quality of life for individuals in our community.
                </p>
            </div>
        </div>
    );
}
