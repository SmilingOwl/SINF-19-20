import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import '../css/product.css';

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

  componentWillMount() {
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
              <strong className="field-name">Description: </strong> { this.state.product.api.complementaryDescription }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);