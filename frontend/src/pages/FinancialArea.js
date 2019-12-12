import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BalanceSheet from '../components/financialArea/BalanceSheet';
import ProfitLoss from '../components/financialArea/ProfitLoss';
import SalesGraph from '../components/financialArea/SalesGraph';

const FinancialArea = () => {
  const [balanceSheet, setBalanceSheet] = useState({});
  const [profitLoss, setProfitLoss] = useState([]);
  const [chartInfo, setChartInfo] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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

  useEffect(() => {
    const fetchChartInfo = async () => {
      const res = await axios.get('http://localhost:9000/finances/sales-over-time');
      setChartInfo(res.data);
    };
    fetchChartInfo();
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
          <h1 className="section-title">Sales Over Time</h1>
        </div>
      </div>
      <SalesGraph elements={chartInfo} />

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
    </div>
  );
};

export default FinancialArea;
