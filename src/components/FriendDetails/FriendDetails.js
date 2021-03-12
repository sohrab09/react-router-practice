import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
        setFriend(friend);
    }, [])
    return (
        <div>
            <h1>This is friend details</h1>
            <h2>Information about {friendId}</h2>
            <h4>Name: {friend.name}</h4>
            <h4>ID: {friend.id}</h4>
            <h4>Email: {friend.email}</h4>
        </div>
    );
};

export default FriendDetails;