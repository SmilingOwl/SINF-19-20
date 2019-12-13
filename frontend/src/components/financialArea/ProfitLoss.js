import React from 'react';
import { numberWithSpaces } from '../../common/Math';

const ProfitLoss = ({profitLoss}) => {
    return (
        <>
          <div className="row mtop-smaller">
            <div className="col-sm-1" />
            <div className="col-sm-2 smallBox no-padding centered">
              <h6>{profitLoss.sales ? profitLoss.sales.description : ''}</h6>
              <p>{profitLoss.sales ? numberWithSpaces(Math.abs(profitLoss.sales.value.toFixed(2))) : ''} €</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2 smallBox no-padding centered">
              <h6>{profitLoss.cogs ? profitLoss.cogs.description : ''}</h6>
              <p>{profitLoss.cogs ? numberWithSpaces(Math.abs(profitLoss.cogs.value.toFixed(2))) : ''} €</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2 smallBox no-padding centered">
              <h6>{profitLoss.ebitda ? profitLoss.ebitda.description : ''}</h6>
              <p>{profitLoss.ebitda ? numberWithSpaces(Math.abs(profitLoss.ebitda.value.toFixed(2))) : ''} €</p>
            </div>
          </div>
          <div className="row mtop-smaller">
            <div className="col-sm-1" />
            <div className="col-sm-2 smallBox no-padding centered">
              <h6>{profitLoss.ebit ? profitLoss.ebit.description : ''}</h6>
              <p>{profitLoss.ebit ? numberWithSpaces(Math.abs(profitLoss.ebit.value.toFixed(2))) : ''} €</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2 smallBox no-padding centered">
              <h6>{profitLoss.ebt ? profitLoss.ebt.description : ''}</h6>
              <p>{profitLoss.ebt ? numberWithSpaces(Math.abs(profitLoss.ebt.value.toFixed(2))) : ''} €</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2 smallBox no-padding centered">
              <h6>{profitLoss.net_profit ? profitLoss.net_profit.description : ''}</h6>
              <p>{profitLoss.net_profit ? numberWithSpaces(Math.abs(profitLoss.net_profit.value.toFixed(2))) : ''} €</p>
            </div>
          </div>
        </>
      );
};

export default ProfitLoss;