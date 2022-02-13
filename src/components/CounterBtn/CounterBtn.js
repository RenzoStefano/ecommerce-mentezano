import React, {useState} from 'react';
import './EstilosCounterBtn.css'
import CartWidget from '../ButtonCart/CartWidget';
import '../ButtonCart/estilosCart.css'

const CounterBtn = ({setValorCarrito}) => {

    const[count, setCount] = useState(0)       

    const [lista, setLista] = useState([])    

    const [camisasStock, setCamisasStock] = useState(10)
    const [mensaje, setMensaje] = useState("")

    
      const addItem = () =>{    
          if(camisasStock>= 1 && count >= 1 && count <= 10 && count<= camisasStock ){
            setLista([...lista, { id: lista.length, value: count}]) 
            setCamisasStock(camisasStock - count)                      
          }else{              
            setMensaje("No hay suficiente stock")
          }               
      }
      
      
      var cantidad = lista.length
    
    return(

        <div className='divBtnContador'>        
        
            <h2> Contador: </h2>
            <p>Camisas stock: {camisasStock}</p>
            <p>Mensaje: {mensaje}</p>
            <p>Numero de items: {count}</p>
            <p>Cantidad: {cantidad}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count -1)}>Decrementar</button>
            <button onClick={ setValorCarrito(cantidad),addItem  }>Agregar</button>
            
            <>
                <ul>
                    {
                    lista.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                    }
                </ul>
            </>
            
            
        </div>
    )
}

export default CounterBtn


//asdfas

//() => setValorCarrito(cantidad),