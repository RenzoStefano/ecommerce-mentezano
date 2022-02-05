import React, { Component } from 'react';
import './estilosCart.css'


const CartWidget = (cantidad) => {

    return (
       <>
            <span className='cartText'>{cantidad = 10}</span>
            <img src="/images/baseline_shopping_cart_black_24dp.png" alt='logoCart' className="cart"/>           
       </> 
           
       
    )

}
export default CartWidget