import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    alert("AHSH")
  };
   console.log(classes)
  return (


      <Card style={{background: "red"}} onClick={addUserHandler} cssClass={classes.input}>
        {/* <input className={classes.input}></input> */}
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input id="username" type="text" />

      <label htmlFor="age">User Age</label>
      <input id="age" type="number" />

      <Button type="submit"> Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
