import React from 'react';
import PropTypes from 'prop-types';
import ProductsTable from './ProductsTable';

const TopPurchasesP = ({ products }) => {
  if(products.length === 0){
    return (
      <div className="row mtop-smaller">
        <div className="col-md-1" />
        <div className="col-md-10">
          <span>No Products Available</span>
        </div>
      </div>
    );
  } else{
    return (
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
                  <th scope="col">Product</th>
                  <th scope="col" className="centered">
                    Units Bought
                  </th>
                  <th scope="col" className="centered">
                    Price per Unit
                  </th>
                  <th scope="col" className="centered">
                    Total Spent
                  </th>
                </tr>
              </thead>
              <tbody>
                <ProductsTable products={products} />
              </tbody>
            </table>
          </div>
          <div className="col-md-1" />
        </div>
      </>
    );
  }
}

TopPurchasesP.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TopPurchasesP;
