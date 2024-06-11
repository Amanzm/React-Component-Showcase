import React from "react";
import "./ModalLogic.css"; // Import custom CSS

function ModalLogic({ handleClose, head, body, foot }) {
  return (
    <div className="modal-container">
      <div className="card text-center modal-card animate-modal">
        <div className="card-header lead  d-flex justify-content-between align-items-center">
          {head ? head : "Special title treatment"}
          <button className="btn btn-outline-primary" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {head ? head : "Special title treatment"}
          </h5>
          <p className="card-text">
            {body
              ? body
              : "With supporting text below as a natural lead-in to additional content."}
          </p>
          <button onClick={handleClose} className="btn btn-outline-primary">
            Close
          </button>
        </div>
        <div className="card-footer text-body-secondary">
          {foot ? foot : "2 days ago"}
        </div>
      </div>
    </div>
  );
}

export default ModalLogic;
