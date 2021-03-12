import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, email, username} = props.friend;
    const friendStyle ={
        border: '2px solid purple',
        borderRadius: '50px',
        color: 'green',
        margin: '20px',
        padding: '20px'
    }
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {name} User Name: {username}</h4> 
            <p>Email: {email}</p>           
            <h4>ID: <Link to ={`/friend/${id}`}><button>show details of {id}</button></Link></h4>
            <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;