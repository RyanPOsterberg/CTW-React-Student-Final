import React, {useState} from 'react';
import Card from '../ui/Card.js';
import Button from '../ui/Button.js';
import './AddUser.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    function addUserHandler(event) {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;