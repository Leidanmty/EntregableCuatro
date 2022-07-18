import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import UsersForm from './Components/UsersForm'
import UsersList from './Components/UsersList'

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data));
  }, []);

  console.log(users);

  const selectUser = (user) => {
    alert('Seleccionaste este target')
    setUserSelected(user);
  };

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  return (
    <div className="App">
      <UsersForm 
      userSelected={userSelected}
      />
      <br />
      <UsersList 
      users={users}
      selectUser={selectUser}
      />
    </div>
  )
}

export default App
