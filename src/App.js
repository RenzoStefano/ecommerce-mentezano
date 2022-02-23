import './App.css';
import Navbar from './components/Navbar/Navbar';
import CounterBtn from './components/CounterBtn/CounterBtn'
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/itemDetail/ItemDetail';
import fetchItem from './components/FetchItem/fetchItem';

function App() {

  
  const productos =[
    {id: 0 , name:'tv samsung', price: 'usd 550', category: 'tv', stock: 7, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hendel.com%2Fsmart-tv-43-samsung-t5300-negro.html&psig=AOvVaw3L7VrTxFdcoYslrCHJoroL&ust=1644878519817000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCekpHg_fUCFQAAAAAdAAAAABAF'},
    {id: 1 , name:'iphone 13', price: 'usd 700', category: 'celular',stock: 9, img:'https://www.google.com/aclk?sa=l&ai=DChcSEwiS95L44P31AhUDC5EKHfUJDoIYABAFGgJjZQ&sig=AOD64_38SRArpAj7eK-wluitb-IFaXZ9UA&adurl&ctype=5&ved=2ahUKEwiDzof44P31AhWsNbkGHag1AXsQvhd6BAgBEF8'},
    {id: 2 , name:'Ipad', price: 'usd 350', category: 'tablets', stock: 3, img:'https://www.google.com/aclk?sa=l&ai=DChcSEwjhyYGa4f31AhUXCJEKHb5wDesYABAHGgJjZQ&sig=AOD64_2ZKcfoW3hPShjYSyZ5cufjNy6Eqw&adurl&ctype=5&ved=2ahUKEwjY1fSZ4f31AhW0BtQKHc8iC1YQvhd6BAgBEHA'}
  ]


  const [valorCarrito, setValorCarrito] = useState(0)    
  const [prod, setProd] = useState([])
  const [item, setItem] = useState()

 //console.log(item.price)

  useEffect(()=>{      
   
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
    .then(response => {
      return response.json()
    })
    .then(res =>{
      //console.log(res)
      setProd(res.results)
    })
    

    //uso este funcion para devolver el array productos
    //setProd(productos)
  },[])

   
  return (
   <>
      <BrowserRouter>
          <Navbar valorCarrito={valorCarrito} /> 
          <Routes >
            <Route path='/'/>                
            <Route path='/detail' element={<CounterBtn setValorCarrito={setValorCarrito} prod = {prod} setItem={setItem} />}/>
            <Route path='/detail/:categoryId' element={<ItemDetail id={item} />}/>        
          </Routes>
          
      </BrowserRouter>    
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