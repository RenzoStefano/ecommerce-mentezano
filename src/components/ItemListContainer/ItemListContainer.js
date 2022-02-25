import React from 'react'
import {useState} from 'react'
import {useEffect} from "react"
import {Link} from 'react-router-dom'

function ItemListContainer( { elemento} ) {
    
    const [producto, setProductos] = useState([])
    const  [prodGuaradado, setProdGuardado] = useState([])

    useEffect (() =>{
        setProductos(elemento)
        getItems().then(producto =>{
            console.log(producto)
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
                                           <button type="button" className="btn btn-primary" >Seleccionar</button>
                                       </td>
                                       <td className='table-secondary'> <Link to={{pathname:`/detail/${item.id}`}}>Detalle</Link></td> 
                                       
                                   </tr>
                                   
                                   
                               })
                           }
                       </tbody>
                   </table>               
               </>      
           
            
    
  
  )
}


export default ItemListContainer