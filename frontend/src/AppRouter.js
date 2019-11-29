import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './pages/Home.js';
import Sales from './pages/Sales.js';
import Supplier from './pages/Supplier.js';
import Product from './pages/Product.js';
import './css/navbar.css';
import FinancialArea from './pages/FinancialArea.js';
import Purchases from './pages/Purchases.js';


function AppRouter()
{
    return (
      <Router>
        <div>
          <div className="row">
              <Link className="col-sm-4 d-flex justify-content-center nav-item finances_navbar" to="/finances">
                <strong className="link">Financial Area</strong>
              </Link>
              <Link className="col-sm-4 d-flex justify-content-center nav-item sales_navbar" to="/sales">
                <strong className="link">Sales</strong>
              </Link>
              <Link className="col-sm-4 d-flex justify-content-center nav-item purchases_navbar" to="/purchases">
                <strong className="link">Purchases</strong>
              </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
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
          <Route path="/suppliers">
            <Supplier/>
          </Route>
          <Route path="/products/:id" children={<Product/>} />
        </Switch>
    </Router>
    )
}

export default AppRouter;