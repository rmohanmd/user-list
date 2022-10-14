import React from "react";

const onSubmitHandler = (event) => {
  event.preventDefault();
  console.log("testing");
};

const Input = () => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Name</label>
      <input type="text" minLength="1" />
      <br />
      <label>Age</label>
      <input type="number" min="0" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
