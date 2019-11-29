import React, { useState } from 'react';
import { useParams } from "react-router-dom";
//import '../css/product.css';

function Product() {

    const [product, setProduct] = useState("");
    let { id } = useParams();
    console.log(id);
    console.log(useParams());
    const [product_id, setId] = useState(id);
    

   
    fetch("http://localhost:9000/products/" + id)
        .then(res => res.json())
        .then(res => {
            setProduct(res.product);
        })
        .catch(err => err);

  
    return(
      <div>
        
      </div>
      );
}
  
export default Product;