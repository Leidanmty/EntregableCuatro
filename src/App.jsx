import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import UsersForm from './Components/UsersForm'

function App() {
  const [users, setUsers] = useState({});

  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data));
  }, []);

  console.log(users);

  return (
    <div className="App">
      <UsersForm />
    </div>
  )
}

export default App
