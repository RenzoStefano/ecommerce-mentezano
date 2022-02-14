import React, {useState, useEffect} from 'react';
import './EstilosCounterBtn.css'
import CartWidget from '../ButtonCart/CartWidget';
import '../ButtonCart/estilosCart.css'
import 'bootstrap/dist/css/bootstrap.css'


/*
const productos =[
    {id: 0 , name:'tv samsung', price: 'usd 550', category: 'tv', stock: 7, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hendel.com%2Fsmart-tv-43-samsung-t5300-negro.html&psig=AOvVaw3L7VrTxFdcoYslrCHJoroL&ust=1644878519817000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCekpHg_fUCFQAAAAAdAAAAABAF'},
    {id: 1 , name:'iphone 13', price: 'usd 700', category: 'celular',stock: 9, img:'https://www.google.com/aclk?sa=l&ai=DChcSEwiS95L44P31AhUDC5EKHfUJDoIYABAFGgJjZQ&sig=AOD64_38SRArpAj7eK-wluitb-IFaXZ9UA&adurl&ctype=5&ved=2ahUKEwiDzof44P31AhWsNbkGHag1AXsQvhd6BAgBEF8'},
    {id: 2 , name:'Ipad', price: 'usd 350', category: 'tablets', stock: 3, img:'https://www.google.com/aclk?sa=l&ai=DChcSEwjhyYGa4f31AhUXCJEKHb5wDesYABAHGgJjZQ&sig=AOD64_2ZKcfoW3hPShjYSyZ5cufjNy6Eqw&adurl&ctype=5&ved=2ahUKEwjY1fSZ4f31AhW0BtQKHc8iC1YQvhd6BAgBEHA'}

]
*/




const CounterBtn = ({setValorCarrito, prod}) => {

    const [producto, setProductos] = useState([])
    
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
        console.log("info found:" + found.id)
        setStock(found.stock)      
        setElemento(productosGuardados.find(item => id === item.id ))
        console.log(elemtento)                 
    }
     

    
    
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
                    </thead>
                    <tbody>
                        {
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
                        }
                    </tbody>
                </table>               
            </>      
        
            <h2> Seleccion de items: </h2>
            <p>Stock {elemtento.name}  : {stock}</p>
            <p>Mensaje: <div class="alert alert-danger" role="alert"> {mensaje} para producto {elemtento.name}, cantidad de productos: {stock}</div></p>
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
                                <td className='table-success'>{elemtento.name}</td>
                                <td className='table-success'>{elemtento.price}</td>
                                <td className='table-success'>{elemtento.category}</td>
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

 



               

*/