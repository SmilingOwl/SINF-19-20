import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home.js';


function AppRouter()
{
    return (
        <Router>
        {/*TODO: Add Navbar*/}
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/dashboard">
            <Users/>
          </Route>
        </Switch>
    </Router>
    )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}





export default AppRouter;