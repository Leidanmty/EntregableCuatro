import React from "react";
import axios from "axios";

const UsersList = ({ users, selectUser }) => {

    return (
        <ul>
            <h1>Users List</h1>
            {users.map((user) => (
                <li key={user.id}>
                    <h3>{user.first_name} {user.last_name}</h3>
                    <div>
                        <b>E-mail: </b> {user.email}
                    </div>
                    <div>
                        <b>Birthday</b> {user.birthday}
                    </div>

                    <button onClick={() => selectUser(user)}>Edit</button>
                    <button /*onClick={() => deleteMovie(movie.id)}*/>Delete</button>
                </li>
            ))}
        </ul>
    );

};

export default UsersList;