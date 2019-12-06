import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/financial.css';
import BalanceSheet from '../components/financialArea/BalanceSheet';
import GrossProfit from '../components/financialArea/GrossProfit';
import EBITDA from '../components/financialArea/EBITDA';
import EBIT from '../components/financialArea/EBIT';
import NetIncome from '../components/financialArea/NetIncome';
import TotalAssets from '../components/financialArea/TotalAssets';
import TotalLiabilities from '../components/financialArea/TotalLiabilities';
import Equity from '../components/financialArea/Equity';

const FinancialArea = () => {
  const [balanceSheet, setBalanceSheet] = useState([]);
  const [totalAssets, settotalAssets] = useState({
    debit: 0,
    credit: 0,
    total: 0,
  });
  const [totalLiabilities, setTotalLiabilities] = useState({
    debit: 0,
    credit: 0,
    total: 0,
  });
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get('http://localhost:9000/finances/balance-sheet');
      setBalanceSheet(res.data);
    };
    fetchInfo();
  }, []);

  useEffect(() => {
    const elementsAssets = [];
    const elementsLiabilities = [];
    for (let i = 0; i < balanceSheet.length; i += 1) {
      const element = balanceSheet[i];
      if (element.type === 'asset') {
        elementsAssets.push(element);
      } else if (element.type === 'liability') {
        elementsLiabilities.push(element);
      }
    }
    setAssets(elementsAssets);
    setLiabilities(elementsLiabilities);
  }, [balanceSheet]);
  useEffect(() => {
    let calTotalDebit = 0;
    let calTotalCredit = 0;
    for (let i = 0; i < assets.length; i += 1) {
      const element = assets[i];
      if (element.credit + element.debit > 0) {
        calTotalDebit += element.debit;
        calTotalCredit += element.credit;
      }
    }
    settotalAssets({
      debit: calTotalDebit,
      credit: calTotalCredit,
      total: calTotalDebit - calTotalCredit,
    });
  }, [assets]);

  useEffect(() => {
    let calTotalDebit = 0;
    let calTotalCredit = 0;
    for (let i = 0; i < liabilities.length; i += 1) {
      const element = liabilities[i];
      if (element.credit + element.debit > 0) {
        calTotalDebit += element.debit;
        calTotalCredit += element.credit;
      }
    }
<<<<<<< HEAD
    setTotalLiabilities({
      debit: calTotalDebit,
      credit: calTotalCredit,
      total: calTotalDebit - calTotalCredit,
    });
  }, [liabilities]);

  return (
    <div>
      <div className="row topic mtop">
        <div className="col-md-1" />
        Profit / Sales
        <div className="col-md-1" />
      </div>
=======
    return elements;
  }

  getSales() {
    let sales = this.state.balance_sheet.filter(p => p.index === 71);
    if(sales.length === 0) return 0;
    return sales[0].debit - sales[0].credit;
  }

  getCOGS() {
    let cogs = this.state.balance_sheet.filter(p => p.index === 61);
    if(cogs.length === 0) return 0;
    return cogs[0].credit - cogs[0].debit;
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
    
    return -earningsServices + expensesServices + expensesPersonnel;
  }

  getDepreciationAmortization() {
    let depreciationAmortization = this.state.balance_sheet.filter(p => p.index === 64);
    if(depreciationAmortization.length === 0) return 0;
    return depreciationAmortization[0].credit - depreciationAmortization[0].debit;
  }

  getInterestTaxes() {
    let interest = this.state.balance_sheet.filter(p => p.index === 691);
    let taxes = this.state.balance_sheet.filter(p => p.index === 681);
    let interest_count = 0;
    if(interest.length !== 0)
      interest_count = interest[0].credit - interest[0].debit;
    if(taxes.length === 0)
      return interest_count;
    return interest_count + taxes[0].credit - taxes[0].debit;
  }

  getEquity() {
    let equity = this.state.balance_sheet.filter(p => p.index === 51);
    if(equity.length === 0) return 0;
    return equity[0].credit - equity[0].debit;
  }

  render() {
    return (
      <div>
        <div className="row topic mtop">
          <div className="col-md-1" />
            Profit / Sales
          <div className="col-md-1" />
        </div>

        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-3 smallBox">
            <div className="row">
              <div className="col-md-8 smallerSize">
                Sales
                </div>
              <div className="col-md-4 price smallerSize">
                { this.getSales() } {'\u20AC'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 smallerSize">
                Cost of Goods Sold
                </div>
              <div className="col-md-4 price smallerSize">
                { this.getCOGS() } {'\u20AC'}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8 value">
                Gross Profit
                </div>
              <div className="col-md-4 price">
                { this.getSales() - this.getCOGS() } {'\u20AC'}
              </div>
            </div>
          </div>

          {/*espaco-entre-boxs*/}
          <div className="col-md-2" />

          {/*EBITDA table*/}
          <div className="col-md-3 smallBox">
            <div className="row">
              <div className="col-md-8 smallerSize">
                Gross Profit
              </div>
              <div className="col-md-4 price smallerSize">
                { this.getSales() - this.getCOGS() } {'\u20AC'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 smallerSize">
                Expenses
                </div>
              <div className="col-md-4 price smallerSize">
                { this.getExpenses() } {'\u20AC'}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8 value">
                EBITDA
              </div>
              <div className="col-md-4 price">
                { this.getSales() - this.getCOGS() - this.getExpenses() } {'\u20AC'}
              </div>
            </div>
          </div>

          {/*espaco-final}*/}
          <div className="col-md-2" />
        </div>
>>>>>>> 5dfc5ffa0da0e1a982aba99d3bb5837fe790dafd

      <div className="row">
        <div className="col-md-2" />
        <GrossProfit balanceSheet={balanceSheet} />

        {/* espaco-entre-boxs */}
        <div className="col-md-2" />

        <EBITDA balanceSheet={balanceSheet} />

        {/* espaco-final} */}
        <div className="col-md-2" />
      </div>

      <div className="row">
        <div className="col-md-2" />

        {/* EBIT table */}
        <EBIT balanceSheet={balanceSheet} />

        <div className="col-md-2" />

        {/* Net income table */}
        <NetIncome balanceSheet={balanceSheet} />
        <div className="col-md-2" />
      </div>

      <div className="row topic">
        <div className="col-md-1" />
        Balance Sheet
      </div>

      <div className="row smallerSize">
        <div className="col-md-1" />

        <div className="col-md-5 bigBox">
          <h5 className="value">Assets</h5>
          <BalanceSheet type="asset" balanceSheet={assets} />
        </div>

        <div className="col-md-5 bigBox">
          <h5 className="value">Liabilities</h5>
          <BalanceSheet type="liability" balanceSheet={liabilities} />
        </div>

        <div className="col-md-1" />
      </div>

      <div className="row">
        <div className="col-md-1" />

        <TotalAssets totalAssets={totalAssets} />

        <TotalLiabilities totalLiabilities={totalLiabilities} />
        <div className="col-md-1" />
      </div>

      <div className="row mbottom">
        <div className="col-md-1" />

        <Equity balanceSheet={balanceSheet} />

        <div className="col-md-1" />
      </div>
    </div>
  );
};

export default FinancialArea;
