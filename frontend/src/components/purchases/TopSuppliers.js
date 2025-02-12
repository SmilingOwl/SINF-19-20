import React from 'react';
import PropTypes from 'prop-types';
import SuppliersTable from './SuppliersTable';

const TopSuppliers = ({ suppliers }) => {
  if(!suppliers || suppliers.length === 0){
    return (
      <div className="row mtop-smaller">
        <div className="col-md-1" />
        <div className="col-md-10">
          <span>No Suppliers Available</span>
        </div>
      </div>
    );
  } else{
    return(
      <>
        <div className="row mtop-smaller">
          <div className="col-md-1" />
          <div className="col-md-10">
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th scope="col" className="centered">
                    Top
                  </th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Most Bought Product</th>
                  <th scope="col" className="centered">
                    Total Spent
                  </th>
                </tr>
              </thead>
              <tbody>
                <SuppliersTable suppliers={suppliers} />
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

TopSuppliers.propTypes = {
  suppliers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TopSuppliers;
