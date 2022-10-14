import React, { useState } from "react";
import List from "./components/List/List";

function App() {
  const [userList, setUserList] = useState([
    { id: 1, name: "Ro Mo", age: 35 },
    { id: 2, name: "Ry Si", age: 33 },
    { id: 3, name: "J U", age: 34 },
  ]);

  return (
    <div>
      <section>
        <List list={userList} />
      </section>
    </div>
  );
}

export default App;
