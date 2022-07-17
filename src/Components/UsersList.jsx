import React from "react";
import axios from "axios";

const UsersList = ({ users }) => {

    return (
        <ul>
            <h1>Users List</h1>
            {users.map((users) => (
                <li>
                    <h3>{users.first_name} {users.last_name}</h3>
                    <div>
                        <p>{users.email}</p>
                    </div>
                    <div>
                        <p>{users.birthday}</p>
                    </div>

                    <button /*onClick={() => selectMovie(movie)}*/>Edit</button>
                    <button /*onClick={() => deleteMovie(movie.id)}*/>Delete</button>
                </li>
            ))}
        </ul>
    );

};

export default UsersList;