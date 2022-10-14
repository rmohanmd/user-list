import React from "react";

let userList = [
  { id: 1, name: "Ro Mo", age: 35 },
  { id: 2, name: "Ry Si", age: 33 },
  { id: 3, name: "J U", age: 34 },
];

function App() {
  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li key={user.id} id={user.id}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
