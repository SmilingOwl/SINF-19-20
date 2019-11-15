import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';

function App()
{
  return(
    <div className="App">
      <AppRouter />
    </div>
  )
}


export default App;
