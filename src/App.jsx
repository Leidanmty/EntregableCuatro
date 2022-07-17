import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState({});

  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data));
  }, []);

  console.log(users);

  return (
    <div className="App">
      
    </div>
  )
}

export default App
