import React from 'react';
import PropTypes from 'prop-types';
import { numberWithSpaces } from '../../common/Math';

const PurchasesInfo = ({ totalSpent, accountsPayable }) => (
  <div className="row mtop-smaller">
    <div className="col-md-2" />
    <div className="col-md-3 smallBox align-items-center d-flex">
      <div className="col-md-12 centered">
        <strong>Total Spent</strong>
        <p className="price" style={{ textAlign: 'center' }}>
          {numberWithSpaces(totalSpent.toFixed(2))}
          {' '}
€
        </p>
      </div>
    </div>
    <div className="col-md-2" />
    <div className="col-md-3 smallBox align-items-center d-flex">
      <div className="col-md-12 centered">
        <strong>Accounts Payable</strong>
        <p className="price" style={{ textAlign: 'center' }}>
          {numberWithSpaces(accountsPayable.toFixed(2))}
          {' '}
€
        </p>
      </div>
    </div>
  </div>
);

PurchasesInfo.propTypes = {
  totalSpent: PropTypes.number.isRequired,
  accountsPayable: PropTypes.number.isRequired,
};

export default PurchasesInfo;
