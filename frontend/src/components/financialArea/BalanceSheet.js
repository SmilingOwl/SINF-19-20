import React from 'react';
import propTypes from 'prop-types';

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
            <div className="col-sm-3 price">{`${element.value}€`}</div>
          </div>
        );
      });
    });
  }

  return (
    <>
      <div className="row">
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
              <div className="col-sm-3 price">{`${total_non_current_assets.value}€`}</div>
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
              <div className="col-sm-3 price">{`${total_current_assets.value}€`}</div>
            </div> :
            <div />
          }

          {
            total_assets ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><h5 className="value">{total_assets.description}</h5></div>
              <div className="col-sm-3 price">{`${total_assets.value}€`}</div>
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
              <div className="col-sm-3 price">{`${balanceSheet.total_equitity.value}€`}</div>
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
              <div className="col-sm-3 price">{`${total_non_current_liabilities.value}€`}</div>
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
              <div className="col-sm-3 price">{`${total_current_liabilities.value}€`}</div>
            </div> :
            <div />
          }

          {
            total_liabilities ?
            <div className="row mtop-smaller">
              <div className="col-sm-9"><h5 className="value">{total_liabilities.description}</h5></div>
              <div className="col-sm-3 price">{`${total_liabilities.value}€`}</div>
            </div> :
            <div />
          }
        </div>
      </div>
    </>
  );
  /*
  <Row>
        <Col md={{ size: '5', offset: 1 }} className="bigBox">
          <h5 className="value">Assets</h5>
          <BalanceSheet type="asset" balanceSheet={assets} />
        </Col>

        <Col md="5" className="bigBox">
          <h5 className="value">Liabilities</h5>
          <BalanceSheet type="liability" balanceSheet={liabilities} />
        </Col>
      </Row>

      <Row>
        <div className="col-md-1" />

        <TotalAssets totalAssets={totalAssets} />

        <TotalLiabilities totalLiabilities={totalLiabilities} />
        <div className="col-md-1" />
      </Row>

      <Row className="mbottom">
        <div className="col-md-1" />

        <Equity balanceSheet={balanceSheet} />
  */
};

BalanceSheet.propTypes = {
  balanceSheet: propTypes.shape({
    current_assets: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    non_current_assets: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    equitity: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    current_liabilities: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    non_current_liabilities: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    total_liabilities: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    total_assets: propTypes.arrayOf(
      propTypes.shape({
        index: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
      })
    ).isRequired,
    total_equitity: propTypes.shape({
      index: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default BalanceSheet;
