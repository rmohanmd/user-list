import React from "react";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import styles from "./Modal.module.css";
// import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.modalClose}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.modalClose}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
