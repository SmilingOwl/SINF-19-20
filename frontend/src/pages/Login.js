/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { useAuth } from '../context/auth';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  const login = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    await axios
      .post('http://localhost:9000/auth/login', {
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      });
    setIsLoading(false);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="row mtop">
        <div className="col-md-4" />
        <div className="col-md-4 smallBox">
        <form onSubmit={login}>
          <h3>Login</h3>
          <hr className="padding-bottom-1" />
          <div className="padding-bottom-1">
            <label htmlFor="email">
              Email address
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="padding-bottom-1">
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>
          {(() => {
            if (isError) {
              return (
                <div className="padding-bottom-1 alert alert-danger" role="alert">
                  The credentials provided are invalid.
                </div>
              );
            }
            return <></>;
          })()}
          {isLoading ? (
            <Spinner className="center-spinner" />
          ) : (
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          )}
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
