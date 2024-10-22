import React, { useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import './Cart.css';

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);
    setTotal(Math.round(totalAmount));
  }, [cart]);

  return (
    <>
      <h1 className='heading'>Cart Products <span><MdOutlineProductionQuantityLimits /></span></h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.image} alt='image' />
            </div>
            <div className="detail">
              <h3>{product.name}</h3>
              <p>Rs: {parseInt(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='amt'>Total Amount: Rs {total}</h2>
    </>
  );
}
