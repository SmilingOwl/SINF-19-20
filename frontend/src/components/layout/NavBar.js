import React from 'react';
import { Link } from 'react-router-dom';
import isLogged from '../../common/isLogged';

const NavBar = () => {
  const type = isLogged();
  const FinancialArea = () => (
    <li className="nav-item active">
      <Link className="nav-link" to="/finances">
        <strong className="link">Financial Area</strong>
      </Link>
    </li>
  );
  const Sales = () => (
    <li className="nav-item active">
      <Link className="nav-link" to="/sales">
        <strong className="link">Sales</strong>
      </Link>
    </li>
  );
  const Purchases = () => (
    <li className="nav-item active">
      <Link className="nav-link" to="/purchases">
        <strong className="link">Purchases</strong>
      </Link>
    </li>
  );
  const Login = () => (
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item active logout">
        <Link className="nav-link" to="/login">
          <strong className="link">Login</strong>
        </Link>
      </li>
    </ul>
  );
  const LogOut = () => (
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item active logout">
        <Link className="nav-link" to="/logout">
          <strong className="link">Logout</strong>
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <strong className="link">Home</strong>
            </Link>
          </li>
          {(() => {
            if (type === 'CEO') {
              return (
                <>
                  <FinancialArea />
                  <Sales />
                  <Purchases />
                </>
              );
            }
            if (type === 'Shareholder') {
              return (
                <>
                  <FinancialArea />
                  <Sales />
                </>
              );
            }
            if (type === 'Head of Finances') {
              return (
                <>
                  <FinancialArea />
                </>
              );
            }
            if (type === 'Head of Sales') {
              return (
                <>
                  <Sales />
                </>
              );
            }
            if (type === 'Head of Purchases') {
              return (
                <>
                  <Purchases />
                </>
              );
            }
            return <></>;
          })()}
        </ul>
        {(() => {
          if (isLogged() === null) {
            return <Login />;
          }
          return <LogOut />;
        })()}
      </nav>
    </>
  );
};

export default NavBar;
