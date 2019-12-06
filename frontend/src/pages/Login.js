import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from 'axios';
import '../css/login.css'

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function login() {
      setIsError(false);
      axios.post("http://localhost:9000/auth/login", {
        email,
        password
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div>
          <div className="row mtop">
            <div className="col-md-4"/>
            <div className="col-md-4 smallBox padding-2">
              <h3>Login</h3>
              <hr className="padding-bottom-1"/>
                <div className="padding-bottom-1">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}/>
                </div>
                <div className="padding-bottom-1">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}/>
                </div>
                { isError &&<div className="padding-bottom-1 alert alert-danger" role="alert">The credentials provided are invalid.</div> }
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
    );
}

export default Login;