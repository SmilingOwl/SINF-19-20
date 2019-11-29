import React, { Component } from 'react';
class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = { supplier: "" };
  }

  componentWillMount() {

  }

  fetchInfo() {

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-10">
            <h3 className="section-title">Supplier</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 smallBox">
            <div className="row">
              <div className="col-md-4">
                <p><strong className="field-name">Name: </strong> ....</p>
              </div>
              <div className="col-md-4 align-right">
                <p><strong className="field-name">ID: </strong>....</p>
              </div>
              <div className="col-md-4 align-right">
                <p><strong className="field-name">Phone: </strong>....</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p><strong className="field-name">Email: </strong> ...</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p><strong className="field-name">Address: </strong> ...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <h3 className="section-title">Product Supplied</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th scope="col" className="centered">ID</th>
                  <th scope="col" className="centered">Product</th>
                  <th scope="col" className="centered">Units Bought</th>
                  <th scope="col" className="centered">Price per unit</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row mtop">
          <div className="col-md-2" />

          <div className="col-md-3 smallBox align-items-center d-flex">
            <div className="col-md-7">
              <strong>
                Total Spent
                  </strong>
            </div>
            <div className="col-md-5 price">
              Price
                </div>
          </div>

          <div className="col-md-2" />
          <div className="col-md-3 smallBox align-items-center d-flex">
            <div className="col-md-7">
              <strong>
                Accounts Receivable
                  </strong>
            </div>
            <div className="col-md-5 price">
              Price
                </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Supplier;