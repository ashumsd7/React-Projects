import React, {useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(enteredUsername, enteredAge)

    setEnteredUsername('')
    setEnteredAge('')
    
  };


  function userNameChangeHandler(event){
    setEnteredUsername(event.target.value)
  }
  function ageChangeHandler(event){
    setEnteredAge(event.target.value)
  }
   console.log(classes)
  return (


      <Card style={{background: "red"}} onClick={addUserHandler} cssClass={classes.input}>
        {/* <input className={classes.input}></input> */}
        {enteredUsername}
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input value={enteredUsername} onChange={userNameChangeHandler} id="username" type="text" />

      <label htmlFor="age">User Age</label>
      <input value={enteredAge} onChange={ageChangeHandler} id="age" type="number" />

      <Button type="submit"> Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
