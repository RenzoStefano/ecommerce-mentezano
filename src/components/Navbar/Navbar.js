import React,{useState} from 'react';
import './estilosNavbar.css'
import CartWidget from '../ButtonCart/CartWidget';
import CounterBtn from '../CounterBtn/CounterBtn';
import { useEffect } from 'react/cjs/react.development';
import {Link} from 'react-router-dom'

const Navbar = (valorCarrito) => {

 


   // console.log("cantidad de items: " + valorCarrito.valorCarrito)
    

    return(
        <nav id="idNavbar">
            <div>
                <h2 id="idTitulo">
                    Mercado Free
                </h2>
            </div>
            <div id="idDivButton">
            <Link to={'/itemListContainer/tv'} className='btNav'>TV</Link>
            <Link to={'/itemListContainer/notebook'} className='btNav'>Notebook</Link>
            <Link to={'/itemListContainer/celular'} className='btNav'>Celulares</Link>
            <Link to={'/itemListContainer/tablet'} className='btNav'>Tablet</Link>
                
               <CartWidget valorCarrito ={valorCarrito}/>               
            </div>
            
        </nav>        
        
    )
}

export default Navbar