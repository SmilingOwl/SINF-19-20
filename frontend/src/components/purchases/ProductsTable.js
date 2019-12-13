import React from 'react';
import PropTypes from 'prop-types';
import { numberWithSpaces } from '../../common/Math';

const ProductsTable = ({ products }) => {
  const productsTable = [];
  if (!products) return [];
  for (let i = 1; i <= products.length && i <= 10; i += 1) {
    productsTable.push(
      <tr className="table-row" key={i}>
        <th scope="row" className="centered">
          {i}
        </th>
        <td>{products[i - 1].product}</td>
        <td className="centered">{numberWithSpaces(products[i - 1].unitsSold)}</td>
        <td className="centered">
          {numberWithSpaces((products[i - 1].totalSpent / products[i - 1].unitsSold).toFixed(2))}
          {' '}
€
          {' '}
        </td>
        <td className="centered">
          {numberWithSpaces(products[i - 1].totalSpent.toFixed(2))}
          {' '}
€
        </td>
      </tr>,
    );
  }

  return productsTable;
};

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      totalSpent: PropTypes.number,
      unitsSold: PropTypes.number,
    }),
  ).isRequired,
};

export default ProductsTable;
