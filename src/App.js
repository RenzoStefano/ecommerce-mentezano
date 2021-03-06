import './App.css';
import Navbar from './components/Navbar/Navbar';
import CounterBtn from './components/CounterBtn/CounterBtn'
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/itemDetail/ItemDetail';
import fetchItem from './components/FetchItem/fetchItem';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  
  const productos =[
    {id: 0 , name:'tv samsung', price: 'usd 550', category: 'tv', stock: 7, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hendel.com%2Fsmart-tv-43-samsung-t5300-negro.html&psig=AOvVaw3L7VrTxFdcoYslrCHJoroL&ust=1644878519817000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCekpHg_fUCFQAAAAAdAAAAABAF'},
    {id: 1 , name:'iphone 13', price: 'usd 700', category: 'celular',stock: 9, img:'https://www.google.com/aclk?sa=l&ai=DChcSEwiS95L44P31AhUDC5EKHfUJDoIYABAFGgJjZQ&sig=AOD64_38SRArpAj7eK-wluitb-IFaXZ9UA&adurl&ctype=5&ved=2ahUKEwiDzof44P31AhWsNbkGHag1AXsQvhd6BAgBEF8'},
    {id: 2 , name:'Ipad', price: 'usd 350', category: 'tablets', stock: 3, img:'https://www.google.com/aclk?sa=l&ai=DChcSEwjhyYGa4f31AhUXCJEKHb5wDesYABAHGgJjZQ&sig=AOD64_2ZKcfoW3hPShjYSyZ5cufjNy6Eqw&adurl&ctype=5&ved=2ahUKEwjY1fSZ4f31AhW0BtQKHc8iC1YQvhd6BAgBEHA'}
  ]


  const [valorCarrito, setValorCarrito] = useState(0)  

  const [prod, setProd] = useState([])
  const [tv, setTv] = useState([])
  const [notebook, setNotebook] = useState([])
  const [tablet, setTablet] = useState([])

  const [item, setItem] = useState()

  const [itemCarrito,setItemCarrito] = useState([])
  

  useEffect(()=>{      

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=tablet')
    .then(response => {
      return response.json()
    })
    .then(restablet =>{
      //console.log(res)
      setTablet(restablet.results)
    })

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=notebook')
    .then(response => {
      return response.json()
    })
    .then(resnotebook =>{
      //console.log(res)
      setNotebook(resnotebook.results)
    })
   
    
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv')
    .then(response => {
      return response.json()
    })
    .then(restv =>{
      //console.log(res)
      setTv(restv.results)
    })


    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
    .then(response => {
      return response.json()
    })
    .then(res =>{
     // console.log(res)
      setProd(res.results)
    })      
  },[])

 console.log(itemCarrito)
   
  return (
   <>
      <BrowserRouter>
          <Navbar valorCarrito={valorCarrito} /> 
          
          <Routes >
            <Route path='/'/> 
            <Route path='/detail/:porductId' element={<ItemDetail item={item} />} />
            <Route path='/itemListContainer/tablet' element={<ItemListContainer elemento={tablet} setItem={setItem} setValorCarrito={setItemCarrito}/>}/>
            <Route path='/itemListContainer/notebook' element={<ItemListContainer elemento={notebook} setItem={setItem} setValorCarrito={setItemCarrito}/>}/>
            <Route path='/itemListContainer/tv' element={<ItemListContainer elemento={tv} setItem={setItem} setValorCarrito={setItemCarrito}/> } />
            <Route path="/itemListContainer/celular"  element={<ItemListContainer elemento={prod} setItem={setItem} setItemCarrito={setItemCarrito}  setValorCarrito={setValorCarrito}/> } />
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




<Route path='/detail' element={<CounterBtn setValorCarrito={setValorCarrito} prod = {prod} setItem={setItem} />}/>
            <Route path='/detail/:categoryId' element={<ItemDetail id={item} />}/>        



*/