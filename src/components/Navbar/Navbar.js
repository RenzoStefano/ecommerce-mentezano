import React from 'react';
import './estilosNavbar.css'
import CartWidget from '../ButtonCart/CartWidget';
import cart from '/src/images/black-24dp/2x/baseline_shopping_cart_black_24dp.png'

const Navbar = () => {

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
                <CartWidget imagen={cart} />                
            </div>
        </nav>        
        
    )
}

export default Navbar