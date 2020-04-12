import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.module.css";
//import person from "./Person/Person";

export default class App extends Component {
  state = {
    users: [
      { id: "rtgf", name: "Nidhi", age: 34 },
      { id: "rghf", name: "Rashi", age: 36 },
      { id: "riyf", name: "Manish", age: 34 }
    ],
    showPerson: false
  };
  togglePersons = () => {
    const doesShow = this.state.showPerson;
    console.log("doesShow", doesShow);
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = userIndex => {
    const newUsers = [...this.state.users];
    newUsers.splice(userIndex, 1);
    this.setState({ users: newUsers });
  };
  nameChangeHandler = (event, id) => {
    const userIndex = this.state.users.findIndex(usr => {
      return usr.id === id;
    });
    const newUser = { ...this.state.users[userIndex] };
    // console.log("newUser", newUser);
    newUser.name = event.target.value;
    const updateUsers = [...this.state.users];
    //console.log("newUsers", newUsers);
    updateUsers[userIndex] = newUser;

    this.setState({
      users: updateUsers
    });
  };
  render() {
    let person = null;

    if (this.state.showPerson) {
      person = (
        <Persons
          users={this.state.users}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          users={this.state.users}
          clicked={this.togglePersons}
        />
        {person}
      </div>
    );
  }
}
