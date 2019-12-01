import React, { Component } from 'react';
import '../css/home.css';

class Home extends Component
{
  constructor(props) {
    super(props);
    this.state = { companyInfo: "" };
  }

  componentWillMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    fetch("http://localhost:9000/company_info")
      .then(res => res.json())
      .then(res => {this.setState({ companyInfo: res });})
      .catch(err => err);
  }

  renderAddress() {
    let address = "";
    if(this.state.companyInfo.CompanyAddress != null) {
      address=
        <div>
          <div className="row">
            <div className="col-md-6">
              <p><strong className="field-name">Street: </strong> {this.state.companyInfo.CompanyAddress.StreetName}</p>
            </div>
            <div className="col-md-6 align-right">
              <p><strong className="field-name">Postal Code: </strong> {this.state.companyInfo.CompanyAddress.PostalCode}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p><strong className="field-name">City: </strong> {this.state.companyInfo.CompanyAddress.City}</p>
            </div>
            <div className="col-md-6 align-right">
              <p><strong className="field-name">Country: </strong> {this.state.companyInfo.CompanyAddress.Country}</p>
            </div>
          </div>
        </div>;
    }
    return address;
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-10">
            <h3 className="section-title">Company</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-8 smallBox">
            <div className="row">
              <div className="col-md-6">
                <strong className="field-name">Name: </strong>{ this.state.companyInfo.CompanyName }
              </div>
              <div className="col-md-6 align-right">
                <strong className="field-name">Company ID: </strong>{ this.state.companyInfo.CompanyID } 
              </div>
            </div>
            <hr></hr>
            {this.renderAddress()}
          </div>
        </div>
      </div>
    );
  }
}
  
export default Home;