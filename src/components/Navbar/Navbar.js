import React,{useState} from 'react';
import './estilosNavbar.css'
import CartWidget from '../ButtonCart/CartWidget';
import CounterBtn from '../CounterBtn/CounterBtn';
import { useEffect } from 'react/cjs/react.development';

const Navbar = (valorCarrito) => {

 


    console.log("cantidad de items: " + valorCarrito.valorCarrito)
    

    return(
        <nav id="idNavbar">
            <div>
                <h2 id="idTitulo">
                    Mercado Free
                </h2>
            </div>
            <div id="idDivButton">
                <button className='btNav'>TV</button>
                <button className='btNav'>Laptops</button>
                <button className='btNav'>Celulares</button>
                <button className='btNav'>Tablets</button>
               <CartWidget valorCarrito ={valorCarrito}/>               
            </div>
            
        </nav>        
        
    )
}

export default Navbar