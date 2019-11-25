import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './pages/Home.js';
import './css/navbar.css';


function AppRouter()
{
    return (
      <Router>
        {/*TODO: Add Navbar*/}
        <div>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/finances">Financial Area</Link>
            <Link class="navbar-brand" to="/sales">Sales</Link>
            <Link class="navbar-brand" to="/purchases">Purchases</Link>
          </nav>
        </div>
          <hr />

          <Switch>
            <Route exact path="/finances">
              <Home/>
            </Route>
            <Route path="/sales">
              <About/>
            </Route>
            <Route path="/purchases">
              <Users/>
            </Route>
          </Switch>
        </div>
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