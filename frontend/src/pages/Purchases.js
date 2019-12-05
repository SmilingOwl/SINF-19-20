import React, { Component } from 'react';
import '../css/sales.css';

class Purchases extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      balance_sheet: [],
      total_spent: 0,
      products:{},
    };
  }

  UNSAFE_componentWillMount() {
    this.fetchBalanceSheetInfo();
    this.fetchTotalSpentInfo();
    this.fetchProductsTable();
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
      this.setState({products: res});
    })
  }

  fillProductsTable() {
    let productsTable = [];
    console.log(this.state.products);
    if (!this.state.products)
      return [];
    for (let i = 0; i < this.state.products.length && i < 10 ; i++) {
      productsTable.push(
        <tr className="table-row">
          <th scope="row" className="centered">i</th>
          <td className="centered">{this.state.products[i].product}</td>
          <td className="centered">{this.state.products[i].unitsSold}</td>
          <td className="centered">{this.state.products[i].pricePerUnit}</td>
          <td className="centered">{this.state.products[i].total_earned}</td>
        </tr>
      );
      
    }
    
    return productsTable;
  }

  fetchBalanceSheetInfo() {
    fetch("http://localhost:9000/finances/balance-sheet")
      .then(res => res.json())
      .then(res => { this.setState({ balance_sheet: res }); })
      .catch(err => err);
  }

  getAccountsReceivable() {
    let ar = this.state.balance_sheet.filter(p => p.index === 22);
    if(ar.length === 0) return 0;
    return Math.abs(ar[0].debit - ar[0].credit);
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
                  {this.state.total_spent.total_spent} {'\u20AC'}
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
                { this.getAccountsReceivable() } {'\u20AC'}
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
                      <th scope="col" className="centered">Product</th>
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
                      <th scope="col" className="centered">Supplier</th>
                      <th scope="col" className="centered">Most Bought Product</th>
                      <th scope="col" className="centered">Total Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          );
        }
    }
      
    export default Purchases;