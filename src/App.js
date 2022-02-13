import './App.css';
import Navbar from './components/Navbar/Navbar';
import CounterBtn from './components/CounterBtn/CounterBtn'
import { useState, useEffect } from 'react';
function App() {

  
  const [valorCarrito, setValorCarrito] = useState(0)    
  
  


console.log(valorCarrito)
  



   
  return (
   <>
    <Navbar valorCarrito={valorCarrito} />
    <CounterBtn setValorCarrito={setValorCarrito}/>
    
    
    
   </>
  );
}

export default App;
/*

{
     lista.map((cantidad)=>{
       return <li >{cantidad}</li>
     })
    }

*/