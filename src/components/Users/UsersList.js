import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
    // TODO: now there is initially an empty list with white background (a white box that is an empty card)
  );
};

export default UsersList;
