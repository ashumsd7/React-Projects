import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();


    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
       return;
    }
    if(enteredUsername.trim().length <=1 || +enteredAge.trim() <=1){
        return;
     }

    // console.log(enteredUsername, enteredAge);

    props.onAddUser(enteredUsername, enteredAge)

    setEnteredUsername("");
    setEnteredAge("");
  };

  function userNameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  console.log(classes);
  return (
    <Card
      style={{ background: "red" }}
      onClick={addUserHandler}
      cssClass={classes.input}
    >
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          value={enteredUsername}
          onChange={userNameChangeHandler}
          id="username"
          type="text"
        />

        <label htmlFor="age">User Age</label>
        <input
          value={enteredAge}
          onChange={ageChangeHandler}
          id="age"
          type="number"
        />

        <Button type="submit"> Add User</Button>
      </form>

   
    </Card>
  );
};

export default AddUser;
