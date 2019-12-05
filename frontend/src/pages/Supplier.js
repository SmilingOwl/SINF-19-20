import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Supplier extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      supplier: "",
      products_info:{},
    };
    this.id = this.props.match.params.id;
    console.log(this.id);
    console.log(this.props.match.params);
  }

  UNSAFE_componentWillMount() {
    this.fetchSuppliersInfo();
  }

  fetchSuppliersInfo() {
    fetch("http://localhost:9000/suppliers/" + this.id)
      .then(res => res.json())
      .then(res => {
        this.setState({supplier: res});
        this.fetchProductsInfo();
      })
  }

  fetchProductsInfo(){
    console.log(this.state.supplier.companyTaxID);
    fetch("http://localhost:9000/suppliers/"+ this.state.supplier.companyTaxID +"/products")
      .then(res => res.json())
      .then(res => {
        this.setState({products_info: res}); 
        console.log(this.state.products_info);       
      })
      .catch(err => err);
  }

  fillSuppliersTable() {
    let suppliersTable = [];
    let i = 1;
    if (!this.state.products_info)
      return [];
    for (var key in this.state.products_info.products) {
      suppliersTable.push(
        <tr className="table-row" key={key}>
          <th scope="row" className="centered">{i}</th>
          <td className="centered">{this.state.products_info.products[key].product}</td>
          <td className="centered">{this.state.products_info.products[key].unitsBought}</td>
          <td className="centered">{this.state.products_info.products[key].pricePerUnit}</td>
        </tr>
      );
      i++;
    }
    return suppliersTable;
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-10">
            <h3 className="section-title">Supplier {this.id} </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 smallBox">
            <div className="row">
              <div className="col-md-8">
                <p><strong className="field-name">Name: </strong> {this.state.supplier.name}</p>
              </div>
              <div className="col-md-4">
                <p><strong className="field-name">Company TaxID: </strong> {this.state.supplier.companyTaxID}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p><strong className="field-name">Email: </strong>{this.state.supplier.electronicMail}</p>
              </div>
              <div className="col-md-4">
                <p><strong className="field-name">Phone: </strong> {this.state.supplier.telephone}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-8">
                <p><strong className="field-name">Street name:  </strong> {this.state.supplier.streetName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p><strong className="field-name">Building Number:  </strong> {this.state.supplier.buildingNumber}</p>
              </div>
              <div className="col-md-4">
                <p><strong className="field-name">Postal Zone:  </strong> {this.state.supplier.postalZone} {this.state.supplier.cityName}</p>
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
                {this.fillSuppliersTable()}
              </tbody>
            </table>
          </div>
        </div>

        <div className="row mtop">
          <div className="col-md-2" />

          <div className="col-md-3 smallBox align-items-center d-flex">
            <div className="col-md-7">
              <strong>
                Total Units Bought
                  </strong>
            </div>
            <div className="col-md-5 price">
              {this.state.products_info?this.state.products_info.total_units:0 }
            </div>
          </div>

          <div className="col-md-2" />
          <div className="col-md-3 smallBox align-items-center d-flex">
            <div className="col-md-7">
              <strong>
                Total Spent
                  </strong>
            </div>
            <div className="col-md-5 price">
              {this.state.products_info?this.state.products_info.total_spent:0}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Supplier);