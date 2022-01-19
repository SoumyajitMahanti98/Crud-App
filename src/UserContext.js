import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [Users, setUsers] = useState([
        {
            id: 1,
            name: "Soumyajit Mahanti",
            position: "Front End Developer",
            salary: 30000
        },
        {
            id: 2,
            name: "Rajesh Sathpati",
            position: "Front-end Developer",
            salary: 30000
        },
        {
            id: 3,
            name: "Biplab Ganguly",
            position: "Front-end Developer",
            salary: 30000
        }
    ]);
    return (
        <UserContext.Provider value={[Users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}