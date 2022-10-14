import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Input = (props) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [messageContent, setMessageContent] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newName.trim().length === 0 || newAge.length === 0) {
      setMessageContent("Please enter a valid name and age (non-empty values)");
      setIsValid(false);

      return;
    } else if (newAge < 1) {
      setMessageContent("Age must be > 0");
      setIsValid(false);

      return;
    }

    props.addUser(newName, newAge);
    setNewName("");
    setNewAge(0);
  };

  const modalClose = () => {
    setIsValid(true);
  };

  const nameInputHandler = (event) => {
    setNewName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setNewAge(event.target.value);
  };

  return (
    <section>
      <Modal content={messageContent} valid={isValid} modalClose={modalClose} />
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          // value={newName}
          type="text"
          onChange={nameInputHandler}
          minLength="1"
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          // value={newAge}
          type="number"
          onChange={ageInputHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Input;
