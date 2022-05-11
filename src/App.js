import React from 'react';
import AddUser from "./components/users/AddUser.js"
import UsersList from "./components/users/UsersList.js"

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
