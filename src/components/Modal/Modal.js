import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className={`modal-overlay ${!props.valid ? "show" : ""}`}
      onClick={props.modalClose}
    >
      <div className="modal-box">
        <div className="modal-title">Invalid Input</div>
        <div className="modal-content">
          {props.content}
          <button className="modal-button" onClick={props.modalClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
