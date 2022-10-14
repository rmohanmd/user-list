import React, { useState } from "react";

const Input = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("testing");
  };

  const nameInputHandler = (event) => {
    setNewName(event.target.value);
    console.log(newName);
  };

  const ageInputHandler = (event) => {
    setNewAge(event.target.value);
  };

  return (
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
