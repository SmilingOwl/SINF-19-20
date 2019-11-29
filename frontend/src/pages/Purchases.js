import React, { Component } from 'react';
import '../css/sales.css';

class Purchases extends Component
{
    render(){
        return(
        <div>
            <div className="row mtop">
              <div className="col-md-2"/> 
              
              <div className="col-md-3 smallBox align-items-center d-flex">
                <div className="col-md-7">
                  <strong>
                    Total Spent
                  </strong>
                </div>
                <div className="col-md-5 price">
                  Price
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
                  Price
                </div>
              </div>

            </div>
    
            <div className="row">
              <div className="col-md-1"/>
              <div className="col-md-10">
                <h3 className="section-title">Top Purchases</h3>
              </div>
            </div>
            <div className="row">
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
            <div className="row">
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