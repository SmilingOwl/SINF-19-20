import React from 'react';
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
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center nav-item">
              <Link className="navbar-brand" to="/finances"><strong class="link">Financial Area</strong></Link>
            </div>
            <div className="col-sm-4 d-flex justify-content-center nav-item">
              <Link className="navbar-brand" to="/sales"><strong class="link">Sales</strong></Link>
            </div>
            <div className="col-sm-4 d-flex justify-content-center nav-item">
              <Link className="navbar-brand" to="/purchases"><strong class="link">Purchases</strong></Link>
            </div>
          </div>
        </div>
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