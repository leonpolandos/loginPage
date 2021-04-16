import React, { useState, useEffect } from 'react';
import NavBar from '../../molecules/NavBar';
import Axios from 'axios';


const Insert = () => {
    const [ email, setEmail ] = useState();
    const [ first_name, setFirstName] = useState();
    const [ last_name, setLastName ] = useState();

    useEffect(() => {
        //Fetch
        // fetch("https://reqres.in/api/users")
        //     .then((res) => res.json())
        //     .then((json) => setUsers(json.data))
        //Using Axios(Recomended)
        console.log("Updated")
      
    }, []);

    useEffect(() => {
        console.log("Component did mount");

    }, [email, first_name, last_name]);

    const handleSubmit = () => {

        const data = {
            avatar: 'https://source.unsplash.com/random',
            email: email,
            first_name: first_name,
            last_name: last_name
        };
        Axios.post("http://localhost:3004/users", data);
        console.log("Data has Sent to the Dashboard");
    }

    return (
        <div className="container mt-5">
            <NavBar />
            <h3>Insert Your Email, First Name, And Last Name to send it to Dashboard.</h3 >
            <hr />
            <input className="form-label mt-5" placeHolder="Insert Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input className="form-label mt-5" placeHolder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            <br />
            <input className="form-label mt-5" placeHolder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            <br />
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
            
        </div>
    )
}

export default Insert;
