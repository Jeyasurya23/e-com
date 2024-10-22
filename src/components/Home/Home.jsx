import React, { useState } from 'react';
import data from "../assets/Products.json";
import { Product } from '../Product/Product';
import './Home.css';

export const Home = ({cart,setCart}) => {
    const [products]= useState(data);
  return (
    <div>
      <h1 className='title'>Products</h1>
    <div className="product-container">
        {products.map((product)=>(
           <Product key={product.id} product={product} cart={cart}
           setCart={setCart}/>
        )
        )}
    </div> <hr />
    </div> 
  )
}