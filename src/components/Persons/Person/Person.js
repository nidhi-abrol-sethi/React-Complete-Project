import React from "react";
import classes from "./Person.module.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        {" "}
        I am {props.name} and My age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
