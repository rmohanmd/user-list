import React from "react";
import Button from "../Utils/Button";
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
          <Button className="modal-button" onClick={props.modalClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
