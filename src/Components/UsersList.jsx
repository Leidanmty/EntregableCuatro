import React from "react";
import axios from "axios";
import '../App.css'

const UsersList = ({ users, selectUser, getUsers }) => {

    const deleteUser = (id) => {
        alert('Eliminando');
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers());
    };

    return (
        <ul>
            <h1 className="titulo">Users List</h1>
            {users.map((user) => (
                <li key={user.id}>
                    <h3><b>Nombre: </b>{user.first_name} {user.last_name}</h3>
                    <div className="info">
                        <b>E-mail: </b> {user.email}
                    </div>
                    <div className="info">
                        <b>Birthday: </b> {user.birthday}
                    </div>

                    <button onClick={() => selectUser(user)} className="buttoninfo">Edit</button>
                    <button onClick={() => deleteUser(user.id)} className="buttoninfo redit">Delete</button>
                </li>
            ))}
        </ul>
    );

};

export default UsersList;