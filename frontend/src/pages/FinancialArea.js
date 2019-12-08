import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import BalanceSheet from '../components/financialArea/BalanceSheet';
import GrossProfit from '../components/financialArea/GrossProfit';
import EBITDA from '../components/financialArea/EBITDA';
import EBIT from '../components/financialArea/EBIT';
import NetIncome from '../components/financialArea/NetIncome';
import TotalAssets from '../components/financialArea/TotalAssets';
import TotalLiabilities from '../components/financialArea/TotalLiabilities';
import Equity from '../components/financialArea/Equity';
import SalesGraph from '../components/financialArea/SalesGraph';

const FinancialArea = () => {
  const [balanceSheet, setBalanceSheet] = useState([]);
  const [salesOverTime, setSalesOverTime] = useState([]);
  const [totalAssets, setTotalAssets] = useState({
    debit: 0,
    credit: 0,
  });
  const [totalLiabilities, setTotalLiabilities] = useState({
    debit: 0,
    credit: 0,
  });
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get('http://localhost:9000/finances/balance-sheet');
      setBalanceSheet(res.data.balance_sheet);
      setSalesOverTime(res.data.sales_over_time);
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
    setTotalAssets({
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
    setTotalLiabilities({
      debit: calTotalDebit,
      credit: calTotalCredit,
      total: calTotalCredit - calTotalDebit,
    });
  }, [liabilities]);

  return (
    <div>
      <Row className="topic mtop">
        <Col sm={{ size: '10', offset: 1 }}>Profit / Sales</Col>
      </Row>

      <Row>
        <GrossProfit balanceSheet={balanceSheet} />
        <EBITDA balanceSheet={balanceSheet} />
      </Row>

      <Row>
        <EBIT balanceSheet={balanceSheet} />
        <NetIncome balanceSheet={balanceSheet} />
      </Row>

      <Row className="topic">
        <Col sm={{ size: '10', offset: 1 }}>Sales Over Time</Col>
      </Row>
      <SalesGraph elements={salesOverTime} />

      <Row className="topic">
        <Col md={{ size: 'auto', offset: 1 }}>Balance Sheet</Col>
      </Row>

      <Row>

        <Col md={{ size: '5', offset: 1 }} className="bigBox">
          <h5 className="value">Assets</h5>
          <BalanceSheet type="asset" balanceSheet={assets} />
        </Col>

        <Col md="5" className="bigBox">
          <h5 className="value">Liabilities</h5>
          <BalanceSheet type="liability" balanceSheet={liabilities} />
        </Col>
      </Row>

      <Row>
        <div className="col-md-1" />

        <TotalAssets totalAssets={totalAssets} />

        <TotalLiabilities totalLiabilities={totalLiabilities} />
        <div className="col-md-1" />
      </Row>

      <Row className="mbottom">
        <div className="col-md-1" />

        <Equity balanceSheet={balanceSheet} />

        <div className="col-md-1" />
      </Row>
    </div>
  );
};

export default FinancialArea;
