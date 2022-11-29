import React, { useState } from "react";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {
  const [userList, setUserList] = useState([
    { id: 1, name: "Ro Mo", age: 35 },
    { id: 2, name: "Ry Si", age: 33 },
    { id: 3, name: "Ja Un", age: 34 },
    { id: 4, name: "Na Br", age: 21 },
  ]);

  const addUserHandler = (name, age) => {
    setUserList((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), name: name, age: age },
      ];
    });
  };

  return (
    <div>
      <Input addUser={addUserHandler} />
      <List list={userList} />
    </div>
  );
}

export default App;
