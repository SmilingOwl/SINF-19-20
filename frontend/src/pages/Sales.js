import React, { useState, useEffect } from 'react';
import {
  Row, Spinner, Alert,
} from 'reactstrap';
import { numberWithSpaces } from '../common/Math';
import axios from 'axios';
import SalesGraph from '../components/financialArea/SalesGraph';
import TopConsumers from '../components/sales/TopConsumers';
import TopProducts from '../components/sales/TopProducts';

const Sales = () => {
  const [fiscalYear, setFiscalYear] = useState(2019);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [accountsReceivable, setAccountsReceivable] = useState(0);
  const [chartInfo, setChartInfo] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [profitLoss, setProfitLoss] = useState({});
  const [balanceSheet, setBalanceSheet] = useState([]);
  const [isLoadingTables, setIsLoadingTables] = useState(true);
  const [hasErrorTables, setHasErrorTables] = useState(false);
  const [isLoadingProfitLoss, setIsLoadingProfitLoss] = useState(true);
  const [hasErrorProfitLoss, setHasErrorProfitLoss] = useState(false);
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [hasErrorBalance, setHasErrorBalance] = useState(false);
  const [isLoadingChartInfo, setIsLoadingChartInfo] = useState(true);
  const [hasErrorChartInfo, setHasErrorChartInfo] = useState(false);

  useEffect(() => {
    const fetchFiscalYear = async () => {
      try {
        const res = await axios.get('http://localhost:9000/fiscal-year');
        setFiscalYear(parseInt(res.data.year));
        console.log(res.data.year);
      } catch (error) {
        setFiscalYear(2019);
      }
    };
    fetchFiscalYear();
  }, []);

  useEffect(() => {
    const fetchSalesInfo = async () => {
      setHasErrorTables(false);
      await axios
        .get('http://localhost:9000/sales/info')
        .then((result) => {
          if (result.status === 200) {
            setCustomers(result.data.customers);
            setProducts(result.data.products);
          } else {
            setHasErrorTables(true);
          }
        })
        .catch(() => {
          setHasErrorTables(true);
        });
      setIsLoadingTables(false);
    };
    fetchSalesInfo();
  }, []);

  useEffect(() => {
    const fetchProfitLossInfo = async () => {
      setHasErrorProfitLoss(false);
      await axios
        .get('http://localhost:9000/finances/profit-loss')
        .then((result) => {
          if (result.status === 200) {
            setProfitLoss(result.data);
          } else {
            setHasErrorProfitLoss(true);
          }
        })
        .catch(() => {
          setHasErrorProfitLoss(true);
        });
      setIsLoadingProfitLoss(false);
    };
    fetchProfitLossInfo();
  }, []);

  useEffect(() => {
    const fetchBalanceSheetInfo = async () => {
      setHasErrorBalance(false);
      await axios
        .get('http://localhost:9000/finances/balance-sheet')
        .then((result) => {
          if (result.status === 200) {
            setBalanceSheet(result.data);
          } else {
            setHasErrorBalance(true);
          }
        })
        .catch(() => {
          setHasErrorBalance(true);
        });
      setIsLoadingBalance(false);
    };
    fetchBalanceSheetInfo();
  }, []);

  useEffect(() => {
    const updateAccountsReceivable = async () => {
      let accounts_receivable = 0;
      if(balanceSheet.non_current_assets) {
        let non_current = balanceSheet.non_current_assets.filter(p => p.index === 'A00108');
        if(non_current.length > 0) {
          accounts_receivable += non_current[0].value;
        }
        let current = balanceSheet.current_assets.filter(p => p.index === 'A00118');
        if(current.length > 0) {
          accounts_receivable += current[0].value;
        }
      }
      setAccountsReceivable(accounts_receivable);
    };
    updateAccountsReceivable();
  }, [balanceSheet]);

  useEffect(() => {
    const fetchChartInfo = async () => {
      setHasErrorChartInfo(false);
      try {
        setIsLoadingChartInfo(true);
        const res = await axios.get('http://localhost:9000/finances/sales-over-time');
        setChartInfo(res.data);
        setIsLoadingChartInfo(false);
      } catch (error) {
        setIsLoadingChartInfo(false);
        setHasErrorChartInfo(true);
      }
    };
    fetchChartInfo();
  }, []);

  return(
    <div>
      <div className="row mtop-smaller">
        <div className="col-sm-1" />
        <div className="col-sm-10">
        <div className="row">
          <div className="col-sm-9"/>
          <div className="col-sm-2">
            <h5 className="topic" style={{'font-size': '20px', 'text-align':'right'}}> Fiscal Year: {fiscalYear}</h5>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-10">
          <h3 className="section-title" style={{'margin-top':'0px'}}>Sales Information</h3>
        </div>
        </div>
      {(() => {
        if (isLoadingProfitLoss || isLoadingBalance) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorProfitLoss || hasErrorBalance) {
          return <Alert color="danger">Error trying to fetch Sales Information</Alert>;
        }
        return (
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <div className="row mtop-smaller">
                <div className="col-sm-1" />
                <div className="col-sm-2 smallBox no-padding centered">
                  <h6>{profitLoss.sales ? profitLoss.sales.description : ''}</h6>
                  <p>{profitLoss.sales ? numberWithSpaces(Math.abs(profitLoss.sales.value.toFixed(2))) : ''} €</p>
                </div>
                <div className="col-sm-2" />
                <div className="col-sm-2 smallBox no-padding centered">
                  <h6>{profitLoss.cogs ? profitLoss.cogs.description : ''}</h6>
                  <p>{profitLoss.cogs ? numberWithSpaces(Math.abs(profitLoss.cogs.value.toFixed(2))) : ''} €</p>
                </div>
                <div className="col-sm-2" />
                <div className="col-sm-2 smallBox no-padding centered">
                  <h6>{'Contas a Receber'}</h6>
                  <p>{numberWithSpaces(Math.abs(accountsReceivable).toFixed(2))} €</p>
                </div>
              </div>
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
        if (isLoadingChartInfo) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorChartInfo) {
          return <Alert color="danger">Error trying to fetch Sales Over Time</Alert>;
        }
        return <SalesGraph elements={chartInfo} />;
      })()}

      <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-10">
          <h3 className="section-title">Top Products</h3>
        </div>
        </div>
      {(() => {
        if (isLoadingTables) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorTables) {
          return <Alert color="danger">Error trying to fetch products information.</Alert>;
        }
        return <TopProducts products={products} />;
      })()}
      <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-10">
          <h3 className="section-title">Top Consumers</h3>
        </div>
      </div>
      
      {(() => {
        if (isLoadingTables) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorTables) {
          return <Alert color="danger">Error trying to fetch clients information.</Alert>;
        }
        return <TopConsumers customers={customers} />;
      })()}
    </div>
  );
}

export default Sales;