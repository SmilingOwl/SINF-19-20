import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Row, Spinner, Alert,
} from 'reactstrap';
import Products from '../components/supplier/Products';
import SupplierPurchasesInfo from '../components/supplier/SupplierPurchasesInfo';
import FiscalYear from '../components/common/FiscalYear';

const Supplier = ({ match }) => {
  const [fiscalYear, setFiscalYear] = useState(2019);
  const [supplier, setSupplier] = useState("");
  const [isLoadingSupplier, setLoadingSupplier] = useState(true);
  const [hasErrorSupplier, setErrorSupplier] = useState(false);
  const [productsInfo, setProductsInfo] = useState({});
  const [isLoadingProducts, setLoadingProducts] = useState(true);
  const [hasErrorProducts, setErrorProducts] = useState(false);
  const [id] = useState(match.params.id);

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
    const fetchSuppliersInfo = async () => {
      setErrorSupplier(false);
      try {
        const res = await axios.get(`http://localhost:9000/suppliers/${id}`);
        setSupplier(res.data);
        setLoadingSupplier(false);
      } catch (error) {
        setLoadingSupplier(false);
        setErrorSupplier(true);
      }
    };
    fetchSuppliersInfo();
  }, [id]);

  useEffect(() => {
    const fetchProductsInfo = async () => {
      setErrorProducts(false);
      try {
        const res = await axios.get(`http://localhost:9000/suppliers/${supplier.companyTaxID}/products`);
        setProductsInfo(res.data);
        setLoadingProducts(false);
      } catch (error) {
        setLoadingProducts(false);
        setErrorProducts(true);
      }
    };
    fetchProductsInfo();
  }, [supplier]);

  return (
    <>
      <FiscalYear fiscalYear={fiscalYear} />
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 zero_padding">
          <h3 className="section-title" style={{marginTop: '0px'}}>
            Supplier
            {' '}
            {id}
          </h3>
        </div>
      </div>
      {(() => {
        if (isLoadingSupplier) {
          return (
            <Row className="center-spinner" style={{ height: 'auto' }}>
              <Spinner />
            </Row>
          );
        }
        if (hasErrorSupplier) {
          return <Alert color="danger">Error trying to fetch Supplier Information</Alert>;
        }
        return (
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 smallBox">
              <div className="row">
                <div className="col-md-8">
                  <p><strong className="field-name">Name: </strong> {supplier.name}</p>
                </div>
                <div className="col-md-4">
                  <p><strong className="field-name">Company TaxID: </strong> {supplier.companyTaxID}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p><strong className="field-name">Email: </strong>{supplier.electronicMail}</p>
                </div>
                <div className="col-md-4">
                  <p><strong className="field-name">Phone: </strong> {supplier.telephone}</p>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-md-8">
                  <p><strong className="field-name">Street name:  </strong> {supplier.streetName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p><strong className="field-name">Building Number:  </strong> {supplier.buildingNumber}</p>
                </div>
                <div className="col-md-4">
                  <p><strong className="field-name">Postal Zone:  </strong> {supplier.postalZone} {supplier.cityName}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 zero_padding">
          <h3 className="section-title">
            Products Supplied Information
          </h3>
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
          return <Alert color="danger">Error trying to fetch Products Information</Alert>;
        }
        return (
          <>
            <SupplierPurchasesInfo totalUnits={productsInfo.total_units} totalSpent={productsInfo.total_spent} />
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8 zero_padding">
                <h3 className="section-title">Products Supplied</h3>
              </div>
            </div>
            <Products products_info={productsInfo} />
          </>
        );
      })()}
    </>
  );
}

export default withRouter(Supplier);