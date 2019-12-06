import React from 'react';
import propTypes from 'prop-types';
import { getSales, getCOGS } from '../../common/Math';

const GrossProfit = ({ balanceSheet }) => (
  <div className="col-md-3 smallBox">
    <div className="row">
      <div className="col-md-8 smallerSize">Sales</div>
      <div className="col-md-4 price smallerSize">{`${getSales(balanceSheet)}€`}</div>
    </div>

    <div className="row">
      <div className="col-md-8 smallerSize">Cost of Goods Sold</div>
      <div className="col-md-4 price smallerSize">{`${getCOGS(balanceSheet)}€`}</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-8 value">Gross Profit</div>
      <div className="col-md-4 price">{`${getSales(balanceSheet) - getCOGS(balanceSheet)}€`}</div>
    </div>
  </div>
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
