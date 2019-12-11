import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import BalanceSheet from '../components/financialArea/BalanceSheet';
import ProfitLoss from '../components/financialArea/ProfitLoss';

const FinancialArea = () => {
  const [balanceSheet, setBalanceSheet] = useState({});
  const [profitLoss, setProfitLoss] = useState([]);

  useEffect(() => {
    const fetchBalanceSheetInfo = async () => {
      const res = await axios.get('http://localhost:9000/finances/balance-sheet');
      setBalanceSheet(res.data);
    };
    fetchBalanceSheetInfo();
  }, []);

  useEffect(() => {
    const fetchProfitLossInfo = async () => {
      const res = await axios.get('http://localhost:9000/finances/profit-loss');
      setProfitLoss(res.data);
    };
    fetchProfitLossInfo();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-1"/>
        <div className="col-sm-10">
          <h1 className="section-title">Profit / Loss</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1"/>
        <div className="col-sm-10">
          <ProfitLoss profitLoss={profitLoss} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1"/>
        <div className="col-sm-10">
          <h1 className="section-title">Balance Sheet</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1"/>
        <div className="col-sm-10">
          <BalanceSheet balanceSheet={balanceSheet} />
        </div>
      </div>
      {/*<Row className="topic">
        <Col sm={{ size: '10', offset: 1 }}>
          <h3 className="section-title">Profit / Loss</h3>
        </Col>
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
        <Col sm={{ size: '10', offset: 1 }}>
          <h3 className="section-title">Sales Over Time</h3>
        </Col>
      </Row>
      <SalesGraph elements={salesOverTime} />

      <Row className="topic">
        <Col md={{ size: '10', offset: 1 }}>
          <h3 className="section-title">Balance Sheet</h3>
        </Col>
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
  </Row>*/}
    </div>
  );
};

export default FinancialArea;
