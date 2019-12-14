/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Row, Col, Spinner, Alert,
} from 'reactstrap';
import PropTypes from 'prop-types';
import SalesGraph from '../components/financialArea/SalesGraph';
import Info from '../components/product/Info';
import StockSales from '../components/product/StockSales';

const Product = ({ match }) => {
  const [fiscalYear, setFiscalYear] = useState(2019);
  const [product, setProduct] = useState({
    api: {
      description: '',
      complementaryDescription: '',
      barcode: '',
    },
  });
  const [salesInfo, setSalesInfo] = useState(null);
  const [chartInfo, setChartInfo] = useState([]);
  const [stockInfo, setStockInfo] = useState(null);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [hasErrorProduct, setHasErrorProduct] = useState(false);
  const [isLoadingStock, setIsLoadingStock] = useState(true);
  const [hasErrorStock, setHasErrorStock] = useState(false);
  const [isLoadingSales, setIsLoadingSales] = useState(true);
  const [hasErrorSales, setHasErrorSales] = useState(false);
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [hasErrorChart, setHasErrorChart] = useState(false);
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
    const fetchProduct = async () => {
      setHasErrorProduct(false);
      await axios
        .get(`http://localhost:9000/products/${id}`)
        .then((result) => {
          if (result.status === 200) {
            setProduct(result.data);
          } else {
            setHasErrorProduct(true);
          }
        })
        .catch(() => {
          setHasErrorProduct(true);
        });
      setIsLoadingProduct(false);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchProductSalesInfo = async () => {
      setHasErrorSales(false);
      await axios
        .get(`http://localhost:9000/products/${id}/sales`)
        .then((result) => {
          if (result.status === 200) {
            setSalesInfo(result.data);
          } else {
            setHasErrorSales(true);
          }
        })
        .catch(() => {
          setHasErrorSales(true);
        });
      setIsLoadingSales(false);
    };
    fetchProductSalesInfo();
  }, [id]);

  useEffect(() => {
    const fetchProductChart = async () => {
      setHasErrorChart(false);
      await axios
        .get(`http://localhost:9000/products/${id}/chart`)
        .then((result) => {
          if (result.status === 200) {
            setChartInfo(result.data);
          } else {
            setHasErrorChart(true);
          }
        })
        .catch(() => {
          setHasErrorChart(true);
        });
      setIsLoadingChart(false);
    };
    fetchProductChart();
  }, [id]);

  useEffect(() => {
    const fetchProductStock = async () => {
      setHasErrorStock(false);
      await axios
        .get(`http://localhost:9000/products/${id}/stock`)
        .then((result) => {
          if (result.status === 200) {
            setStockInfo(result.data);
          } else {
            setHasErrorStock(true);
          }
        })
        .catch(() => {
          setHasErrorStock(true);
        });
      setIsLoadingStock(false);
    };
    fetchProductStock();
  }, [id]);

  return (
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
      <Row>
        <Col sm={{ size: '8', offset: 2 }} className="zero_padding">
          <h3 className="section-title" style={{'margin-top':'0px'}}>
            Product
            {' '}
            {id}
          </h3>
        </Col>
      </Row>
      {(() => {
        if (isLoadingProduct) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorProduct) {
          return <Alert color="danger">Error trying to fetch Product Info</Alert>;
        }
        return (
          <Info
            id={id}
            description={product.api.description}
            barcode={product.api.barcode}
            complementaryDescription={product.api.complementaryDescription}
          />
        );
      })()}
      <Row>
        <div className="col-md-2" />
        <div className="col-md-3 zero_padding">
          <h3 className="section-title">Stock</h3>
        </div>
        <div className="col-md-2" />
        <div className="col-md-3 zero_padding">
          <h3 className="section-title">Sales</h3>
        </div>
      </Row>
      {(() => {
        if (isLoadingSales || isLoadingStock) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorSales || hasErrorStock) {
          return <Alert color="danger">Error trying to fetch Sales and Stock</Alert>;
        }
        return <StockSales salesInfo={salesInfo} stockInfo={stockInfo} />;
      })()}

      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 zero_padding">
          <h3 className="section-title">Sales Over Time</h3>
        </div>
        <div className="col-md-2" />
      </div>
      {(() => {
        if (isLoadingChart) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (hasErrorChart) {
          return <Alert color="danger">Error trying to fetch Sales Over Time</Alert>;
        }
        return <SalesGraph elements={chartInfo} />;
      })()}
    </div>
  );
};

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default withRouter(Product);
