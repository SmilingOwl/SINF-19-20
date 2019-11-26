import React, { Component } from 'react';
import '../css/sales.css';

class Sales extends Component
{
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-sm-1"/>
          <div className="col-sm-10">
            <h3 className="section-title">Top Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1"/>
          <div className="col-sm-10">
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th scope="col">Top</th>
                  <th scope="col">Product</th>
                  <th scope="col">Units Sold</th>
                  <th scope="col">Price per Unit</th>
                  <th scope="col">Total Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <th scope="row">1</th>
                  <td>Lenços de Papel folha dupla</td>
                  <td>120000</td>
                  <td>3 {'\u20AC'} </td>
                  <td>360000 {'\u20AC'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-1"/>
        </div>
        <div className="row">
          <div className="col-sm-1"/>
          <div className="col-sm-10">
            <h3 className="section-title">Top Consumers</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1"/>
            <div className="col-sm-10">
              <table className="table">
                <thead>
                  <tr className="table-header">
                    <th scope="col">Top</th>
                    <th scope="col">Consumer</th>
                    <th scope="col">Most Bought Product</th>
                    <th scope="col">Total Spent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row">
                    <th scope="row">1</th>
                    <td>Sonae</td>
                    <td>Lenços de Papel folha dupla</td>
                    <td>500000 {'\u20AC'} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-1"/>
          </div>
        </div>
      );
    }
    }
  
  export default Sales;