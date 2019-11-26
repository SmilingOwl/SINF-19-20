import React, { Component } from 'react';
import '../css/FinancialArea.css';

class FinancialArea extends Component
{
    render(){
        return(
        <div>
          <div className="row topic">
            <div className="col-lg-2"/>
              Profit / Sales
            <div className="col-lg-2"/>
          </div> 
          
          <div className="row">
            {/*espaco-inicial*/}
            <div className="col-lg-2"/>
           
            {/*Gross Profit table*/}
            <div className="col-lg-3 smallBox">
              <div className="row">
                <div className="col-lg-8">
                  Sales
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-8">
                  Cost
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-lg-8 value">
                  Gross Profit
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
            </div>

            {/*espaco-entre-boxs*/}
            <div className="col-lg-2"/>
            
             {/*EBITDA table*/}
             <div className="col-lg-3 smallBox">
              <div className="row">
                <div className="col-lg-8">
                  Gross Profit
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-8">
                  Expenses
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-lg-8 value">
                  EBITDA
                  </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
            </div>

          {/*espaco-final}*/}
          <div className="col-lg-2"/>
          </div>

          
          <div className="row">
            
            <div className="col-lg-2"/>
           
            {/*EBIT table*/}
            <div className="col-lg-3 smallBox">
              <div className="row">
                <div className="col-lg-8">
                  EBITDA
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-8">
                  Depreciation
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-8">
                  Amortization
                  </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-lg-8 value">
                  EBIT
                  </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
            </div>

            <div className="col-lg-2"/>
            
             {/*Net income table*/}
             <div className="col-lg-3 smallBox">
              <div className="row">
                <div className="col-lg-8">
                  EBIT
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-8">
                  Interest
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-8">
                  Taxes
                  </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-lg-8 value">
                  Net income
                  </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
            </div>
           <div className="col-lg-2"/>

          </div>

          <div className="row topic">
            <div className="col-lg-2"/>
              Balance Sheet
            <div className="col-lg-2"/>
          </div> 

          <div className="row">
            {/*espaco-inicial*/}
            <div className="col-lg-2"/>

            <div className="col-lg-4 bigBox">
              <h5 className="value">Assets</h5>
              
              <div className="row">
                <div className="col-lg-4">
                  ID
                </div>
                <div className="col-lg-4">
                  Caixa
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  ID
                </div>
                <div className="col-lg-4">
                  Depositos
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  ID
                </div>
                <div className="col-lg-4">
                  Clientes
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>
            </div>

            <div className="col-lg-4 bigBox">
              <h5 className="value">Liabilities</h5>

              <div className="row ">
                <div className="col-lg-4">
                  ID
                </div>
                <div className="col-lg-4">
                  Gastos
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  ID
                </div>
                <div className="col-lg-4">
                  Fornecedores
                </div>
                <div className="col-lg-4 price">
                  Price
                </div>
              </div>

            </div>

            {/*espaco-final*/}
            <div className="col-lg-2"/>

          </div>

          <div className="row">
              <div className="col-lg-2"/>

              <div className="col-lg-4 extraSmallBox">
                <div className="row">
                  <div className="col-lg-6">
                  <h5 class="value">Total assets</h5>
                  </div>
                  <div className="col-lg-6 price">
                    Total price
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 extraSmallBox">
                <div className="row">
                  <div className="col-lg-6">
                    <h5 class="value">Total Liabilities</h5>
                  </div>
                  <div className="col-lg-6 price">
                    Total price
                  </div>
                </div>
              </div>
              <div className="col-lg-2"/>
            </div>

          {/*Equity*/}
          <div className="row">
          <div className="col-lg-2"/>
            
            <div className="col-lg-8 extraSmallBox">
              <div className="row">
                <div className="col-lg-6">
                <h5 class="value">Equity</h5>
                </div>
                <div className="col-lg-6 price">
                  Price
                </div>
              </div>
            </div>
            
            <div className="col-lg-2"/>
          </div>

        </div>

      );
    }
    }
  
  export default FinancialArea;