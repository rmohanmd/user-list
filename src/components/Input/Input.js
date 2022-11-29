import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import styles from "./Input.module.css";

const Input = (props) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (newName.trim().length === 0 || newAge.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (newAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.addUser(newName, newAge);
    setNewName("");
    setNewAge(0);
  };

  const modalClose = () => {
    setError(null);
  };

  const nameInputHandler = (event) => {
    setNewName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setNewAge(event.target.value);
  };

  return (
    <section>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          modalClose={modalClose}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={newName}
            onChange={nameInputHandler}
          />
          <br />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={newAge}
            type="number"
            step="1"
            onChange={ageInputHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </section>
  );
};

export default Input;
