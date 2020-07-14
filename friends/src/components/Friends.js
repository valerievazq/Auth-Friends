import React from "react";

export const Friends = (props) => {
  return (
    <div>
      <h4>{props.friend.name}</h4>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
};
