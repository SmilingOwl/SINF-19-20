import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sales extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      products: "",
      balance_sheet: []
    };
  }

  UNSAFE_componentWillMount() {
    this.fetchSalesInfo();
    this.fetchBalanceSheetInfo();
  }

  fetchSalesInfo() {
    fetch("http://localhost:9000/sales/info")
      .then(res => res.json())
      .then(res => {
        this.setState({ customers: res.customers });
        this.setState({ products: res.products });
      })
      .catch(err => err);
  }

  fetchBalanceSheetInfo() {
    fetch("http://localhost:9000/finances/balance-sheet")
      .then(res => res.json())
      .then(res => { this.setState({ balance_sheet: res.balance_sheet }); })
      .catch(err => err);
  }

  fillCustomersTable() {
    let customersTable = [];
    for (let i = 0; i < this.state.customers.length && i < 10; i++) {
      customersTable.push(
        <tr className="table-row" key={this.state.customers[i].name}>
          <th scope="row" className="centered">{i+1}</th>
          <td>{this.state.customers[i].name}</td>
          <td>
            <Link to={{pathname: `/products/${this.state.customers[i].product.code}` }}>
              {this.state.customers[i].product.description}
            </Link>
          </td>
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
        <tr className="table-row" key={i}>
          <th scope="row" className="centered">{i+1}</th>
          <td><Link to={{pathname: `/products/${this.state.products[i].code}` }}>{this.state.products[i].description}</Link></td>
          <td className="centered">{this.state.products[i].quantity}</td>
          <td className="centered">{(this.state.products[i].totalEarned / this.state.products[i].quantity).toFixed(2)} {'\u20AC'}</td>
          <td className="centered">{this.state.products[i].totalEarned.toFixed(2)} {'\u20AC'}</td>
        </tr>
      );
    }
    return productsTable;
  }

  getSales() {
    let sales = this.state.balance_sheet.filter(p => p.index === 71);
    if(sales.length === 0) return 0;
    return Math.abs(sales[0].debit - sales[0].credit);
  }

  getCOGS() {
    let cogs = this.state.balance_sheet.filter(p => p.index === 61);
    if(cogs.length === 0) return 0;
    return Math.abs(cogs[0].credit - cogs[0].debit);
  }

  getAccountsReceivable() {
    let ar = this.state.balance_sheet.filter(p => p.index === 21);
    if(ar.length === 0) return 0;
    return Math.abs(ar[0].debit - ar[0].credit);
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-1"/>
          <div className="col-md-10">
            <h3 className="section-title">Sales Information</h3>
          </div>
        </div>
        <div className="row mtop-smaller">
          <div className="col-md-2"/> 
          <div className="col-md-3 smallBox">
            <div className="row">
              <div className="col-md-8">
                Sales
              </div>
              <div className="col-md-4 price">
                { this.getSales() } {'\u20AC'}
              </div>
            </div>  
            <div className="row">
              <div className="col-md-8">
                Cost of Goods Sold
              </div>
              <div className="col-md-4 price">
                { this.getCOGS() } {'\u20AC'}
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-8 value">
                Gross Profit
              </div>
              <div className="col-md-4 price">
                { this.getSales() - this.getCOGS() } {'\u20AC'}
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
                { this.getAccountsReceivable() } {'\u20AC'}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1"/>
          <div className="col-md-10">
            <h3 className="section-title">Top Products</h3>
          </div>
        </div>
        <div className="row mtop-smaller">
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
        <div className="row mtop-smaller">
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