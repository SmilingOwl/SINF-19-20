import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Supplier from './pages/Supplier';
import Product from './pages/Product';
import FinancialArea from './pages/FinancialArea';
import Purchases from './pages/Purchases';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { AuthContext } from './context/auth';
import NavBar from './components/layout/NavBar';

function AppRouter() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/finances">
            <FinancialArea />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/purchases">
            <Purchases />
          </Route>
          <Route path="/suppliers/:id" component={Supplier} />
          <Route path="/products/:id" component={Product} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default AppRouter;
