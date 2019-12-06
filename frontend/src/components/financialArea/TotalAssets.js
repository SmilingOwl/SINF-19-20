import React from 'react';
import propTypes from 'prop-types';

const TotalAssets = ({ totalAssets }) => (
  <div className="col-md-5 extraSmallBox ptop">
    <div className="row">
      <div className="col-md-6">
        <h5 className="value">Total assets</h5>
      </div>
      <div className="col-md-2 price">{`${totalAssets.debit}€`}</div>
      <div className="col-md-2 price">{`${totalAssets.credit}€`}</div>
      <div className="col-md-2 price">
        {totalAssets.total > 0 ? totalAssets.total : `(${-totalAssets.total})`}
        €
      </div>
    </div>
  </div>
);

TotalAssets.propTypes = {
  totalAssets: propTypes.shape({
    debit: propTypes.number.isRequired,
    credit: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
  }).isRequired,
};
export default TotalAssets;
