import React from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import {
  getSales, getCOGS, getExpenses, getDepreciationAmortization,
} from '../../common/Math';

const EBIT = ({ balanceSheet }) => (
  <Col md={{ size: '3', offset: 2 }} className="  smallBox">
    <Row>
      <Col md="8" className="smallerSize">
        EBITDA
      </Col>
      <Col md="4" className="price smallerSize">
        {`${getSales(balanceSheet) - getCOGS(balanceSheet) - getExpenses(balanceSheet)}€`}
      </Col>
    </Row>
    <Row>
      <Col md="8" className="smallerSize">
        Depreciation and Amortization
      </Col>
      <Col md="4" className="price smallerSize">
        {`${getDepreciationAmortization(balanceSheet)}€`}
      </Col>
    </Row>
    <Row />
    <hr />
    <Row>
      <Col md="8" className="value">
        EBIT
      </Col>
      <Col md="4" className="price">
        {`${getSales(balanceSheet)
          - getCOGS(balanceSheet)
          - getExpenses(balanceSheet)
          - getDepreciationAmortization(balanceSheet)}€`}
      </Col>
    </Row>
  </Col>
);

EBIT.propTypes = {
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
export default EBIT;
