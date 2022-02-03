import React from 'react';
import './estilosNavbar.css'

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
            </div>
        </nav>        
        
    )
}

export default Navbar