import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({ userSelected, getUsers, deselectUser }) => {

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
                    getUsers();
                    reset();
                    deselectUser();
                });
        } else {
            axios
                .post("https://users-crud1.herokuapp.com/users/", userForm)
                .then(() => {
                    getUsers();
                    reset();
                })
                .catch((error) => console.log(error.response));
        }
    };

    const reset = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }

    const clear = () => {
        reset()
        deselectUser()
    }

    return (
        <form className="userForm" onSubmit={submit}>
            <h1>Users Form </h1>

            <div className="input-container">
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="date">Date Birthday:</label>
                <input
                    type="date"
                    id="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </div>

            <button>Submit</button>
            <button>Clear</button>
        </form>
    );
};

export default UsersForm;