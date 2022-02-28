import React from 'react'
import {useState} from 'react'
import {useEffect} from "react"
import {Link} from 'react-router-dom'
import ItemSelector from '../../ItemSelector/ItemSelector'
import {Button} from 'reactstrap'
import './ItemListContainer.css'
function ItemListContainer( { elemento, setItem, setItemCarrito,setValorCarrito}) {
    
    const [producto, setProductos] = useState([])
    const  [prodGuaradado, setProdGuardado] = useState([])
    const [econtrado, setEcontrado] = useState()
    const [seleccionado, setItemSeleccionado] = useState([])

    useEffect (() =>{
        setProductos(elemento)
        getItems().then(producto =>{           
            setProdGuardado(producto)           
        })        
    }, [elemento])    
    
    const getItems = () =>{
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(elemento)
            }, 3000)
        })
    }

    const findProdSeleccionado = (id) =>{
        var resultado = prodGuaradado.find(itemBusc => id === itemBusc.id)               
        setItem(resultado)
        setEcontrado(resultado)       
    }
    const findProdComprar = (id) =>{
        var resultado = prodGuaradado.find(itemBusc => id === itemBusc.id)                       
        setEcontrado(resultado)       
        setItemCarrito(resultado)
    }

  return (   
    <>    
                       <table className=' table'  >
                       <thead>
                           <th className='table-secondary'>ID</th>
                           <th className='table-secondary'>Nombre</th>
                           <th className='table-secondary'>Precio</th>
                           <th className='table-secondary'>Categoria</th>
                           <th className='table-secondary'>Stock</th>
                           <th className='table-secondary'>Imagen</th>
                           <th className='table-secondary'>Seleccionar</th>
                           <th className='table-secondary'> Detalle</th>                           
                       </thead>
                       <tbody>                        
                           {                               
                               prodGuaradado
                               .slice(0, 5)
                               .map(item => {                                   
                                       return <tr key={item.id} className="table-info">
                                       <td className='table-secondary'>{item.id}</td> 
                                       <td className='table-secondary'>{item.title}</td>
                                       <td className='table-secondary'>{item.currency_id} {item.price}</td>
                                       <td className='table-secondary'>{item.domain_id}</td>
                                       <td className='table-secondary'>{item.available_quantity}</td>
                                       <td className='table-secondary'><img className="imgFetch" src={item.thumbnail}/></td>
                                       <td className='table-secondary'>
                                           <button type="button" className="btn btn-primary" onClick={()=> findProdComprar(item.id)} >Seleccionar</button>
                                       </td>
                                       <td className='table-secondary'> <Link to={`/detail/${item.id}`} onClick={()=>findProdSeleccionado(item.id)}>Detalle</Link></td> 
                                       
                                   </tr>                                                                     
                               })
                           }
                       </tbody>
                   </table>    


        
        {econtrado && <ItemSelector item={econtrado} setValorCarrito={setValorCarrito} />}
        <div className='buttonAgregar'>
        {econtrado && <Button  onClick={setItemCarrito(econtrado)}>Agregar</Button>}
        </div>
        
                          
     </>      
  )
}


export default ItemListContainer





/**
 * 
 * 
 *  <Link to={{pathname:`/detail/${item.id}`}}>Detalle</Link>
 */