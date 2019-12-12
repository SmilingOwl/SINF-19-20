import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sales extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      products: "",
      profit_loss: {},
      balance_sheet: {}
    };
  }

  UNSAFE_componentWillMount() {
    this.fetchSalesInfo();
    this.fetchBalanceSheetInfo();
    this.fetchProfitLossInfo();
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

  fetchProfitLossInfo() {
    fetch("http://localhost:9000/finances/profit-loss")
      .then(res => res.json())
      .then(res => { this.setState({ profit_loss: res }); console.log(res); })
      .catch(err => err);
  }

  fetchBalanceSheetInfo() {
    fetch("http://localhost:9000/finances/balance-sheet")
      .then(res => res.json())
      .then(res => { this.setState({ balance_sheet: res }); })
      .catch(err => err);
  }

  calculateAccountsReceivable() {
    let accounts_receivable = 0;
    if(this.state.balance_sheet.non_current_assets) {
      let non_current = this.state.balance_sheet.non_current_assets.filter(p => p.index === 'A00108');
      if(non_current.length > 0) {
        accounts_receivable += non_current[0].value;
      }
      let current = this.state.balance_sheet.non_current_assets.filter(p => p.index === 'A00118');
      if(current.length > 0) {
        accounts_receivable += current[0].value;
      }
    }
    return accounts_receivable;
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
                { this.state.profit_loss.sales ? this.state.profit_loss.sales.value.toFixed(2) : 0 } {'\u20AC'}
              </div>
            </div>  
            <div className="row">
              <div className="col-md-8">
                Cost of Goods Sold
              </div>
              <div className="col-md-4 price">
                { this.state.profit_loss.cogs ? this.state.profit_loss.cogs.value.toFixed(2) : 0  } {'\u20AC'}
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
                { this.calculateAccountsReceivable().toFixed(2) } {'\u20AC'}
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