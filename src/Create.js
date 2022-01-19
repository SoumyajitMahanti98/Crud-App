import React, { useContext, useState } from 'react';
import './Create.css';
import { UserContext } from './UserContext';
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Create() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");

    const [users, setUsers] = useContext(UserContext);

    // Id code here 
    const updateId = (e) => {
        setId(e.target.value);
    }

    // Name code here
    const updateName = (e) => {
        setName(e.target.value);
    }
    // position code here
    const updatePosition = (e) => {
        setPosition(e.target.value);
    }
    // salary code here 
    const updateSalary = (e) => {
        setSalary(e.target.value);
    }

    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, { id: id, name: name, position: position, salary: salary }])
        alert("add successfully !!");
    }

    return (
        <div>
            <Form onSubmit={addUser} className="create">
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={id}
                        onChange={updateId}
                        placeholder="Enter Id"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Enter Name"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                        type="text"
                        name="position"
                        value={position}
                        onChange={updatePosition}
                        placeholder="Enter Position"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                        type="text"
                        name="salary"
                        value={salary}
                        onChange={updateSalary}
                        placeholder="Enter Salary"
                    />
                </Form.Group><br />
                <button type="submit" class="btn btn-primary">Create User</button>
                <Link to="/">
                    <button class="btn btn-primary"> Back to Home</button>
                </Link>
            </Form>
        </div>
    )
}
export default Create
