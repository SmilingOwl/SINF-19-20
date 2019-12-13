import React, { useState, useEffect } from 'react';
import { Row, Spinner, Alert } from 'reactstrap';
import axios from 'axios';
import PurchasesInfo from '../components/purchases/PurchasesInfo';
import TopPurchasesP from '../components/purchases/TopPurchasesP';
import TopSuppliers from '../components/purchases/TopSuppliers';

const Purchases = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState(true);
  const [hasErrorSuppliers, setHasErrorSuppliers] = useState(false);

  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [hasErrorProducts, setHasErrorProducts] = useState(false);

  const [totalSpent, setTotalSpent] = useState(0);
  const [isLoadingTotalSpent, setIsLoadingTotalSpent] = useState(true);
  const [hasErrorTotalSpent, setHasErrorTotalSpent] = useState(false);

  const [balanceSheet, setBalanceSheet] = useState({});
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [hasErrorBalance, setHasErrorBalance] = useState(false);

  const [accountsPayable, setAccountsPayable] = useState(0);

  useEffect(() => {
    const fetchSuppliersTable = async () => {
      setHasErrorSuppliers(false);
      await axios
        .get('http://localhost:9000/purchases/suppliers')
        .then((result) => {
          if (result.status === 200) {
            setSuppliers(result.data.suppliers);
          } else {
            setHasErrorSuppliers(true);
          }
        })
        .catch(() => {
          setHasErrorSuppliers(true);
        });
      setIsLoadingSuppliers(false);
    };
    fetchSuppliersTable();
  }, []);

  useEffect(() => {
    const fetchProductsTable = async () => {
      setHasErrorProducts(false);
      await axios
        .get('http://localhost:9000/purchases/products')
        .then((result) => {
          if (result.status === 200) {
            setProducts(result.data.products);
          } else {
            setHasErrorProducts(true);
          }
        })
        .catch(() => {
          setHasErrorProducts(true);
        });
      setIsLoadingProducts(false);
    };
    fetchProductsTable();
  }, []);

  useEffect(() => {
    const fetchTotalSpentInfo = async () => {
      setHasErrorTotalSpent(false);
      await axios
        .get('http://localhost:9000/purchases')
        .then((result) => {
          if (result.status === 200) {
            setTotalSpent(result.data.total_spent);
          } else {
            setHasErrorTotalSpent(true);
          }
        })
        .catch(() => {
          setHasErrorTotalSpent(true);
        });
      setIsLoadingTotalSpent(false);
    };
    fetchTotalSpentInfo();
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
    const updateAccountsPayable = async () => {
      let calcAccountsPayable = 0;
      if (balanceSheet.non_current_assets) {
        const nonCurrent = balanceSheet.non_current_liabilities.filter((p) => p.index === 'A00144');
        if (nonCurrent.length > 0) {
          calcAccountsPayable += nonCurrent[0].value;
        }
        const current = balanceSheet.current_liabilities.filter((p) => p.index === 'A00150');
        if (current.length > 0) {
          calcAccountsPayable += current[0].value;
        }
      }
      setAccountsPayable(Math.abs(calcAccountsPayable));
    };
    updateAccountsPayable();
  }, [balanceSheet]);

  return (
    <>
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h3 className="section-title">Purchases Information</h3>
        </div>
      </div>
      {(() => {
        if (isLoadingBalance || isLoadingTotalSpent) {
          return (
            <Row className="center-spinner" style={{ height: 'auto' }}>
              <Spinner />
            </Row>
          );
        }
        if (hasErrorBalance || hasErrorTotalSpent) {
          return <Alert color="danger">Error ocurred trying to fetch Purchases Information</Alert>;
        }
        return <PurchasesInfo totalSpent={totalSpent} accountsPayable={accountsPayable} />;
      })()}

      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h3 className="section-title">Top Purchases</h3>
        </div>
      </div>
      {(() => {
        if (isLoadingProducts) {
          return (
            <Row className="center-spinner" style={{ height: 'auto' }}>
              <Spinner />
            </Row>
          );
        }
        if (hasErrorProducts) {
          return <Alert color="danger">Error ocurred trying to fetch Top Purchases Table</Alert>;
        }
        return <TopPurchasesP products={products} />;
      })()}

      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h3 className="section-title">Top Suppliers</h3>
        </div>
      </div>
      {(() => {
        if (isLoadingSuppliers) {
          return (
            <Row className="center-spinner" style={{ height: 'auto' }}>
              <Spinner />
            </Row>
          );
        }
        if (hasErrorSuppliers) {
          return <Alert color="danger">Error ocurred trying to fetch Top Suppliers Table</Alert>;
        }
        return <TopSuppliers suppliers={suppliers} />;
      })()}
    </>
  );
};

export default Purchases;
