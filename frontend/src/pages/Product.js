import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import '../css/product.css';

class Product extends Component
{
  constructor(props) {
    super(props);
    this.state = {
        product: {
          api: {}
        }
    };
    this.id = this.props.match.params.id;
    console.log(this.id);
  }

  UNSAFE_componentWillMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    fetch("http://localhost:9000/products/" + this.id)
        .then(res => res.json())
        .then(res => {        
            this.setState({ product: res });
            console.log(res);
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
          data: this.state.product.chartInfo,
        },
      ]
    }
  }

  render(){
    return(
        <div>
        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-10">
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
                <strong className="field-name">Code: </strong> { this.state.product.ProductCode }
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
          <div className="col-md-3">
            <h3 className="section-title">Stock</h3>
          </div>
          <div className="col-md-2"/>
          <div className="col-md-3">
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
                ...
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
                ...
              </div>
            </div>  
            <div className="row">
              <div className="col-md-8">
                Total Earnings
              </div>
              <div className="col-md-4 price">
                ...
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-10">
            <h3 className="section-title">Sales Over Time</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-8 smallBox chart">
            <Line data={this.getLineChartData()} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);