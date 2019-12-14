import React from 'react';
import { Link } from 'react-router-dom';
import { numberWithSpaces } from '../../common/Math';

const StockTable = ({ stock }) => {
    const fillStockTable = () => {
        let stockTable = [];
        if (!stock)
            return [];
        let i = 0;
        for (; i < stock.length; i++) {
            stockTable.push(
                <tr className="table-row" key={i+1}>
                    <th scope="row" />
                    <td>
                        <Link to={{pathname: `/products/${stock[i].code}` }}>
                            {stock[i].name}
                        </Link>
                    </td>
                    <td>{numberWithSpaces(stock[i].quantity)}</td>
                    <td>{numberWithSpaces(stock[i].unitPrice.toFixed(2))} € </td>
                    <td>{numberWithSpaces(stock[i].totalValue.toFixed(2))} € </td>
                </tr>
            );
        }
        return stockTable;
    }

  if(stock.length > 0){
    return (
      <>
        <div className="row mtop-smaller">
            <div className="col-md-1" />
            <div className="col-md-10">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th scope="col"/>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price per unit</th>
                            <th scope="col">Total value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fillStockTable()}
                    </tbody>
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
          <span>No Stock Available</span>
        </div>
      </div>
    );
  }
};

export default StockTable;