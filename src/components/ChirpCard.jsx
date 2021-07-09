import React from "react";

const ChirpCard = (props) => {
  return (
    <div className="border border-success rounded text-center">
      <h3>{props.todo.username}</h3>
      <p> {props.todo.message} </p>
    </div>
  );
};

export default ChirpCard;