import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import { CardTitle } from 'reactstrap'
import CountBtn from '../components/CountBtn/CoutnBtn'
import './ItemSelector.css'
import {Button} from 'reactstrap'

function ItemSelector( item ,{setValorCarrito}) {

    const [compra, setCompra] = useState()
    const [cantidad, setCantidad] = useState()
              
    useEffect (()=>{        
        setCompra(item.item)        
    },[])
  
     
  return (
      <>
        <div className='itemSelectorDiv'>                       
           <ul className='listaSeleccionado'>
              <li><h2>Item Sleccionado</h2></li>
              <li>Item: {compra  && compra.title }</li> 
              <li>Precio: {compra && compra.price}</li>
              <li>Cantidad: {compra && compra.available_quantity}</li>
              <li> <CountBtn stock={compra && compra.available_quantity}  setValorCarrito={setValorCarrito} /></li>
              
           </ul>             
        </div>               
      </>
    
  )
}

export default ItemSelector



/**
 * 
 * 
 *  <p>Item: {compra.title}</p>   
      <p>Precio: {compra.price}</p>
      <p>Cantidad: {compra.available_quantity}</p>
 * 
 * 
 */