import React, { useState } from 'react';
import { Dropdown, Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

const Header = ({ logo }) => {
  const [search, setSearch] = useState('');
  const popularLocations = ['Kerala', 'Tamil Nadu', 'Punjab', 'Maharashtra'];
  const [language, setLanguage] = useState('English'); // State for selected language

  return (
    <header className="full-width-header py-3">
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo or Fallback Text */}
          <Col xs={12} md={2} className="text-center text-md-left">
            {logo ? (
              <img src={logo} alt="Doctor Finder Logo" width="150" className="app-logo" />
            ) : (
              <h2 className="logo-text">Doctor Finder</h2> // Fallback text
            )}
          </Col>

          {/* Location Dropdown with Search */}
          <Col xs={12} md={2} className="location-dropdown-box">
            <Dropdown className="location-dropdown">
              <Dropdown.Toggle variant="light" id="location-dropdown">
                <i className="fa fa-map-marker" aria-hidden="true"></i> Search city or area
              </Dropdown.Toggle>

              <Dropdown.Menu className="location-dropdown-menu">
                {/* Search Input */}
                <Form.Control
                  type="text"
                  placeholder="Search city or area"
                  className="location-search-input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                {/* Popular Locations */}
                <div className="popular-locations">
                  <h6 className="text-muted px-3">POPULAR LOCATIONS</h6>
                  {popularLocations.map((location, index) => (
                    <Dropdown.Item key={index}>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> {location}
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Search Input */}
          <Col xs={12} md={5} className="d-flex flex-column flex-md-row">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                className="search-box"
              />
            </InputGroup>
          </Col>

          <Col xs={12} md={1} className="d-flex flex-column flex-md-row">
              <Dropdown className="language-dropdown">
                <Dropdown.Toggle variant="light" id="language-dropdown">
                  {language}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setLanguage('English')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage('Bengali')}>Bengali</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Col>

          {/* Login/Register Menu */}
          <Col xs={12} md={1} className="text-center text-md-right mt-3 mt-md-0">
            <Button variant='light' className="login-button">Login</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;