import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './header.css';

export default function AppHeader() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src={process.env.PUBLIC_URL + '/images/Dnyanasa_logo.jpeg'}
            height="40"
            width="40"
            alt="Dnyanasa Logo"
          />
          <span className="fw-bold">Dnyanasa Foundation</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered navigation links */}
          <Nav className="mx-auto text-center">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/blogs" className="nav-link">Blogs</Link>
  <Link to="/classes" className="nav-link">Classes</Link>
  <Link to="/aboutus" className="nav-link">About Us</Link>
  <Link to="/contactus" className="nav-link">Contact Us</Link>
</Nav>


          {/* Right-aligned button */}
          <div className="d-flex ms-auto">
            <Button variant="success">Sign Up to Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
