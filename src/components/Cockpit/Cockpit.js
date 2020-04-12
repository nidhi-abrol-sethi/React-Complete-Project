import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = [classes.button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }
  if (props.users.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.users.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>It is Really Working</p>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Toggle Users
      </button>
    </div>
  );
};

export default cockpit;
