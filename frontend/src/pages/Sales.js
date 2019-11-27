import React, { Component } from 'react';
import '../css/sales.css';

class Sales extends Component
{
  constructor(props) {
    super(props);
    this.state = { customers: "" };
  }

  UNSAFE_componentWillMount() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    fetch("http://localhost:9000/customers")
      .then(res => res.json())
      .then(res => this.setState({ customers: res }))
      .catch(err => err);
  }

  fillCustomersTable() {
    let customersTable = [];
    for (let i = 0; i < this.state.customers.length; i++) {
      customersTable.push(
        <tr className="table-row" key={this.state.customers[i].CustomerID}>
          <th scope="row">{i+1}</th>
          <td>{this.state.customers[i].CompanyName}</td>
          <td>Product</td>
          <td>Money Spent {'\u20AC'}</td>
        </tr>
      );
    }
    return customersTable;
  }

  render(){
    return(
      <div>
        <div className="row mtop">
          <div className="col-md-2"/> 
            <div className="col-md-3 smallBox">
              <div className="row">
                <div className="col-md-8">
                  Sales
                </div>
                <div className="col-md-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-8">
                  Cost of Goods Sold
                </div>
                <div className="col-md-4 price">
                  Price
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-md-8 value">
                  Gross Profit
                </div>
                <div className="col-md-4 price">
                  Price
                </div>
              </div>
            </div>

            <div className="col-md-2"/>
             <div className="col-md-3 smallBox align-items-center d-flex">              
              <div className="col-md-8">
                <strong>
                  Accounts Receivable
                </strong>
              </div>
              <div className="col-md-4 price">
                Price
              </div>
            </div>
          <div className="col-md-2"/>
        </div>

        <div className="row">
          <div className="col-md-1"/>
          <div className="col-md-10">
            <h3 className="section-title">Top Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"/>
          <div className="col-md-10">
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
          <div className="col-md-1"/>
        </div>
        <div className="row">
          <div className="col-md-1"/>
          <div className="col-md-10">
            <h3 className="section-title">Top Consumers</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"/>
            <div className="col-md-10">
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
                  {this.fillCustomersTable()}
                </tbody>
              </table>
            </div>
            <div className="col-md-1"/>
          </div>
        </div>
      );
    }
    }
  
  export default Sales;