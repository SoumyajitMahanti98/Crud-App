import React, { useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Read.css';
import { UserContext } from './UserContext';
import { Link } from "react-router-dom";


function Read() {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const user = users.filter((user) => user.id == id)
    return (
        <div className="read">
            <h1>ID: {user[0].id}</h1>
            <h1>Name: {user[0].name}</h1>
            <h1>Position: {user[0].position}</h1>
            <h1>Salary: {user[0].salary} /= </h1><br />
            <Link to="/">
                <button className="backto__home" variant="info">Back to Home</button>
            </Link>
        </div>
    )
}
export default Read
