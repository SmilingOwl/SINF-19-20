import React from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { getSales, getCOGS } from '../../common/Math';

const GrossProfit = ({ balanceSheet }) => (
  <Col md={{ size: '3', offset: 2 }} className="smallBox">
    <Row>
      <Col md="8" className="smallerSize">
        Sales
      </Col>
      <Col md="4" className="price smallerSize">
        {`${getSales(balanceSheet)}€`}
      </Col>
    </Row>
    <Row>
      <Col md="8" className="smallerSize">
        Cost of Goods Sold
      </Col>
      <Col md="4" className="price smallerSize">{`${getCOGS(balanceSheet)}€`}</Col>
    </Row>
    <hr />
    <Row>
      <Col md="8" className="value">
        Gross Profit
      </Col>
      <Col md="4" className="price">{`${getSales(balanceSheet) - getCOGS(balanceSheet)}€`}</Col>
    </Row>
  </Col>
);

GrossProfit.propTypes = {
  balanceSheet: propTypes.arrayOf(
    propTypes.shape({
      index: propTypes.number.isRequired,
      description: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      credit: propTypes.number.isRequired,
      debit: propTypes.number.isRequired,
    }),
  ).isRequired,
};
export default GrossProfit;
