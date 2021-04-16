/*
import React, { useState } from "react";


const Login = ({title}) => {
    const [welcomeText, setwelcomeText] = useState("Welcome")
    const [email, setemail] = useState("");
    const [password, setpassowrd] = useState("");

    const handleSubmit = () => {
        setwelcomeText("Selamat Datang");
        console.log("Button Pressed");
        const data = {
            email: email,
            password: password,
          };
          console.log(data);
     }
    
  return (
    <div>
      <h3>{welcomeText}</h3>
      <h5>{title}</h5>
      <p className="form-label">Email</p>
      <input placeholder="Masukan Email" value={email} onChange={(e) => setemail(e.target.value)} />
      <p>Password</p>
      <input placeholder="Masukan Password" type="password" value={password} onChange={(e) => setpassowrd(e.target.value)}></input>
      <br/>
      <br/>
      <button type="button" onClick={() => handleSubmit()}>Sign in</button>
    </div>
  );
};

export default Login;
*/

import React, { useState, useEffect } from "react";
import NavBar from "../../molecules/NavBar";

const Login = ({ title, angka }) => {
  const [welcomeText, setWelcomeText] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [welcomeText, email, password]);

  const handleSubmit = () => {
    setWelcomeText("Selamat Datang");
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    //JSX
    <div className="container mt-5">
      <NavBar />
      <h3>{welcomeText}</h3>
      <h5>
        {title} {angka}
      </h5>
      <p className="form-label mt-5">Email</p>
      <input
        className="form-control"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-3">Password</p>
      <input
        className="form-control"
        placeholder="Masukan password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Sign In
      </button>
    </div>
  );
};

export default Login;