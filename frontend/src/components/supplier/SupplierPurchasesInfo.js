import React from 'react';
import { numberWithSpaces } from '../../common/Math';

const SupplierPurchasesInfo = ({totalUnits, totalSpent }) => (
  <div className="row mtop-smaller">
    <div className="col-md-2" />
    <div className="col-md-3 smallBox align-items-center d-flex">
      <div className="col-md-12 centered">
        <strong>Total Units Bought</strong>
        <p className="price" style={{ textAlign: 'center' }}>
          {numberWithSpaces(totalUnits)}
        </p>
      </div>
    </div>
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
  </div>
);

export default SupplierPurchasesInfo;
