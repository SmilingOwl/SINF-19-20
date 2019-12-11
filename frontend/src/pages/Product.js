/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import SalesGraph from '../components/financialArea/SalesGraph';

const Product = ({ match }) => {
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
  const [id] = useState(match.params.id);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:9000/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchProductSalesInfo = async () => {
      const res = await axios.get(`http://localhost:9000/products/${id}/sales`);
      setSalesInfo(res.data);
    };
    fetchProductSalesInfo();
  }, [id]);

  useEffect(() => {
    const fetchProductChart = async () => {
      const res = await axios.get(`http://localhost:9000/products/${id}/chart`);
      setChartInfo(res.data);
    };
    fetchProductChart();
  }, [id]);

  useEffect(() => {
    const fetchProductStock = async () => {
      const res = await axios.get(`http://localhost:9000/products/${id}/stock`);
      setStockInfo(res.data);
    };
    fetchProductStock();
  }, [id]);

  return (
    <div>
      <Row>
        <Col sm={{ size: '8', offset: 2 }} className="zero_padding">
          <h3 className="section-title">
            Product
            {' '}
            {id}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: '8', offset: 2 }} className="smallBox">
          <Row>
            <Col md="5">
              <strong className="field-name">Name: </strong>
              {' '}
              {product.api.description}
            </Col>
            <Col md="3">
              <strong className="field-name">Code: </strong>
              {' '}
              {id}
            </Col>
            <Col md="4" className="align-right">
              <strong className="field-name">Barcode: </strong>
              {' '}
              {product.api.barcode}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md="12">
              <strong className="field-name">Description: </strong>
              {' '}
              {product.api.complementaryDescription}
            </Col>
          </Row>
        </Col>
      </Row>

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
      <Row>
        <div className="col-md-2" />
        <div className="col-md-3 smallBox boxPadding">
          <div className="row">
            <div className="col-md-8">Quantity Sold</div>
            <div className="col-md-4 price">{salesInfo ? salesInfo.quantity_sold : 0}</div>
          </div>
          <div className="row">
            <div className="col-md-8">Quantity In Stock</div>
            <div className="col-md-4 price">{stockInfo ? stockInfo.quantity : 0}</div>
          </div>
        </div>
        <div className="col-md-2" />
        <div className="col-md-3 smallBox boxPadding">
          <div className="row">
            <div className="col-md-8">Average Price Per Unit</div>
            <div className="col-md-4 price">
              {salesInfo ? (salesInfo.total_price / salesInfo.quantity_sold).toFixed(2) : 0.0}
              {' '}
              {'\u20AC'}
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">Total Earnings</div>
            <div className="col-md-4 price">
              {salesInfo ? salesInfo.total_price.toFixed(2) : 0.0}
              {' '}
              {'\u20AC'}
            </div>
          </div>
        </div>
      </Row>

      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 zero_padding">
          <h3 className="section-title">Sales Over Time</h3>
        </div>
        <div className="col-md-2" />
      </div>
      <SalesGraph elements={chartInfo} />
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
