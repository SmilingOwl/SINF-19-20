import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  let parsed = null;
  if (localStorage.tokens != null) parsed = JSON.parse(localStorage.tokens);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <strong className="link">Home</strong>
            </Link>
          </li>
          {(() => {
            if (parsed != null) {
              if (parsed.type === 'CEO') {
                return (
                  <>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/finances">
                        <strong className="link">Financial Area</strong>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/sales">
                        <strong className="link">Sales</strong>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/purchases">
                        <strong className="link">Purchases</strong>
                      </Link>
                    </li>
                  </>
                );
              }
              if (parsed.type === 'Shareholder') {
                return (
                  <>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/finances">
                        <strong className="link">Financial Area</strong>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/sales">
                        <strong className="link">Sales</strong>
                      </Link>
                    </li>
                  </>
                );
              }
              if (parsed.type === 'Head of Finances') {
                return (
                  <li className="nav-item active">
                    <Link className="nav-link" to="/finances">
                      <strong className="link">Financial Area</strong>
                    </Link>
                  </li>
                );
              }
              if (parsed.type === 'Head of Sales') {
                return (
                  <li className="nav-item active">
                    <Link className="nav-link" to="/sales">
                      <strong className="link">Sales</strong>
                    </Link>
                  </li>
                );
              }
              if (parsed.type === 'Head of Purchases') {
                return (
                  <li className="nav-item active">
                    <Link className="nav-link" to="/purchases">
                      <strong className="link">Purchases</strong>
                    </Link>
                  </li>
                );
              }
            }
            if (parsed == null) {
              return (
                <li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    <strong className="link">Login</strong>
                  </Link>
                </li>
              );
            }
            return (
              <li className="nav-item active logout">
                <Link className="nav-link" to="/logout">
                  <strong className="link">Logout</strong>
                </Link>
              </li>
            );
          })()}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
