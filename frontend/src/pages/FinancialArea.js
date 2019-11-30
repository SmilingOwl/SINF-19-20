import React, { Component } from 'react';
import '../css/FinancialArea.css';

class FinancialArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance_sheet: [],
      total_assets: 0,
      total_liabilities: 0
    };
  }

  componentWillMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    fetch("http://localhost:9000/finances/balance-sheet")
      .then(res => res.json())
      .then(res => { this.setState({ balance_sheet: res }); console.log(res); })
      .catch(err => err);
  }

  renderBalanceSheet(type) {
    let elements = [];
    let total = 0;
    for(let i = 0; i < this.state.balance_sheet.length; i++) {
      let element = this.state.balance_sheet[i];
      total += element.credit + element.debit;
      if(element.type == type && element.credit + element.debit > 0) {
        elements.push(
          <div className="row" key={element.index}>
            <div className="col-sm-1">
              <strong>{ element.index }</strong>
            </div>
            <div className="col-sm-7">
              { element.description }
            </div>
            <div className="col-sm-4 price">
              { element.credit + element.debit } {'\u20AC'}
            </div>
          </div>
        );
      }
    }
    if(type == 'asset') this.state.total_assets = total;
    else this.state.total_liabilities = total;
    return elements;
  }

  getSales() {
    let sales = this.state.balance_sheet.filter(p => p.index === 71);
    if(sales.length === 0) return 0;
    return sales[0].credit + sales[0].debit;
  }

  getCOGS() {
    let cogs = this.state.balance_sheet.filter(p => p.index === 31);
    if(cogs.length === 0) return 0;
    return cogs[0].credit + cogs[0].debit;
  }

  render() {
    return (
      <div>
        <div className="row mtop">
          <div className="col-lg-2" />
          Profit / Sales
            <div className="col-lg-2" />
        </div>

        <div className="row">
          {/*espaco-inicial*/}
          <div className="col-lg-2" />

          {/*Gross Profit table*/}
          <div className="col-lg-3 smallBox">
            <div className="row">
              <div className="col-lg-8">
                Sales
                </div>
              <div className="col-lg-4 price">
                { this.getSales() } {'\u20AC'}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                Cost of Goods Sold
                </div>
              <div className="col-lg-4 price">
                { this.getCOGS() } {'\u20AC'}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-8 value">
                Gross Profit
                </div>
              <div className="col-lg-4 price">
                { this.getSales() - this.getCOGS() } {'\u20AC'}
              </div>
            </div>
          </div>

          {/*espaco-entre-boxs*/}
          <div className="col-lg-2" />

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
            <hr />
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
          <div className="col-lg-2" />
        </div>


        <div className="row">

          <div className="col-lg-2" />

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
            <hr />
            <div className="row">
              <div className="col-lg-8 value">
                EBIT
                  </div>
              <div className="col-lg-4 price">
                Price
                </div>
            </div>
          </div>

          <div className="col-lg-2" />

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
            <hr />
            <div className="row">
              <div className="col-lg-8 value">
                Net income
                  </div>
              <div className="col-lg-4 price">
                Price
                </div>
            </div>
          </div>
          <div className="col-lg-2" />

        </div>

        <div className="row topic">
          <div className="col-lg-2" />
          Balance Sheet
            <div className="col-lg-2" />
        </div>

        <div className="row">
          {/*espaco-inicial*/}
          <div className="col-lg-2" />

          <div className="col-lg-4 bigBox">
            <h5 className="value">Assets</h5>
            { this.renderBalanceSheet('asset') }
          </div>

          <div className="col-lg-4 bigBox">
            <h5 className="value">Liabilities</h5>
            { this.renderBalanceSheet('liability') }
          </div>

          {/*espaco-final*/}
          <div className="col-lg-2" />

        </div>

        <div className="row">
          <div className="col-lg-2" />

          <div className="col-lg-4 extraSmallBox">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="value">Total assets</h5>
              </div>
              <div className="col-lg-6 price">
                { this.state.total_assets } {'\u20AC'}
              </div>
            </div>
          </div>

          <div className="col-lg-4 extraSmallBox">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="value">Total Liabilities</h5>
              </div>
              <div className="col-lg-6 price">
                { this.state.total_liabilities } {'\u20AC'}
              </div>
            </div>
          </div>
          <div className="col-lg-2" />
        </div>

        {/*Equity*/}
        <div className="row">
          <div className="col-lg-2" />

          <div className="col-lg-8 extraSmallBox">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="value">Equity</h5>
              </div>
              <div className="col-lg-6 price">
                { this.state.total_assets - this.state.total_liabilities } {'\u20AC'}
              </div>
            </div>
          </div>

          <div className="col-lg-2" />
        </div>

      </div>

    );
  }
}

export default FinancialArea;