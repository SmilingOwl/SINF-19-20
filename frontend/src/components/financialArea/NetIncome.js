import React from 'react';
import propTypes from 'prop-types';
import {
  getSales,
  getCOGS,
  getExpenses,
  getDepreciationAmortization,
  getInterestTaxes,
} from '../../common/Math';

const NetIncome = ({ balanceSheet }) => (
  <div className="col-md-3 smallBox">
    <div className="row">
      <div className="col-md-8 smallerSize">EBIT</div>
      <div className="col-md-4 price smallerSize">
        {`${getSales(balanceSheet)
          - getCOGS(balanceSheet)
          - getExpenses(balanceSheet)
          - getDepreciationAmortization(balanceSheet)
        }€`}
      </div>
    </div>

    <div className="row">
      <div className="col-md-8 smallerSize">Interest and Taxes</div>
      <div className="col-md-4 price smallerSize">{`${getInterestTaxes(balanceSheet)}€`}</div>
    </div>

    <hr />
    <div className="row">
      <div className="col-md-8 value">Net income</div>
      <div className="col-md-4 price">
        {`${getSales(balanceSheet)
          - getCOGS(balanceSheet)
          - getExpenses(balanceSheet)
          - getDepreciationAmortization(balanceSheet)
          - getInterestTaxes(balanceSheet)
        }€`}
      </div>
    </div>
  </div>
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
