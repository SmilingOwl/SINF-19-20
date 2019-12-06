import React from 'react';
import propTypes from 'prop-types';
import {
  getSales, getCOGS, getExpenses, getDepreciationAmortization,
} from '../../common/Math';

const EBIT = ({ balanceSheet }) => (
  <div className="col-md-3 smallBox">
    <div className="row">
      <div className="col-md-8 smallerSize">EBITDA</div>
      <div className="col-md-4 price smallerSize">
        {`${getSales(balanceSheet) - getCOGS(balanceSheet) - getExpenses(balanceSheet)}€`}
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 smallerSize">Depreciation and Amortization</div>
      <div className="col-md-4 price smallerSize">
        {`${getDepreciationAmortization(balanceSheet)}€`}
      </div>
    </div>
    <div className="row" />

    <hr />
    <div className="row">
      <div className="col-md-8 value">EBIT</div>
      <div className="col-md-4 price">
        {`${getSales(balanceSheet)
          - getCOGS(balanceSheet)
          - getExpenses(balanceSheet)
          - getDepreciationAmortization(balanceSheet)
        }€`}
      </div>
    </div>
  </div>
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
