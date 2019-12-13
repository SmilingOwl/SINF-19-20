import React from 'react';
import { numberWithSpaces } from '../../common/Math';

const BalanceSheet = ({ balanceSheet }) => {
  const balanceSheetComponents = {
    non_current_assets: [],
    current_assets: [],
    equitity: [],
    non_current_liabilities: [],
    current_liabilities: [],
  };
  let total_non_current_assets = null;
  let total_current_assets = null;
  let total_assets = null;
  let total_current_liabilities = null;
  let total_non_current_liabilities = null;
  let total_liabilities = null;
  if(balanceSheet.non_current_assets){
    total_non_current_assets = balanceSheet.total_assets.filter(p => p.index === 'A00112')[0];
    total_current_assets = balanceSheet.total_assets.filter(p => p.index === 'A00125')[0];
    total_assets = balanceSheet.total_assets.filter(p => p.index === 'A00126')[0];
    total_current_liabilities = balanceSheet.total_liabilities.filter(p => p.index === 'A00157')[0];
    total_non_current_liabilities = balanceSheet.total_liabilities.filter(p => p.index === 'A00145')[0];
    total_liabilities = balanceSheet.total_liabilities.filter(p => p.index === 'A00158')[0];
    Object.keys(balanceSheetComponents).forEach((key, index) => {
      balanceSheet[key].forEach((element) => {
        balanceSheetComponents[key].push(
          <div className="row" key={element.index}>
            <div className="col-sm-2">
              <strong>{element.index}</strong>
            </div>
            <div className="col-sm-7">{element.description}</div>
            <div className="col-sm-3 price">{ `${numberWithSpaces(Math.abs(element.value.toFixed(2)))}€`}</div>
          </div>
        );
      });
    });
  }

  return (
    <>
      <div className="row mtop-smaller">
        <div className="col-sm-6 smallBox">
          <div className="row">
            <h5 className="value">Ativo</h5>
          </div>
          <div className="row">
            <h6 className="value">Ativo Não Corrente</h6>
          </div>
          <hr />
          <div>{balanceSheetComponents.non_current_assets}</div>
          {
            total_non_current_assets ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><strong>{total_non_current_assets.description}</strong></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(total_non_current_assets.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }

          <div className="row mtop">
            <h6 className="value">Ativo Corrente</h6>
          </div>
          <hr />
          <div>{balanceSheetComponents.current_assets}</div>
          {
            total_current_assets ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><strong>{total_current_assets.description}</strong></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(total_current_assets.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }

          {
            total_assets ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><h5 className="value">{total_assets.description}</h5></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(total_assets.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }
        </div>


        <div className="col-sm-6 smallBox">
          <div className="row">
            <h5 className="value">Capital Próprio</h5>
          </div>
          <hr />
          <div>{balanceSheetComponents.equitity}</div>
          {
            balanceSheet.total_equitity ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><strong>{balanceSheet.total_equitity.description}</strong></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(balanceSheet.total_equitity.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }

          <div className="row mtop">
            <h5 className="value">Passivo</h5>
          </div>
          <div className="row">
            <h6 className="value">Passivo Não Corrente</h6>
          </div>
          <hr />
          <div>{balanceSheetComponents.non_current_liabilities}</div>
          {
            total_non_current_liabilities ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><strong>{total_non_current_liabilities.description}</strong></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(total_non_current_liabilities.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }

          <div className="row mtop">
            <h6 className="value">Passivo Corrente</h6>
          </div>
          <hr />
          <div>{balanceSheetComponents.current_liabilities}</div>
          {
            total_current_liabilities ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><strong>{total_current_liabilities.description}</strong></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(total_current_liabilities.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }

          {
            total_liabilities ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><h5 className="value">{total_liabilities.description}</h5></div>
              <div className="col-sm-3 price">{`${numberWithSpaces(Math.abs(total_liabilities.value.toFixed(2)))}€`}</div>
            </div> :
            <div />
          }
        </div>
      </div>
    </>
  );
};

export default BalanceSheet;
