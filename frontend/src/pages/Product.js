import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SalesGraph from '../components/financialArea/SalesGraph';

class Product extends Component
{
  constructor(props) {
    super(props);
    this.state = {
        product: {
          api: {}
        },
        sales_info: ""
    };
    this.id = this.props.match.params.id;
  }

  UNSAFE_componentWillMount() {
    this.fetchProduct();
    this.fetchProductSalesInfo();
    this.fetchProductChart();
  }

  fetchProduct() {
    fetch("http://localhost:9000/products/" + this.id)
        .then(res => res.json())
        .then(res => {        
            this.setState({ product: res });
        })
        .catch(err => err);
  }

  fetchProductSalesInfo() {
    fetch("http://localhost:9000/products/" + this.id + "/sales")
        .then(res => res.json())
        .then(res => {        
            this.setState({ sales_info: res });
        })
        .catch(err => err);
  }

  fetchProductChart() {
    fetch("http://localhost:9000/products/" + this.id + "/chart")
        .then(res => res.json())
        .then(res => {        
            this.setState({ chartInfo: res });
        })
        .catch(err => err);
  }

  getLineChartData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Quantity of Sales',
          borderColor: '#588DA3',
          data: this.state.chartInfo,
        },
      ]
    }
  }

  render(){
    return(
        <div>
        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-8 zero_padding">
            <h3 className="section-title">Product { this.id }</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-8 smallBox">
            <div className="row">
              <div className="col-md-5">
                <strong className="field-name">Name: </strong> { this.state.product.api.description }
              </div>
              <div className="col-md-3">
                <strong className="field-name">Code: </strong> { this.id }
              </div>
              <div className="col-md-4 align-right">
                <strong className="field-name">Barcode: </strong> { this.state.product.api.barcode }
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-md-12">
                <strong className="field-name">Description: </strong> { this.state.product.api.complementaryDescription }
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-3 zero_padding">
            <h3 className="section-title">Stock</h3>
          </div>
          <div className="col-md-2"/>
          <div className="col-md-3 zero_padding">
            <h3 className="section-title">Sales</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-3 smallBox boxPadding">
            <div className="row">
              <div className="col-md-8">
                Quantity Sold
              </div>
              <div className="col-md-4 price">
                {this.state.sales_info ? this.state.sales_info.quantity_sold : 0}
              </div>
            </div>  
            <div className="row">
              <div className="col-md-8">
                Quantity In stock
              </div>
              <div className="col-md-4 price">
                ...
              </div>
            </div>
          </div>
          <div className="col-md-2"/>
          <div className="col-md-3 smallBox boxPadding">
            <div className="row">
              <div className="col-md-8">
                Average Price Per Unit
              </div>
              <div className="col-md-4 price">
                {this.state.sales_info ? (this.state.sales_info.total_price / this.state.sales_info.quantity_sold).toFixed(2) : 0.00} {'\u20AC'}
              </div>
            </div>  
            <div className="row">
              <div className="col-md-8">
                Total Earnings
              </div>
              <div className="col-md-4 price">
                {this.state.sales_info ? this.state.sales_info.total_price.toFixed(2) : 0.00} {'\u20AC'}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-8 zero_padding">
            <h3 className="section-title">Sales Over Time</h3>
          </div>
          <div className="col-md-2"/>
        </div>
        <SalesGraph elements={this.state.product.chartInfo} />
      </div>
    );
  }
}

export default withRouter(Product);