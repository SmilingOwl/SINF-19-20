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
import FinancialArea from './pages/FinancialArea.js';


function AppRouter()
{
    return (
      <Router>
        {/*TODO: Add Navbar*/}
        <div>
          <div className="row">
              <Link className="col-sm-4 d-flex justify-content-center nav-item finances_navbar" to="/finances">
                <strong class="link">Financial Area</strong>
              </Link>
              <Link className="col-sm-4 d-flex justify-content-center nav-item sales_navbar" to="/sales">
                <strong class="link">Sales</strong>
              </Link>
              <Link className="col-sm-4 d-flex justify-content-center nav-item purchases_navbar" to="/purchases">
                <strong class="link">Purchases</strong>
              </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/finances">
            <FinancialArea/>
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