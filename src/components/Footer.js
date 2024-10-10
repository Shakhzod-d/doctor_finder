import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="full-width-footer py-3">
      <Container fluid>
        <Row className="align-items-center">
          {/* Copyright Section */}
          <Col xs={12} md={6} className="text-left">
            <p className="mb-0">&copy; 2024 Doctor Finder. All rights reserved.</p>
          </Col>

          {/* Navigation Links Section */}
          <Col xs={12} md={6} className="text-end">
            <div className="footer-links">
              <a href="#about" className="text-white mx-2">About</a>
              <a href="#faq" className="text-white mx-2">FAQ</a>
              <a href="#privacy" className="text-white mx-2">Privacy Policy</a>
              <a href="#contact" className="text-white mx-2">Contact</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
