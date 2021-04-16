import React, { useEffect, useState } from 'react';
import Card from '../../molecules/Card';
import NavBar from '../../molecules/NavBar/index';
import Axios from 'axios';


const Dashboard = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //Fetch
        // fetch("https://reqres.in/api/users")
        //     .then((res) => res.json())
        //     .then((json) => setUsers(json.data))
        //Using Axios(Recomended)
        Axios.get("http://localhost:3004/users")
                .then((res) => setUsers(res.data))
    }, [users]);

    const addUsers = () => {
        const data = {
            avatar: 'https://source.unsplash.com/random',
            email: 'leonpolandos@yahoo.com',
            first_name: 'Leonard',
            last_name: 'Polandos'
        }
        Axios.post("http://localhost:3004/users", data);

    }

    return (
        <div className="container mt-5">
            <NavBar />
            <h3>Dashboard</h3>
            <hr/>
            <button className="btn btn-primary" onClick={addUsers}>Tambah</button>
            <div className="row align-items-start">
                {
                    users.map(item => (
                        <Card
                            avatar={item.avatar}
                            fullName={`${item.first_name} ${item.last_name}`}
                            email={item.email}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard;
