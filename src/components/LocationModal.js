import React from "react";

import { RxCross1 } from "react-icons/rx";

const LocationModal = ({ setOpenModal }) => {
  return (
    <div className="modal-container">
      <div id="modal">
        <span className="cross" onClick={() => setOpenModal(false)}>
          <RxCross1 />
        </span>
        <h1>Where is your location ?</h1>
        <p>Find Doctor by telling us your location</p>
        <button onClick={() => setOpenModal(false)}>
          Choose your location
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
