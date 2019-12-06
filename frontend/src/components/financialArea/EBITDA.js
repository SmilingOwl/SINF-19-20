import React from 'react';
import propTypes from 'prop-types';
import { getSales, getCOGS, getExpenses } from '../../common/Math';

const EBITDA = ({ balanceSheet }) => (
  <div className="col-md-3 smallBox">
    <div className="row">
      <div className="col-md-8 smallerSize">Gross Profit</div>
      <div className="col-md-4 price smallerSize">
        {`${getSales(balanceSheet) - getCOGS(balanceSheet)}€`}
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 smallerSize">Expenses</div>
      <div className="col-md-4 price smallerSize">{`${getExpenses(balanceSheet)}€`}</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-8 value">EBITDA</div>
      <div className="col-md-4 price">
        {`${getSales(balanceSheet) - getCOGS(balanceSheet) - getExpenses(balanceSheet)}€`}
      </div>
    </div>
  </div>
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
