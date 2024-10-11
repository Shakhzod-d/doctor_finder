import { Button, Dropdown, Form } from "react-bootstrap";
import React, { useState } from "react";

import { RxCross1 } from "react-icons/rx";

const NavModal = ({ setOpenNavModal }) => {
  const [language, setLanguage] = useState("English"); // State for selected language
  const popularLocations = ["Kerala", "Tamil Nadu", "Punjab", "Maharashtra"];
  const [search, setSearch] = useState("");
  return (
    <div className="modal-container nav-modal">
      <div className="modal-item">
        <span
          className="cursor-pointer mb-3"
          onClick={() => setOpenNavModal(false)}
        >
          <RxCross1 />
        </span>
        <Dropdown className="language-drop my-4 ">
          <Dropdown.Toggle variant="light" id="language-dropdown">
            {language}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLanguage("English")}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage("Bengali")}>
              Bengali
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="location-drop mb-4 modals">
          <Dropdown.Toggle variant="light" id="location-dropdown">
            <i className="fa fa-map-marker" aria-hidden="true"></i> Search city
            or area
          </Dropdown.Toggle>

          <Dropdown.Menu id="location-dropdown-menu">
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
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  {location}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>{" "}
        <Button variant="light" className="login-button modals">
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavModal;
