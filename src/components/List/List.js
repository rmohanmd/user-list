import React from "react";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  return (
    <ul>
      {props.list.map((user) => (
        <ListItem key={user.id} id={user.id}>
          {user.name} {user.age}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
