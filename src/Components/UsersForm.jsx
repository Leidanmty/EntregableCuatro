

const UsersForm = () => {

    return (
        <form className="userForm">
            <h1>Users Form </h1>
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