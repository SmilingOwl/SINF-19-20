import React from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { getSales, getCOGS, getExpenses } from '../../common/Math';

const EBITDA = ({ balanceSheet }) => (
  <Col md={{ size: '3', offset: 2 }} className="smallBox">
    <Row>
      <Col md="8" className="smallerSize">Gross Profit</Col>
      <Col md="4" className="price smallerSize">
        {`${getSales(balanceSheet) - getCOGS(balanceSheet)}€`}
      </Col>
    </Row>
    <Row>
      <Col md="8" className="smallerSize">Expenses</Col>
      <Col md="4" className="price smallerSize">{`${getExpenses(balanceSheet)}€`}</Col>
    </Row>
    <hr />
    <Row>
      <Col md="8" className="value">EBITDA</Col>
      <Col md="4" className="price">
        {`${getSales(balanceSheet) - getCOGS(balanceSheet) - getExpenses(balanceSheet)}€`}
      </Col>
    </Row>
  </Col>
);

EBITDA.propTypes = {
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
export default EBITDA;
