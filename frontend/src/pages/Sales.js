import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/sales.css';

class Sales extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      products: "",
      accounts_receivable: 0,
      sales: 0,
    };
  }

  UNSAFE_componentWillMount() {
    this.fetchSalesInfo();
  }

  fetchSalesInfo() {
    fetch("http://localhost:9000/sales/sales_info")
      .then(res => res.json())
      .then(res => {
        this.setState({ customers: res.customers });
        this.setState({ products: res.products });
        this.setState({ accounts_receivable: res.accounts_receivable });
        this.setState({ sales: res.sales });
      })
      .catch(err => err);
  }

  fillCustomersTable() {
    let customersTable = [];
    for (let i = 0; i < this.state.customers.length && i < 10; i++) {
      customersTable.push(
        <tr className="table-row" key={this.state.customers[i].CustomerID}>
          <th scope="row" className="centered">{i+1}</th>
          <td>{this.state.customers[i].CompanyName}</td>
          <td>{this.state.customers[i].product}</td>
          <td className="centered">{this.state.customers[i].quantityBought}</td>
          <td className="centered">{this.state.customers[i].totalSpent.toFixed(2)} {'\u20AC'}</td>
        </tr>
      );
    }
    return customersTable;
  }

  fillProductsTable() {
    let productsTable = [];
    for (let i = 0; i < this.state.products.length && i < 10; i++) {
      productsTable.push(
        <tr className="table-row" key={this.state.products[i].ProductCode}>
          <th scope="row" className="centered">{i+1}</th>
          <td><Link to={{pathname: `/products/${this.state.products[i].ProductCode}` }}>{this.state.products[i].ProductDescription}</Link></td>
          <td className="centered">{this.state.products[i].quantity}</td>
          <td className="centered">{(this.state.products[i].totalEarned / this.state.products[i].quantity).toFixed(2)} {'\u20AC'}</td>
          <td className="centered">{this.state.products[i].totalEarned.toFixed(2)} {'\u20AC'}</td>
        </tr>
      );
    }
    return productsTable;
  }

  handleClickProduct() {

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
                {this.state.sales.toFixed(2)} {'\u20AC'}
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
            <div className="col-md-7">
              <strong>
                Accounts Receivable
              </strong>
            </div>
            <div className="col-md-5 price">
              {this.state.accounts_receivable} {'\u20AC'}
            </div>
          </div>
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
                  <th scope="col" className="centered">Top</th>
                  <th scope="col">Product</th>
                  <th scope="col" className="centered">Units Sold</th>
                  <th scope="col" className="centered">Price per Unit</th>
                  <th scope="col" className="centered">Total Earned</th>
                </tr>
              </thead>
              <tbody>
                {this.fillProductsTable()}
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
                  <th scope="col" className="centered">Top</th>
                  <th scope="col">Consumer</th>
                  <th scope="col">Most Bought Product</th>
                  <th scope="col" className="centered">Units Bought</th>
                  <th scope="col" className="centered">Total Spent</th>
                </tr>
              </thead>
              <tbody>
                {this.fillCustomersTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      );
    }
}
  
export default Sales;