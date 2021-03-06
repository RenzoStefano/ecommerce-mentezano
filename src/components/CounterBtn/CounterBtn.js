import React, {useState, useEffect} from 'react';
import './EstilosCounterBtn.css'
import '../ButtonCart/estilosCart.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'



const CounterBtn = ({setValorCarrito, prod, setItem}) => {

    const [producto, setProductos] = useState([])
    const [encontrado, setEcontrado] = useState()
    
    useEffect (() =>{
        setProductos(prod)
        getItems().then(producto =>{
            console.log(producto)
            setProductosGuardados(producto)           
        })
    }, [prod])    
    
    const getItems = () =>{
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(prod)
            }, 3000)
        })
    }

    const[count, setCount] = useState(0)       
    const [lista, setLista] = useState([])    
    const [stock, setStock] = useState(0)
    const [mensaje, setMensaje] = useState("")
    const [productosGuardados, setProductosGuardados] = useState([])
    



    const Decrementar = () =>{
        if(count >= 1){
            setCount(count -1)
        }
        
    }

    const Incrementar = () =>{
        if(count < stock){
            setCount(count +1)
        }
    }


        const addItem = () =>{    
            if(stock>= 1 && count >= 1 && count <= 10 && count<= stock ){
                setLista([...lista, { id: lista.length, value: count}]) 
                setStock(stock - count)                      
            }else{              
                setMensaje("No hay suficiente stock" )
            }               
        }
      
      
      var cantidad = lista.length
      

    
    const [elemtento, setElemento] = useState([])

    const seleccionarProducto= (id) =>{
                
        const found = productosGuardados.find(item => id === item.id )
       // console.log("info found:" + found.id)
        setStock(found.available_quantity)      
        setElemento(productosGuardados.find(item => id === item.id ))
       // console.log(elemtento)                 
        //setItem(found)
        setEcontrado(found)

        console.log(encontrado)
        //setItem(found)
    }
     
    var resultadoEncontrado = encontrado
    
    
    return(

        <div className='divBtnContador'>  

        <h1>Productos</h1>
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
                        <th className='table-secondary'>Detalle</th>
                    </thead>
                    <tbody>                        
                        {
                            
                            productosGuardados
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
                                        <button type="button" className="btn btn-primary" onClick={()=> seleccionarProducto(item.id)}>Seleccionar</button>
                                    </td>
                                    <td className='table-secondary'> <Link to={{pathname:`/detail/${item.id}`}} onClick={setItem(resultadoEncontrado)}>Detalle</Link></td> 
                                    
                                </tr>
                                
                                
                            })
                        }
                    </tbody>
                </table>               
            </>      
        
            <h2> Seleccion de items: </h2>
            <p>Stock {elemtento.title}  : {stock}</p>
            <p>Mensaje: <div className="alert alert-danger" role="alert"> {mensaje} para producto {elemtento.name}, cantidad de productos: {stock}</div></p>
            <p>Numero de items: {count}</p>
            <p>Cantidad: {cantidad}</p>
            <button type="button" class="btn btn-primary" onClick={Incrementar}>Incrementar</button>
            <button type="button" class="btn btn-danger" onClick={Decrementar}>Decrementar</button>
            <button type="button" class="btn btn-success" onClick={ setValorCarrito(cantidad),addItem  }>Agregar</button>
            
            <>
            <table className='table'>
                <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                </thead>
                <tbody>
                    
                         <tr>
                                <td className='table-success'>{elemtento.id}</td>
                                <td className='table-success'>{elemtento.title}</td>
                                <td className='table-success'>{elemtento.price}</td>
                                <td className='table-success'>{elemtento.domain_id}</td>
                                <td className='table-success'>{cantidad}</td>
                        </tr>
                       
                </tbody>
            </table>
            
           </>
          
            
        </div>
    )
}

export default CounterBtn



/*





[{id: item.id, nombre: item.title, precio:item.price, stock: item.available_quantity, imagen: item.thumbnail }]

  <ul>
                    {
                    lista.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                    }
                </ul>




 <table>
                <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                </thead>
                <tbody>
                    
                         <tr>
                                <td>{elemtento.id}</td>
                                <td>{elemtento.name}</td>
                                <td>{elemtento.price}</td>
                                <td>{elemtento.category}</td>
                                <td>{cantidad}</td>
                        </tr>
                       
                </tbody>
            </table>

 



           
            












            productosGuardados.map(item => {
                                return <tr key={item.id} className="table-info">
                                    <td className='table-secondary'>{item.id}</td> 
                                    <td className='table-secondary'>{item.name}</td>
                                    <td className='table-secondary'>{item.price}</td>
                                    <td className='table-secondary'>{item.category}</td>
                                    <td className='table-secondary'>{item.stock}</td>
                                    <td className='table-secondary'></td>
                                    <td className='table-secondary'>
                                        <button type="button" class="btn btn-primary" onClick={()=> seleccionarProducto(item.id)}>Seleccionar</button>
                                    </td>
                                </tr>
                            })

*/