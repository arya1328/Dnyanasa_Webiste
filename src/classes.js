import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
//import './services.css'; // Optional custom styling

export default function Classes() {
    const services = [
        {
            id: 1,
            title: "Harmony's Music and Dance Academy",
            image: "/images/music.jpg",
            description: "Healing through sound and rhythm.",
            link: "/musicdanceacademy"
        },
        {
            id: 2,
            title: "Healthcare Training for Medicos",
            image: "/images/music.jpg",
            description: "Medical skills for future healthcare leaders.",
            link: "/healthcaretraining"
        },
        {
            id: 3,
            title: "Soft Skill Development",
            image: "/images/music.jpg",
            description: "Build confidence, communication and leadership.",
            link: "/services/softskill"
        },
        {
            id: 4,
            title: "Computer and IT Training",
            image: "/images/music.jpg",
            description: "Digital empowerment for all ages.",
            link: "/services/compclasses"
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
            description: "Promoting preventive care and awareness.",
            link: "/services/healthcamp"
        },
    ];

    return (
      <div style={{ paddingTop: '40px' }}>
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <Row>
                {services.map(service => (
                    <Col md={12} className="mb-4" key={service.id}>
                        <Card className="service-card-vertical">
                            <Row className="g-0">
                                <Col md={4}>
                                    <Card.Img
                                        src={process.env.PUBLIC_URL + service.image}
                                        alt={service.title}
                                        className="h-100 w-100"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                        <Button variant="primary" href={service.link}>
                                            Learn More
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
}
