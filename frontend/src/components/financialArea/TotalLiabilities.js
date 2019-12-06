import React from 'react';
import propTypes from 'prop-types';

const TotalLiabilities = ({ totalLiabilities }) => (
  <div className="col-md-5 extraSmallBox ptop">
    <div className="row">
      <div className="col-md-6">
        <h5 className="value">Total Liabilities</h5>
      </div>
      <div className="col-md-3 price">{`${totalLiabilities.debit}€`}</div>
      <div className="col-md-3 price">{`${totalLiabilities.credit}€`}</div>
    </div>
  </div>
);

TotalLiabilities.propTypes = {
  totalLiabilities: propTypes.shape({
    debit: propTypes.number.isRequired,
    credit: propTypes.number.isRequired,
  }).isRequired,
};
export default TotalLiabilities;
