import React, { Component } from 'react';
import './estilosCart.css'
import CounterBtn from '../CounterBtn/CounterBtn';
import { useEffect, useState } from 'react/cjs/react.development';


const CartWidget = (valorCarrito) => {
  
    var items = valorCarrito.valorCarrito.valorCarrito
         
    return (
       <>
            <span className='cartText'>{items}</span>
            <img src="/images/baseline_shopping_cart_black_24dp.png" alt='logoCart' className="cart"/>           
       </> 
    )

}
export default CartWidget


