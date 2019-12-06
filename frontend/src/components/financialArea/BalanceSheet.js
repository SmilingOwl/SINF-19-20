import React from 'react';
import propTypes from 'prop-types';

const BalanceSheet = ({ type, balanceSheet }) => {
  const elements = [];
  for (let i = 0; i < balanceSheet.length; i += 1) {
    const element = balanceSheet[i];
    if (element.type === type && element.credit + element.debit > 0) {
      elements.push(
        <div className="row" key={element.index}>
          <div className="col-sm-1">
            <strong>{element.index}</strong>
          </div>
          <div className="col-sm-5">{element.description}</div>
          <div className="col-sm-3 price">{`${element.debit}€`}</div>
          <div className="col-sm-3 price">{`${element.credit}€`}</div>
        </div>,
      );
    }
  }

  return (
    <>
      <div key="0">
        <div className="row">
          <div className="col-sm-1">
            <strong>ID</strong>
          </div>
          <div className="col-sm-5">Description</div>
          <div className="col-sm-3 price">Debit</div>
          <div className="col-sm-3 price">Credit</div>
        </div>
        {' '}
        <hr />
      </div>
      <div>{elements}</div>
    </>
  );
};

BalanceSheet.propTypes = {
  type: propTypes.string.isRequired,
  balanceSheet: propTypes.arrayOf(
    propTypes.shape({
      index: propTypes.number.isRequired,
      description: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      credit: propTypes.number.isRequired,
      debit: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BalanceSheet;
