import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Alert, Row } from 'reactstrap';
import BalanceSheet from '../components/financialArea/BalanceSheet';
import ProfitLoss from '../components/financialArea/ProfitLoss';
import SalesGraph from '../components/financialArea/SalesGraph';
import FiscalYear from '../components/common/FiscalYear';

const FinancialArea = () => {
  const [fiscalYear, setFiscalYear] = useState(2019);
  const [balanceSheet, setBalanceSheet] = useState({});
  const [profitLoss, setProfitLoss] = useState([]);
  const [chartInfo, setChartInfo] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isLoadingBalanceSheet, setIsLoadingBalanceSheet] = useState(true);
  const [hasErrorBalanceSheet, setHasErrorBalanceSheet] = useState(false);
  const [isLoadingProfitLoss, setIsLoadingProfitLoss] = useState(true);
  const [hasErrorProfitLoss, setHasErrorProfitLoss] = useState(false);
  const [isLoadingSales, setIsLoadingSales] = useState(true);
  const [hasErrorSales, setHasErrorSales] = useState(false);

  useEffect(() => {
    const fetchFiscalYear = async () => {
      try {
        const res = await axios.get('http://localhost:9000/fiscal-year');
        setFiscalYear(parseInt(res.data.year));
      } catch (error) {
        setFiscalYear(2019);
      }
    };
    fetchFiscalYear();
  }, []);

  useEffect(() => {
    const fetchBalanceSheetInfo = async () => {
      setHasErrorBalanceSheet(false);
      try {
        setIsLoadingBalanceSheet(true);
        const res = await axios.get('http://localhost:9000/finances/balance-sheet');
        setBalanceSheet(res.data);
        setIsLoadingBalanceSheet(false);
      } catch (error) {
        setIsLoadingBalanceSheet(false);
        setHasErrorBalanceSheet(true);
      }
    };
    fetchBalanceSheetInfo();
  }, []);

  useEffect(() => {
    const fetchProfitLossInfo = async () => {
      setHasErrorProfitLoss(false);
      try {
        setIsLoadingProfitLoss(true);
        const res = await axios.get('http://localhost:9000/finances/profit-loss');
        setProfitLoss(res.data);
        setIsLoadingProfitLoss(false);
      } catch (error) {
        setIsLoadingProfitLoss(false);
        setHasErrorProfitLoss(true);
      }
    };
    fetchProfitLossInfo();
  }, []);

  useEffect(() => {
    const fetchChartInfo = async () => {
      setHasErrorSales(false);
      try {
        setIsLoadingSales(true);
        const res = await axios.get('http://localhost:9000/finances/sales-over-time');
        setChartInfo(res.data);
        setIsLoadingSales(false);
      } catch (error) {
        setIsLoadingSales(false);
        setHasErrorSales(true);
      }
    };
    fetchChartInfo();
  }, []);

  return (
    <div>
      <FiscalYear fiscalYear={fiscalYear} />
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-8">
          <h1 className="section-title" style={{marginTop:'0px'}}>Profit / Loss</h1>
        </div>
      </div>
      {(() => {
        if (isLoadingProfitLoss) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorProfitLoss) {
          return <Alert color="danger">Error trying to fetch Profit / Loss</Alert>;
        }
        return (
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <ProfitLoss profitLoss={profitLoss} />
            </div>
          </div>
        );
      })()}

      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <h1 className="section-title">Sales Over Time</h1>
        </div>
      </div>
      {(() => {
        if (isLoadingSales) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorSales) {
          return <Alert color="danger">Error trying to fetch Sales Over Time</Alert>;
        }
        return <SalesGraph elements={chartInfo} />;
      })()}

      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <h1 className="section-title">Balance Sheet</h1>
        </div>
      </div>
      {(() => {
        if (isLoadingBalanceSheet) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorBalanceSheet) {
          return <Alert color="danger">Error trying to fetch BalanceSheet</Alert>;
        }
        return (
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <BalanceSheet balanceSheet={balanceSheet} />
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default FinancialArea;
