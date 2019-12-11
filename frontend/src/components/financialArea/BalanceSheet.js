import React from 'react';
import propTypes from 'prop-types';

const BalanceSheet = ({ balanceSheet }) => {
  /*balanceSheet.forEach((element) => {
    if(element.type === 'current_assets')
  });
    /*if (element.type === type && element.credit + element.debit > 0) {
      elements.push(
        <div className="row" key={element.index}>
          <div className="col-sm-1">
            <strong>{element.index}</strong>
          </div>
          <div className="col-sm-5">{element.description}</div>
          <div className="col-sm-3 price">{`${element.value}€`}</div>
        </div>,
      );
    }*/

  return (
    <>
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-5 smallBox">
          <div className="row">
            <h5 className="value">Assets</h5>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <strong>ID</strong>
            </div>
            <div className="col-sm-7">Description</div>
            <div className="col-sm-3 price">value</div>
          </div>
          {' '}
          <hr />
          <div className="row">
            <h6 className="value">Non Current Assets</h6>
          </div>
          <div>{elements}</div>
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
  balanceSheet: propTypes.arrayOf(
    propTypes.shape({
      index: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      value: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BalanceSheet;
