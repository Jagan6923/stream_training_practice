import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Users = () => {

    const [users, setUsers] = useState([]);
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                setErr(error.message);
            });

    }, [])

    if (err) {
        return <h1>{err}</h1>
    }

    return (
        <div>

            <h1>Users</h1>
            <table className="user-table table-striped table-dark" border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            onClick={() => navigate(`/users/${user.id}`)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    navigate(`/users/${user.id}`);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            style={{ cursor: 'pointer' }}
                        >
                            <td>{user.name.firstname}</td>
                            <td>{user.name.lastname}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users


export const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [err, setErr] = useState("");

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                setErr(error.message);
            });
    }, [id]);

    if (err) {
        return <h1>{err}</h1>;
    }

    if (!user) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="user-details">
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>{user.username}</h1>
            <p>First Name: {user.name.firstname}</p>
            <p>Last Name: {user.name.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            <p>Geo: {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
        </div>
    );
};