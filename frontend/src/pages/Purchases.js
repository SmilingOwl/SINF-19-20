import React, { Component } from 'react';
import {
  getAccountsPayable,
} from '../common/Math';
import { Link } from 'react-router-dom';

class Purchases extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      balance_sheet: [],
      total_spent: {
        total_spent: 0,
      },
      products:{},
    };
  }

  UNSAFE_componentWillMount() {
    this.fetchBalanceSheetInfo();
    this.fetchTotalSpentInfo();
    this.fetchProductsTable();
    this.fetchSuppliersTable();
  }

  fetchTotalSpentInfo() {
    fetch("http://localhost:9000/purchases")
      .then(res => res.json())
      .then(res => {
        this.setState({total_spent: res});
      })
  }

  fetchProductsTable(){
    fetch("http://localhost:9000/purchases/products")
    .then(res => res.json())
    .then(res => {
      this.setState({products: res.products});
    })
  }

  fetchSuppliersTable(){
    fetch("http://localhost:9000/purchases/suppliers")
    .then(res => res.json())
    .then(res => {
      this.setState({suppliers: res.suppliers});
    })
  }

  fetchBalanceSheetInfo() {
    fetch("http://localhost:9000/finances/balance-sheet")
      .then(res => res.json())
      .then(res => { this.setState({ balance_sheet: res }); })
      .catch(err => err);
  }

  calculateAccountsPayable() {
    let accounts_payable = 0;
    if(this.state.balance_sheet.non_current_assets) {
      let non_current = this.state.balance_sheet.non_current_assets.filter(p => p.index === 'A00144');
      if(non_current.length > 0) {
        accounts_payable += non_current[0].value;
      }
      let current = this.state.balance_sheet.non_current_assets.filter(p => p.index === 'A00150');
      if(current.length > 0) {
        accounts_payable += current[0].value;
      }
    }
    return accounts_payable;
  }

  fillSuppliersTable(){
    let suppliersTable = [];
    if (!this.state.suppliers)
      return [];
    for (let i = 1; i <= this.state.suppliers.length && i <= 10 ; i++) {
      suppliersTable.push(
        <tr className="table-row" key={i}>
          <th scope="row" className="centered">{i}</th>
          <td>
            <Link to={{pathname: `/suppliers/${this.state.suppliers[i-1].supplier_id}` }}>
              {this.state.suppliers[i-1].supplier}
            </Link>
          </td>
          <td>{this.state.suppliers[i-1].most_bought_product}</td>
          <td className="centered">{this.state.suppliers[i-1].total_spent.toFixed(2)} €</td>
        </tr>
      );
    }
    return suppliersTable;
  }

  fillProductsTable() {
    let productsTable = [];
    if (!this.state.products)
      return [];
    for (let i = 1; i <= this.state.products.length && i <= 10 ; i++) {
      productsTable.push(
        <tr className="table-row" key={i}>
          <th scope="row" className="centered">{i}</th>
          <td>{this.state.products[i-1].product}</td>
          <td className="centered">{this.state.products[i-1].unitsSold}</td>
          <td className="centered">{(this.state.products[i-1].totalSpent / this.state.products[i-1].unitsSold).toFixed(2) } € </td>
          <td className="centered">{this.state.products[i-1].totalSpent.toFixed(2)} €</td>
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
                <h3 className="section-title">Purchases Information</h3>
              </div>
            </div>
            <div className="row mtop-smaller">
              <div className="col-md-2"/> 
              
              <div className="col-md-3 smallBox align-items-center d-flex">
                <div className="col-md-7">
                  <strong>
                    Total Spent
                  </strong>
                </div>
                <div className="col-md-5 price">
                  {this.state.total_spent.total_spent.toFixed(2)} €
                </div>
              </div>
             
              <div className="col-md-2"/>
              <div className="col-md-3 smallBox align-items-center d-flex">              
                <div className="col-md-7">
                  <strong>
                    Accounts Payable
                  </strong>
                </div>
                <div className="col-md-5 price">
                { this.calculateAccountsPayable().toFixed(2)} €
                </div>
              </div>

            </div>
    
            <div className="row">
              <div className="col-md-1"/>
              <div className="col-md-10">
                <h3 className="section-title">Top Purchases</h3>
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
                      <th scope="col" className="centered">Units Bought</th>
                      <th scope="col" className="centered">Price per Unit</th>
                      <th scope="col" className="centered">Total Spent</th>
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
                <h3 className="section-title">Top Suppliers</h3>
              </div>
            </div>
            <div className="row mtop-smaller">
              <div className="col-md-1"/>
              <div className="col-md-10">
                <table className="table">
                  <thead>
                    <tr className="table-header">
                      <th scope="col" className="centered">Top</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Most Bought Product</th>
                      <th scope="col" className="centered">Total Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.fillSuppliersTable()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          );
        }
    }
      
    export default Purchases;