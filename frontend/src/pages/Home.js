import React, { Component } from 'react';

class Overview extends Component
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
      .then(res => this.setState({ companyInfo: res }))
      .catch(err => err);
  }

  render(){
    return(
      <h1>Company ID: { this.state.companyInfo.CompanyID }</h1> 
    );
  }
}
  
export default Overview;