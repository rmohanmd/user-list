import React, { useState } from "react";
import Modal from (../Model/Modal);

const Input = (props) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newName.trim().length === 0) {
      setIsNameValid(false);
      return;
    }

    props.addUser(newName, newAge);
    setNewName("");
    setNewAge(0);
  };

  const nameInputHandler = (event) => {
    setNewName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setNewAge(event.target.value);
  };

  return (
    <Modal />
    <form onSubmit={onSubmitHandler}>
      <label>Name</label>
      <input
        value={newName}
        type="text"
        onChange={nameInputHandler}
        minLength="1"
      />
      <br />
      <label>Age</label>
      <input value={newAge} type="number" onChange={ageInputHandler} min="0" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
