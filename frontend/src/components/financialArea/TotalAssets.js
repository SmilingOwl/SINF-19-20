import React from 'react';
import propTypes from 'prop-types';

const TotalAssets = ({ totalAssets }) => (
  <div className="col-md-5 extraSmallBox ptop">
    <div className="row">
      <div className="col-md-6">
        <h5 className="value">Total assets</h5>
      </div>
      <div className="col-md-3 price">{`${totalAssets.debit}€`}</div>
      <div className="col-md-3 price">{`${totalAssets.credit}€`}</div>
    </div>
  </div>
);

TotalAssets.propTypes = {
  totalAssets: propTypes.shape({
    debit: propTypes.number.isRequired,
    credit: propTypes.number.isRequired,
  }).isRequired,
};
export default TotalAssets;
