import React from 'react';
import PropTypes from 'prop-types';
import { numberWithSpaces } from '../../common/Math';

const SalesInfo = ({ balanceSheet, profitLoss }) => {
  const calculateAccountsReceivable = () => {
    let accountsReceivable = 0;
    if (balanceSheet.nonCurrentAssets) {
      const nonCurrent = balanceSheet.nonCurrentAssets.filter((p) => p.index === 'A00108');
      if (nonCurrent.length > 0) {
        accountsReceivable += nonCurrent[0].value;
      }
      const current = balanceSheet.nonCurrentAssets.filter((p) => p.index === 'A00118');
      if (current.length > 0) {
        accountsReceivable += current[0].value;
      }
    }
    return accountsReceivable;
  };
  return (
    <div className="row">
      <div className="col-sm-1" />
      <div className="col-sm-10">
        <div className="row mtop-smaller">
          <div className="col-sm-1" />
          <div className="col-sm-2 smallBox no-padding centered">
            <h6>{profitLoss.sales ? profitLoss.sales.description : ''}</h6>
            <p>
              {profitLoss.sales
                ? numberWithSpaces(Math.abs(profitLoss.sales.value.toFixed(2)))
                : ''}
              {' '}
              €
            </p>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-2 smallBox no-padding centered">
            <h6>{profitLoss.cogs ? profitLoss.cogs.description : ''}</h6>
            <p>
              {profitLoss.cogs ? numberWithSpaces(Math.abs(profitLoss.cogs.value.toFixed(2))) : ''}
              {' '}
              €
            </p>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-2 smallBox no-padding centered">
            <h6>Contas a Receber</h6>
            <p>
              {numberWithSpaces(Math.abs(calculateAccountsReceivable()).toFixed(2))}
              {' '}
€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SalesInfo.propTypes = {
  balanceSheet: PropTypes.shape({
    nonCurrentAssets: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  profitLoss: PropTypes.shape({
    sales: PropTypes.shape({
      description: PropTypes.string,
      value: PropTypes.number,
    }),
    cogs: PropTypes.shape({
      description: PropTypes.string,
      value: PropTypes.number,
    }),
  }).isRequired,
};

export default SalesInfo;
