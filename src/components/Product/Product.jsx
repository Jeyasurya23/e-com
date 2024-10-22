import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import './Product.css';

export const Product = ({product,cart,setCart}) => {
    const name=product.name.length>21? product.name.substring(0,20)+"..." : product.name;

    const addCart =()=>{
       setCart([...cart,product])
    };
    const removeCart =()=>{
        setCart(cart.filter((c)=> c.id !== product.id ))
    };
    return (
    <div className="product">
        <div className="img">
        <img src={product.image} alt='image' />
        </div>
        <div className="detail">
        <h3>{name}</h3>
        <p>Price Rs:{product.price}</p>
        {cart.includes(product) ? (
        <button className='remove' onClick={removeCart}>Remove to Cart <span><IoCartOutline /></span></button>
        ) : (<button onClick={addCart}>Add to Cart <span><IoCartOutline /></span></button>)
        }     
        </div>
    </div>
  )
}