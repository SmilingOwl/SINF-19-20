/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Alert, Spinner } from 'reactstrap';
import SalesInfo from '../components/sales/SalesInfo';
import TopProducts from '../components/sales/TopProducts';
import TopConsumers from '../components/sales/TopConsumers';

const Sales = () => {
  const [customers, setCustomers] = useState('');
  const [products, setProducts] = useState('');
  const [isLoadingSalesInfo, setIsLoadingSalesInfo] = useState(true);
  const [hasErrorSalesInfo, setHasErrorSalesInfo] = useState(false);
  const [profitLoss, setProfitLoss] = useState({});
  const [isLoadingProfitLoss, setIsLoadingProfitLoss] = useState(true);
  const [hasErrorProfitLoss, setHasErrorProfitLoss] = useState(false);
  const [balanceSheet, setBalanceSheet] = useState({});
  const [isLoadingBalanceSheet, setIsLoadingBalanceSheet] = useState(true);
  const [hasErrorBalanceSheet, setHasErrorBalanceSheet] = useState(false);

  useEffect(() => {
    const fetchSalesInfo = async () => {
      setIsLoadingSalesInfo(true);
      setHasErrorSalesInfo(false);
      try {
        const res = await axios.get('http://localhost:9000/sales/info');
        setCustomers(res.data.customers);
        setProducts(res.data.products);
      } catch (error) {
        setHasErrorSalesInfo(true);
      }
      setIsLoadingSalesInfo(false);
    };
    const fetchProfitLossInfo = async () => {
      setIsLoadingProfitLoss(true);
      setHasErrorProfitLoss(false);
      try {
        const res = await axios.get('http://localhost:9000/finances/profit-loss');
        setProfitLoss(res.data);
      } catch (error) {
        setHasErrorProfitLoss(true);
      }
      setIsLoadingProfitLoss(false);
    };
    const fetchBalanceSheetInfo = async () => {
      setIsLoadingBalanceSheet(true);
      setHasErrorBalanceSheet(false);
      try {
        const res = await axios.get('http://localhost:9000/finances/balance-sheet');
        setBalanceSheet(res.data);
      } catch (error) {
        setHasErrorBalanceSheet(true);
      }
      setIsLoadingBalanceSheet(false);
    };

    fetchSalesInfo();
    fetchBalanceSheetInfo();
    fetchProfitLossInfo();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h3 className="section-title">Sales Information</h3>
        </div>
      </div>
      {(() => {
        if (isLoadingProfitLoss || isLoadingBalanceSheet) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorProfitLoss || hasErrorBalanceSheet) {
          return <Alert color="danger">Error ocurred trying to fetch Sales Information</Alert>;
        }
        return <SalesInfo balanceSheet={balanceSheet} profitLoss={profitLoss} />;
      })()}

      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h3 className="section-title">Top Products</h3>
        </div>
      </div>
      {(() => {
        if (isLoadingSalesInfo) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorSalesInfo) {
          return <Alert color="danger">Error ocurred trying to fetch Top Products</Alert>;
        }
        return <TopProducts products={products} />;
      })()}

      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h3 className="section-title">Top Consumers</h3>
        </div>
      </div>
      {(() => {
        if (isLoadingSalesInfo) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorSalesInfo) {
          return <Alert color="danger">Error ocurred trying to fetch Top Consumers</Alert>;
        }
        return <TopConsumers customers={customers} />;
      })()}
    </div>
  );
};

export default Sales;
