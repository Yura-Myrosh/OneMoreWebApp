import { useState, useEffect } from "react";
import fetchUsers from "../config/firebaseconfig";

const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const getUsers = async () => {
          const users = await fetchUsers();
          setUsers(users);
        };
    
        getUsers();
      }, []);


    return (
        <div>
            {users.map(x => (
                <div>
                    <li>
                        <ul>
                            {x.id}
                        </ul>
                        <ul>
                            {x.name}
                        </ul>
                    </li>
                    <br/>
                </div>
            ))}
        </div>
    );
}

export default Users;