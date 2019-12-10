import React from 'react';
import PropTypes from 'prop-types';

const CompanyInfo = ({ companyInformation }) => (
  <div>
    <div className="row">
      <div className="col-md-8">
        <p>
          <strong className="field-name">Street: </strong>
          {' '}
          {companyInformation.CompanyAddress.StreetName}
        </p>
      </div>
      <div className="col-md-4">
        <p>
          <strong className="field-name">Postal Code: </strong>
          {' '}
          {companyInformation.CompanyAddress.PostalCode}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8">
        <p>
          <strong className="field-name">City: </strong>
          {' '}
          {companyInformation.CompanyAddress.City}
        </p>
      </div>
    </div>
  </div>
);

CompanyInfo.propTypes = {
  companyInformation: PropTypes.shape({
    CompanyAddress: PropTypes.shape({
      StreetName: PropTypes.string.isRequired,
      PostalCode: PropTypes.string.isRequired,
      City: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CompanyInfo;
