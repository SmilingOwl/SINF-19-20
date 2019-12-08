import React, { useState } from 'react';
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
import FinancialArea from './pages/FinancialArea.js';
import Purchases from './pages/Purchases.js';
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';
import { AuthContext } from "./context/auth";

function AppRouter()
{
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
     <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <strong className="link">Home</strong>
              </Link>
            </li>
            { JSON.parse(localStorage.tokens) != null &&
              (JSON.parse(localStorage.tokens).type === "CEO" ||
            JSON.parse(localStorage.tokens).type === "Head of Finances"||
              JSON.parse(localStorage.tokens).type === "Shareholder") &&
            <li className="nav-item active">
              <Link className="nav-link" to="/finances">
                <strong className="link">Financial Area</strong>
              </Link>
            </li>
            }
            { JSON.parse(localStorage.tokens) != null &&
              (JSON.parse(localStorage.tokens).type === "CEO" ||
              JSON.parse(localStorage.tokens).type === "Head of Sales"||
              JSON.parse(localStorage.tokens).type === "Shareholder") &&
            <li className="nav-item active">
              <Link className="nav-link" to="/sales">
                <strong className="link">Sales</strong>
              </Link>
            </li>
            }
            { JSON.parse(localStorage.tokens) != null &&
              (JSON.parse(localStorage.tokens).type === "CEO" ||
              JSON.parse(localStorage.tokens).type === "Head of Purchases") &&
            <li className="nav-item active">
              <Link className="nav-link" to="/purchases">
                <strong className="link">Purchases</strong>
              </Link>
            </li>
            }
            { JSON.parse(localStorage.tokens) == null &&
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                <strong className="link">Login</strong>
              </Link>
            </li>
            }
            { JSON.parse(localStorage.tokens) != null &&
            <li className="nav-item active">
              <Link className="nav-link" to="/logout"><strong className="link">Logout</strong></Link>
            </li>
            }
          </ul>
        </nav>
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
          <Route path="/suppliers/:id" children={<Supplier/>} />
          <Route path="/products/:id" children={<Product/>} />
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default AppRouter;