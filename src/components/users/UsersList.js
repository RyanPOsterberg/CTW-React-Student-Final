import React from 'react';
import Card from '../ui/Card.js'
import Button from '../ui/Button.js'
import './UsersList.css'

const UsersList = props => {
    
    let activeUsers = props.users.filter(user =>
        user.active === true
    );

    function deleteHandler(event) {
        props.deleteUser(event.target.value);
    }

    return (
        <Card>
            <ul className="users">
                {activeUsers.map(user =>
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                        <Button clickHandler={deleteHandler} value={user.id}>Delete</Button>
                    </li>
                )}
            </ul>
        </Card>
    );
}

export default UsersList;