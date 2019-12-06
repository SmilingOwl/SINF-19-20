import React from 'react';
import propTypes from 'prop-types';
import { getEquity } from '../../common/Math';

const Equity = ({ balanceSheet }) => (
  <div className="col-md-10 extraSmallBox">
    <div className="row">
      <div className="col-md-6">
        <h5 className="value">Equity</h5>
      </div>
      <div className="col-md-6 price">{`${getEquity(balanceSheet)}€`}</div>
    </div>
  </div>
);

Equity.propTypes = {
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
export default Equity;
