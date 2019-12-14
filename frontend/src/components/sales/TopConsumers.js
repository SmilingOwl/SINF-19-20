import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { numberWithSpaces } from '../../common/Math';

const TopConsumers = ({ customers }) => {
  const fillCustomersTable = () => {
    const customersTable = [];
    for (let i = 0; i < customers.length && i < 10; i += 1) {
      customersTable.push(
        <tr className="table-row" key={customers[i].name}>
          <th scope="row" className="centered">
            {i + 1}
          </th>
          <td>{customers[i].name}</td>
          <td>
            <Link to={{ pathname: `/products/${customers[i].product.code}` }}>
              {customers[i].product.description}
            </Link>
          </td>
          <td className="centered">{numberWithSpaces(customers[i].quantityBought)}</td>
          <td className="centered">
            {numberWithSpaces(customers[i].totalSpent.toFixed(2))}
            {' '}
            {'\u20AC'}
          </td>
        </tr>,
      );
    }
    return customersTable;
  };
  if(customers.length > 0)
  {
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
                  <th scope="col">Consumer</th>
                  <th scope="col">Most Bought Product</th>
                  <th scope="col" className="centered">
                    Units Bought
                  </th>
                  <th scope="col" className="centered">
                    Total Spent
                  </th>
                </tr>
              </thead>
              <tbody>{fillCustomersTable()}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="row mtop-smaller">
        <div className="col-md-1" />
        <div className="col-md-10">
          <span>No Costumers Available</span>
        </div>
      </div>
    );
  }
};

TopConsumers.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      quantityBought: PropTypes.number,
      totalSpent: PropTypes.number,
      product: PropTypes.shape({
        code: PropTypes.string,
        description: PropTypes.string,
      }),
    }).isRequired,
  ).isRequired,
};

export default TopConsumers;