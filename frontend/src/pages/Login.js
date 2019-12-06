import React, { Component } from 'react';
import '../css/login.css'

class Login extends Component {
  render() {
    return (
        <div>
          <div className="row mtop">
            <div className="col-md-4"/>
            <div className="col-md-4 smallBox padding-2">
              <h3>Login</h3>
              <hr className="padding-bottom-1"/>
              <form>
                <div className="form-group padding-bottom-1">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group padding-bottom-1">
                  <label htmlfor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;