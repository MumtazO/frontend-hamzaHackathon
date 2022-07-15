import React, { useState } from "react";
import './App.css';
/*
THE PLAN
create a component with function that fetches the url from the backend
we could either use useEffect or async function
useState
we want our users array to render on the page
*/

function App() {
const [users, setUsers] = useState([]);

const addUsers = (newUsers) => {
  setUsers([...users, newUsers]);
};

  async function getUsers() {
  const response = await fetch ("http://localhost:3000/users");
  const data = await response.json();
  setUsers(data.payload);
  }
// console.log(getUsers());
console.log(users);

getUsers();

  return (
    <div>
    <h1>hello world</h1>  
    {users.map(function (users){
      return <p>{(users)}</p>
    })}
    </div>
  );
}

export default App;
