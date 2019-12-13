import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

const StockSales = ({ salesInfo, stockInfo }) => (
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
);

StockSales.propTypes = {
  salesInfo: PropTypes.shape({
    quantity_sold: PropTypes.number,
    total_price: PropTypes.number,
  }).isRequired,
  stockInfo: PropTypes.shape({
    quantity: PropTypes.number,
  }).isRequired,
};

export default StockSales;
