import React, { Component } from 'react';
import '../css/financial.css';

class FinancialArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance_sheet: [],
      total_assets: {
        debit: 0,
        credit: 0,
        total: 0
      },
      total_liabilities: {
        debit: 0,
        credit: 0,
        total: 0
      }
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
    let totalDebit = 0;
    let totalCredit = 0;
    elements.push(
      <div>
      <div className="row">
        <div className="col-sm-1">
          <strong>ID</strong>
        </div>
        <div className="col-sm-5">
          Description
        </div>
        <div className="col-sm-2 price">
          Debit
        </div>
        <div className="col-sm-2 price">
          Credit
        </div>
        <div className="col-sm-2 price">
          Total
        </div>
      </div> <hr/>
      </div>
    );
    for(let i = 0; i < this.state.balance_sheet.length; i++) {
      let element = this.state.balance_sheet[i];
      if(element.type == type && element.credit + element.debit > 0) {
        totalDebit += element.debit;
        totalCredit += element.credit;
        let total = element.debit - element.credit;
        if(type === 'liability') total = element.credit - element.debit;
        elements.push(
          <div className="row" key={element.index}>
            <div className="col-sm-1 small-text">
              <strong>{ element.index }</strong>
            </div>
            <div className="col-sm-5 small-text">
              { element.description }
            </div>
            <div className="col-sm-2 price small-text">
              { element.debit } {'\u20AC'}
            </div>
            <div className="col-sm-2 price small-text">
              { element.credit } {'\u20AC'}
            </div>
            <div className="col-sm-2 price small-text">
              { total >= 0 ? total : "(" + -total + ")" } {'\u20AC'}
            </div>
          </div>
        );
      }
    }
    if(type == 'asset') {
      this.state.total_assets.debit = totalDebit;
      this.state.total_assets.credit = totalCredit;
      this.state.total_assets.total = totalDebit - totalCredit;
    }
    else {
      this.state.total_liabilities.debit = totalDebit;
      this.state.total_liabilities.credit = totalCredit;
      this.state.total_liabilities.total = totalCredit - totalDebit;
    }
    return elements;
  }

  getSales() {
    let sales = this.state.balance_sheet.filter(p => p.index === 71);
    if(sales.length === 0) return 0;
    return sales[0].credit - sales[0].debit;
  }

  getCOGS() {
    let cogs = this.state.balance_sheet.filter(p => p.index === 61);
    if(cogs.length === 0) return 0;
    return cogs[0].debit - cogs[0].credit;
  }

  getExpenses() {
    let earningsServices = this.state.balance_sheet.filter(p => p.index === 72);
    let expensesServices = this.state.balance_sheet.filter(p => p.index === 62);
    let expensesPersonnel = this.state.balance_sheet.filter(p => p.index === 63);
    if(earningsServices.length === 0) earningsServices = 0;
    else earningsServices = earningsServices[0].debit - earningsServices[0].credit;
    if(expensesServices.length === 0) expensesServices = 0;
    else expensesServices = expensesServices[0].credit - expensesServices[0].debit;
    if(expensesPersonnel.length === 0) expensesPersonnel = 0;
    else expensesPersonnel = expensesPersonnel[0].credit - expensesPersonnel[0].debit;
    
    return earningsServices - expensesServices - expensesPersonnel;
  }

  getDepreciationAmortization() {
    let depreciationAmortization = this.state.balance_sheet.filter(p => p.index === 64);
    if(depreciationAmortization.length === 0) return 0;
    return depreciationAmortization[0].credit - depreciationAmortization[0].debit;
  }

  render() {
    return (
      <div>
        <div className="row topic mtop">
          <div className="col-lg-2" />
            Profit / Sales
          <div className="col-lg-2" />
        </div>

        <div className="row">
          <div className="col-lg-2" />
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
                { this.getSales() - this.getCOGS() } {'\u20AC'}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                Expenses
                </div>
              <div className="col-lg-4 price">
                { this.getExpenses() } {'\u20AC'}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-8 value">
                EBITDA
              </div>
              <div className="col-lg-4 price">
                { this.getSales() - this.getCOGS() - this.getExpenses() } {'\u20AC'}
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
                { this.getSales() - this.getCOGS() - this.getExpenses() } {'\u20AC'}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                Depreciation and Amortization
              </div>
              <div className="col-lg-4 price">
                { this.getDepreciationAmortization() } {'\u20AC'}
              </div>
            </div>
            <div className="row"></div>

            <hr />
            <div className="row">
              <div className="col-lg-8 value">
                EBIT
              </div>
              <div className="col-lg-4 price">
                { this.getSales() - this.getCOGS() - this.getExpenses() - this.getDepreciationAmortization() } {'\u20AC'}
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
                { this.getSales() - this.getCOGS() - this.getExpenses() - this.getDepreciationAmortization() } {'\u20AC'}
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
          <div className="col-lg-2" />

          <div className="col-lg-4 bigBox">
            <h5 className="value">Assets</h5>
            { this.renderBalanceSheet('asset') }
          </div>

          <div className="col-lg-4 bigBox">
            <h5 className="value">Liabilities</h5>
            { this.renderBalanceSheet('liability') }
          </div>

          <div className="col-lg-2" />
        </div>

        <div className="row">
          <div className="col-lg-2" />

          <div className="col-lg-4 extraSmallBox ptop">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="value">Total assets</h5>
              </div>
              <div className="col-lg-2 price small-text">
                { this.state.total_assets.debit } {'\u20AC'}
              </div>
              <div className="col-lg-2 price small-text">
                { this.state.total_assets.credit } {'\u20AC'}
              </div>
              <div className="col-lg-2 price small-text">
                { this.state.total_assets.total > 0 ? this.state.total_assets.total : "(" + -this.state.total_assets.total + ")" } {'\u20AC'}
              </div>
            </div>
          </div>

          <div className="col-lg-4 extraSmallBox ptop">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="value">Total Liabilities</h5>
              </div>
              <div className="col-lg-2 price small-text">
                { this.state.total_liabilities.debit } {'\u20AC'}
              </div>
              <div className="col-lg-2 price small-text">
                { this.state.total_liabilities.credit } {'\u20AC'}
              </div>
              <div className="col-lg-2 price small-text">
                { this.state.total_liabilities.total > 0 ? this.state.total_liabilities.total : "(" + -this.state.total_liabilities.total + ")" } {'\u20AC'}
              </div>
            </div>
          </div>
          <div className="col-lg-2" />
        </div>

        <div className="row mbottom">
          <div className="col-lg-2" />

          <div className="col-lg-8 extraSmallBox">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="value">Equity</h5>
              </div>
              <div className="col-lg-6 price">
                { this.state.total_assets.total - this.state.total_liabilities.total > 0 ?
                  this.state.total_assets.total - this.state.total_liabilities.total :
                  "(" + (-this.state.total_assets.total + this.state.total_liabilities.total) + ")" } {'\u20AC'}
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