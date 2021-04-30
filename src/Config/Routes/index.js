import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from '../../Components/Pages/Login/Index';
import Dashboard from '../../Components/Pages/Dashboard/index';
import About from '../../Components/Pages/About/index';
import Insert from '../../Components/Pages/Insert/index';
import Register from '../../Components/Pages/Register';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                <Route path="/login">
                    <Login title="Welcome"/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/insert">
                    <Insert />
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router>
   
    )
}

export default index
