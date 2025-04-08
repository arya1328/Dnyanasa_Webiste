import React, { useRef, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import './services.css';
//import { useNavigate } from 'react-router-dom';

export default function AppServices() {
    const scrollRef = useRef(null);
    const [index, setIndex] = useState(0);
    //const navigate = useNavigate();

    const services = [
        {
            id: 1,
            title: "Harmony's Music and Dance Academy",
            image: "/images/music.jpg",
            description: "Healing through sound and rhythm.",
            link: "/services/music"
        },
        {
            id: 2,
            title: "healthcare training for medicos",
            image: "/images/music.jpg",
            description: "Unleash creativity through guided art.",
            link: "/services/art"
        },
        {
            id: 3,
            title: "soft skill development",
            image: "/images/music.jpg",
            description: "Find balance and peace through yoga.",
            link: "/services/yoga"
        },
        {
            id: 4,
            title: "IT litercay courses",
            image: "/images/music.jpg",
            description: "Find balance and peace through yoga.",
            link: "/services/yoga"
        },
        {
            id: 5,
            title: "Yoga and Meditation",
            image: "/images/music.jpg",
            description: "Find balance and peace through yoga.",
            link: "/services/yoga"
        },
        {
            id: 6,
            title: "Health Checkup Camps",
            image: "/images/music.jpg",
            description: "Find balance and peace through yoga.",
            link: "/services/yoga"
        },
        // Add more...
    ];

    const cardWidth = 270; // card + margin
    const handleNext = () => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth;
        const isAtEnd = container.scrollLeft + scrollAmount >= container.scrollWidth;

        container.scrollTo({
            left: isAtEnd ? 0 : container.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    };
    
    return (
        <div className="services-grid">
            <div className="services-header">
                <h2>Our Services</h2>
            </div>

            <div className="carousel-wrapper">
                <div className="scrolling-cards" ref={scrollRef}>
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <img
                                src={process.env.PUBLIC_URL + service.image}
                                alt={service.title}
                            />
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
                    onClick={handleNext}
                >
                    →
                </Button>
            </div>
        </div>
    );
}