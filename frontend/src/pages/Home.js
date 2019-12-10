import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const res = await axios.get('http://localhost:9000/company_info');
      setCompanyInfo(res.data);
      console.log(res.data);
    };
    fetchCompanyInfo();
  }, []);

  return (
    <div>
      <div className="row mtop">
        <div className="col-md-2"/> 
        <div className="col-md-8 smallBox">
          <div className="row">
            <div className="col-md-8">
              <strong className="field-name">Company: </strong>{ companyInfo.companyKey }
            </div>
            <div className="col-md-4">
              <strong className="field-name">Company Tax ID: </strong>{ companyInfo.companyTaxID } 
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-8">
              <p><strong className="field-name">Street: </strong> { companyInfo.streetName}</p>
            </div>
            <div className="col-md-4">
              <p><strong className="field-name">Postal Code: </strong> { companyInfo.postalZone}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p><strong className="field-name">City: </strong> { companyInfo.cityName}</p>
            </div>
            <div className="col-md-4">
              <p><strong className="field-name">Country: </strong> { companyInfo.countryDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};
/*
  renderAddress() {
    let address = "";
    if(this.state.companyInfo.CompanyAddress != null) {
      address=
        <div>
          <div className="row">
            <div className="col-md-8">
              <p><strong className="field-name">Street: </strong> {this.state.companyInfo.CompanyAddress.StreetName}</p>
            </div>
            <div className="col-md-4">
              <p><strong className="field-name">Postal Code: </strong> {this.state.companyInfo.CompanyAddress.PostalCode}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p><strong className="field-name">City: </strong> {this.state.companyInfo.CompanyAddress.City}</p>
            </div>
          </div>
        </div>;
    }
    return address;
  }

  render(){
    return(
      <div>
        {/*<div className="row mtop">
          <div className="col-md-2"/> 
          <div className="col-md-8 smallBox">
            <div className="row">
              <div className="col-md-8">
                <strong className="field-name">Company: </strong>{ this.state.companyInfo.CompanyName }
              </div>
              <div className="col-md-4">
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
  */
export default Home;