import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { numberWithSpaces } from '../../common/Math';

const TopProducts = ({ products }) => {
  const fillProductsTable = () => {
    const productsTable = [];
    for (let i = 0; i < products.length && i < 10; i += 1) {
      productsTable.push(
        <tr className="table-row" key={i}>
          <th scope="row" className="centered">
            {i + 1}
          </th>
          <td>
            <Link to={{ pathname: `/products/${products[i].code}` }}>
              {products[i].description}
            </Link>
          </td>
          <td className="centered">{numberWithSpaces(products[i].quantity)}</td>
          <td className="centered">
            {numberWithSpaces((products[i].totalEarned / products[i].quantity).toFixed(2))}
            {' '}
            {'\u20AC'}
          </td>
          <td className="centered">
            {numberWithSpaces(products[i].totalEarned.toFixed(2))}
            {' '}
            {'\u20AC'}
          </td>
        </tr>,
      );
    }
    return productsTable;
  };

  if(products.length > 0){
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
                    Units Sold
                  </th>
                  <th scope="col" className="centered">
                    Price per Unit
                  </th>
                  <th scope="col" className="centered">
                    Total Earned
                  </th>
                </tr>
              </thead>
              <tbody>{fillProductsTable()}</tbody>
            </table>
          </div>
          <div className="col-md-1" />
        </div>
      </>
    );
  } else {
    return (
      <div className="row mtop-smaller">
        <div className="col-md-1" />
        <div className="col-md-10">
          <span>No Products Available</span>
        </div>
      </div>
    );
  }
};

TopProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      totalEarned: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TopProducts;