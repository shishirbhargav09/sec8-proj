import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [userlist, setUserlist] = useState([])
  const adduserHandler = (uname, uage) => {
    setUserlist((prevList) => {
      return [...prevList, {name: uname, age: uage}]
    })
    
  }
  return (
    <div>
        <AddUser onAdduser={adduserHandler}/>
        <UsersList userlist={userlist} />
    </div>
  );
}

export default App;
