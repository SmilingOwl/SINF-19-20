import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './css/navbar.css';
import FinancialArea from './pages/FinancialArea.js';


function AppRouter()
{
    return (
      <Router>
        {/*TODO: Add Navbar*/}
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/finances">Financial Area</Link>
            <Link class="navbar-brand" to="/sales">Sales</Link>
            <Link class="navbar-brand" to="/purchases">Purchases</Link>
          </nav>
        </div>
          <Switch>
            <Route exact path="/finances">
              <FinancialArea/>
            </Route>
            <Route path="/sales">
              <About/>
            </Route>
            <Route path="/purchases">
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