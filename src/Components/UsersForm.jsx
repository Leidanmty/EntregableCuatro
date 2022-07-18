import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({ userSelected }) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        }
    }, [userSelected])

    const submit = (e) => {
        e.preventDefault();
        const userForm = {
            email: email,
            password: password,
            first_name: name,
            last_name: lastName,
            birthday: birthday
        };
        if (userSelected !== null) {
            // Actualizando
            alert("Actualizando");
            axios
                .put(
                    `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
                    userForm
                )
                .then(() => {
                    getMovies();
                    reset();
                    deselectMovie();
                });
        } else {
            axios
                .post("https://users-crud1.herokuapp.com/users/", userForm)
                .then(() => {
                    getMovies();
                    reset();
                })
                .catch((error) => console.log(error.response));
        }
    };

    return (
        <form className="userForm">
            <h1>Users Form </h1>

            <div className="input-container">
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="lastname">Last name:</label>
                <input
                    type="text"
                    id="lastname"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="date">Date Birthday:</label>
                <input
                    type="date"
                    id="date"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                />
            </div>

            <button>Submit</button>
            <button>Clear</button>
        </form>
    );
};

export default UsersForm;