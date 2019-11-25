import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './pages/Home.js';
import Sales from './pages/Sales.js';
import './css/navbar.css';


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
          <hr />

          <Switch>
            <Route exact path="/finances">
              <Home/>
            </Route>
            <Route path="/sales">
              <Sales/>
            </Route>
            <Route path="/purchases">
              <Purchases/>
            </Route>
          </Switch>
      </Router>
    )
}

function Purchases() {
  return <h2>Purchases</h2>;
}


export default AppRouter;