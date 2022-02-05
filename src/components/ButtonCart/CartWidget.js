import React, { Component } from 'react';



const CartWidget = (cantidad, imagen) => {

    return (
       <div>
            <img src={imagen} alt='logoCart'></img>
            <span>{cantidad = 10}</span>
       </div> 
           
       
    )

}
export default CartWidget