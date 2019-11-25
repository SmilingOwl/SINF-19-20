import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import logo from './logo.svg';
import './css/App.css';
import AppRouter from './AppRouter.js';

class App extends Component
{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err=>err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render(){
      return(
      <AppRouter /> 
    );
  }
  }

export default App;
