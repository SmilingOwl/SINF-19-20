import React from 'react';
import PropTypes from 'prop-types';

const FiscalYear = ({ fiscalYear }) => (
    <div className="row mtop-smaller">
    <div className="col-sm-1" />
    <div className="col-sm-10">
    <div className="row">
      <div className="col-sm-9"/>
      <div className="col-sm-2">
        <h5 className="topic" style={{fontSize: '20px', textAlign:'right'}}> Fiscal Year: {fiscalYear}</h5>
      </div>
      </div>
    </div>
  </div>
);

FiscalYear.propTypes = {
  fiscalYear: PropTypes.number.isRequired,
};

export default FiscalYear;
