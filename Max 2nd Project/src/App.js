import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
im

function App() {

  const [usersList, setUsersList] = useState([{name:'ashi', age:89, id: Math.random().toString()}]);

  function addUserHandler(name,age){
    console.log(name,age)
    console.log("CALL HUA KYA")
    setUsersList(prevState=>{

      console.log([...prevState, {name:name, age: age}])
     return [...prevState, {name:name, age: age}]
    })

  }


  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <
    </>
  );
}

export default App;
