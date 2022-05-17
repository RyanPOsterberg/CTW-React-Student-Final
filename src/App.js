import React, {useState} from 'react';
import AddUser from "./components/users/AddUser.js"
import UsersList from "./components/users/UsersList.js"
import { mockRequest } from './mockRequest.js';

const addUser = ({ user }) => mockRequest({ returnValue: user, error: false });


function App() {
  const [usersList, setUsersList] = useState([]);

  // function addUserHandler(username, age) {
  //   const newUser = {
  //     name: username,
  //     age: age,
  //     id: Math.random().toString(),
  //     active: true
  //   };
  //   setUsersList((prevUsersList) => {
  //     return [...prevUsersList, newUser];
  //   });
  // }

  async function addUserHandler(username, age) {
    const newUser = {
      name: username,
      age: age,
      id: Math.random().toString(),
      active: true
    };
    setUsersList((prevUsersList) => {
      return [...prevUsersList, newUser];
    });

    try {
      const response = await addUser({ newUser });
      console.log("Response:", response);
    } catch (error) {
      console.log("Error");
    }

  }

  function deleteUserHandler(userId) {
    const userIndex = usersList.findIndex(user =>
      user.id === userId
    );
    const updatedUsers = [...usersList];
    updatedUsers[userIndex].active = false;
    setUsersList(updatedUsers);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList} deleteUser={deleteUserHandler}></UsersList>
    </div>
  );
}

export default App;
