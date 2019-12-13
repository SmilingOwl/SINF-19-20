import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Spinner, Alert } from 'reactstrap';
import axios from 'axios';
import { numberWithSpaces } from '../common/Math';

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
      let accounts_payable = 0;
      if (balanceSheet.non_current_assets) {
        const non_current = balanceSheet.non_current_assets.filter((p) => p.index === 'A00144');
        if (non_current.length > 0) {
          accounts_payable += non_current[0].value;
        }
        const current = balanceSheet.current_assets.filter((p) => p.index === 'A00150');
        if (current.length > 0) {
          accounts_payable += current[0].value;
        }
      }
      setAccountsPayable(accounts_payable);
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
          return <Alert color="danger">Error trying to fetch Purchases Information</Alert>;
        }
        return (
          <div className="row mtop-smaller">
            <div className="col-md-2" />
            <div className="col-md-3 smallBox align-items-center d-flex">
              <div className="col-md-12 centered">
                <strong>Total Spent</strong>
                <p className="price" style={{ 'text-align': 'center' }}>
                  {numberWithSpaces(totalSpent.toFixed(2))}
                  {' '}
€
                </p>
              </div>
            </div>
            <div className="col-md-2" />
            <div className="col-md-3 smallBox align-items-center d-flex">
              <div className="col-md-12 centered">
                <strong>Accounts Payable</strong>
                <p className="price" style={{ 'text-align': 'center' }}>
                  {numberWithSpaces(accountsPayable.toFixed(2))}
                  {' '}
€
                </p>
              </div>
            </div>
          </div>
        );
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
          return <Alert color="danger">Error trying to fetch Top Purchases Table</Alert>;
        }
        return (
          <>
            <div className="row mtop-smaller">
              <div className="col-md-1" />
              <div className="col-md-10">
                <table className="table">
                  <thead>
                    <tr className="table-header">
                      <th scope="col" className="centered">
                        Top
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col" className="centered">
                        Units Bought
                      </th>
                      <th scope="col" className="centered">
                        Price per Unit
                      </th>
                      <th scope="col" className="centered">
                        Total Spent
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductsTable products={products} />
                  </tbody>
                </table>
              </div>
              <div className="col-md-1" />
            </div>
          </>
        );
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
          return <Alert color="danger">Error trying to fetch Top Suppliers Table</Alert>;
        }
        return (
          <>
            <div className="row mtop-smaller">
              <div className="col-md-1" />
              <div className="col-md-10">
                <table className="table">
                  <thead>
                    <tr className="table-header">
                      <th scope="col" className="centered">
                        Top
                      </th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Most Bought Product</th>
                      <th scope="col" className="centered">
                        Total Spent
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <SuppliersTable suppliers={suppliers} />
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      })()}
    </>
  );
};

const SuppliersTable = ({ suppliers }) => {
  const suppliersTable = [];
  if (!suppliers) return [];
  for (let i = 1; i <= suppliers.length && i <= 10; i++) {
    suppliersTable.push(
      <tr className="table-row" key={i}>
        <th scope="row" className="centered">
          {i}
        </th>
        <td>
          <Link to={{ pathname: `/suppliers/${suppliers[i - 1].supplier_id}` }}>
            {suppliers[i - 1].supplier}
          </Link>
        </td>
        <td>{suppliers[i - 1].most_bought_product}</td>
        <td className="centered">
          {numberWithSpaces(suppliers[i - 1].total_spent.toFixed(2))}
          {' '}
€
        </td>
      </tr>,
    );
  }
  return suppliersTable;
};

const ProductsTable = ({ products }) => {
  const productsTable = [];
  if (!products) return [];
  for (let i = 1; i <= products.length && i <= 10; i++) {
    productsTable.push(
      <tr className="table-row" key={i}>
        <th scope="row" className="centered">
          {i}
        </th>
        <td>{products[i - 1].product}</td>
        <td className="centered">{numberWithSpaces(products[i - 1].unitsSold)}</td>
        <td className="centered">
          {numberWithSpaces((products[i - 1].totalSpent / products[i - 1].unitsSold).toFixed(2))}
          {' '}
€
          {' '}
        </td>
        <td className="centered">
          {numberWithSpaces(products[i - 1].totalSpent.toFixed(2))}
          {' '}
€
        </td>
      </tr>,
    );
  }

  return productsTable;
};

export default Purchases;
