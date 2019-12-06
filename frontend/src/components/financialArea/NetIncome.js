import React from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import {
  getSales,
  getCOGS,
  getExpenses,
  getDepreciationAmortization,
  getInterestTaxes,
} from '../../common/Math';

const NetIncome = ({ balanceSheet }) => (
  <Col md={{ size: '3', offset: 2 }} className="smallBox">
    <Row>
      <Col md="8" className="smallerSize">EBIT</Col>
      <Col md="4" className="price smallerSize">
        {`${getSales(balanceSheet)
          - getCOGS(balanceSheet)
          - getExpenses(balanceSheet)
          - getDepreciationAmortization(balanceSheet)
        }€`}
      </Col>
    </Row>
    <Row>
      <Col md="8" className="smallerSize">Interest and Taxes</Col>
      <Col md="4" className="price smallerSize">{`${getInterestTaxes(balanceSheet)}€`}</Col>
    </Row>
    <hr />
    <Row>
      <Col md="8" className="value">Net income</Col>
      <Col md="4" className="price">
        {`${getSales(balanceSheet)
          - getCOGS(balanceSheet)
          - getExpenses(balanceSheet)
          - getDepreciationAmortization(balanceSheet)
          - getInterestTaxes(balanceSheet)
        }€`}
      </Col>
    </Row>
  </Col>
);

NetIncome.propTypes = {
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
export default NetIncome;
