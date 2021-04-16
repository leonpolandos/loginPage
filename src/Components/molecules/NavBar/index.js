import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand" to="/login">LOGO</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/">DashBoard</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/Insert">Insert</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
