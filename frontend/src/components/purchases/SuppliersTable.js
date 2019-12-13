import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { numberWithSpaces } from '../../common/Math';

const SuppliersTable = ({ suppliers }) => {
  const suppliersTable = [];
  if (!suppliers) return [];
  for (let i = 1; i <= suppliers.length && i <= 10; i += 1) {
    suppliersTable.push(
      <tr className="table-row" key={i}>
        <th scope="row" className="centered">
          {i}
        </th>
        <td>
          <Link to={{ pathname: `/suppliers/${suppliers[i - 1].supplier_id}` }}>
            {suppliers[i - 1].supplier}
          </Link>
        </td>
        <td>{suppliers[i - 1].most_bought_product}</td>
        <td className="centered">
          {numberWithSpaces(suppliers[i - 1].total_spent.toFixed(2))}
          {' '}
€
        </td>
      </tr>,
    );
  }
  return suppliersTable;
};

SuppliersTable.propTypes = {
  suppliers: PropTypes.arrayOf(
    PropTypes.shape({
      supplier_id: PropTypes.string,
      supplier: PropTypes.string,
      total_spent: PropTypes.number,
      most_bought_product: PropTypes.string,
    }),
  ).isRequired,
};

export default SuppliersTable;
