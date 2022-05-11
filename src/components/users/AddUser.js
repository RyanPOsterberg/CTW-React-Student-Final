import React from 'react';
import Card from '../ui/Card.js';
import Button from '../ui/Button.js';
import './AddUser.css';

const AddUser = props => {

    function addUserHandler(event) {
        event.preventDefault();
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;