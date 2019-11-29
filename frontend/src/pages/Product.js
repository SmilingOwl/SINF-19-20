import React, { useState } from 'react';
import { useParams } from "react-router-dom";
//import '../css/product.css';

function Product() {

    let product;
    let desc = "";
    let code = "";
    let n_code = "";
    let { id } = useParams();
    console.log(id);
    console.log(useParams());

   
    fetch("http://localhost:9000/products/" + id)
        .then(res => res.json())
        .then(res => {
            product = res.product;
            desc = product.ProductDescription;
            code = product.ProductCode;
            n_code = product.ProductNumberCode;
        })
        .catch(err => err);

  
    return(
        <div>
        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-10">
            <h3 className="section-title">Product { id }</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-8 smallBox">
            <div className="row">
              <div className="col-md-6">
                <strong className="field-name">Name: </strong> { desc }
              </div>
              <div className="col-md-2">
                <strong className="field-name">Product Code: </strong> { code }
              </div>
              <div className="col-md-4 align-right">
                <strong className="field-name">Product Numeric Code: </strong> { n_code }
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
      );
}

function showInfo() {

}

export default Product;