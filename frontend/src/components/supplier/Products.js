import React from 'react';
import { numberWithSpaces } from '../../common/Math';

const Products = ({ products_info }) => {

    const fillSuppliersTable = () => {
        let suppliersTable = [];
        if (!products_info.products)
          return [];
        let i = 1;
        for (var key in products_info.products) {
          suppliersTable.push(
            <tr className="table-row" key={key}>
              <th scope="row" className="centered">{i}</th>
              <td>{products_info.products[key].product}</td>
              <td className="centered">{numberWithSpaces(products_info.products[key].unitsBought)}</td>
              <td className="centered">{numberWithSpaces(products_info.products[key].pricePerUnit)} €</td>
            </tr>
          );
          i++;
        }
        return suppliersTable;
    };

  if(products_info.products && Object.entries(products_info.products).length > 0){
    return (
      <>
        <div className="row mtop-smaller">
          <div className="col-md-2" />
          <div className="col-md-8 zero_padding">
            <table className="table supplier">
              <thead>
                <tr className="table-header">
                  <th scope="col" className="centered">ID</th>
                  <th scope="col">Product</th>
                  <th scope="col" className="centered">Units Bought</th>
                  <th scope="col" className="centered">Price per unit</th>
                </tr>
              </thead>
              <tbody>{fillSuppliersTable()}</tbody>
            </table>
          </div>
          <div className="col-md-1" />
        </div>
      </>
    );
  } else {
    return (
      <div className="row mtop-smaller">
        <div className="col-md-2" />
        <div className="col-md-8">
          <span>No Products Available</span>
        </div>
      </div>
    );
  }
};

export default Products;