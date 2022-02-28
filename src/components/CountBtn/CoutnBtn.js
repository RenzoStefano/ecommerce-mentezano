import React from 'react'
import {useState} from 'react'
import {Button} from 'reactstrap'
import {Component} from 'react'

const CoutnBtn = (stock ,{setValorCarrito}) => {

    console.log(stock.stock)

    const[count, setCount] = useState(1)  

    const Decrementar = () =>{
        if(count >= 1){
            setCount(count -1)
            console.log(count)
        }
        
    }

    const Incrementar = () =>{
        if(count < stock.stock){
            setCount(count +1)
            console.log(count)
        }
    }

    
    const guardarCantidad = () =>{
        console.log("cantidad en boton: " + count)
        //setCantidad(count)
    }
    
  return (
    <>
        <Button onClick={Incrementar} >+</Button>
        <Button onClick={Decrementar} >-</Button>
        <Button onClick={setValorCarrito(count)} >Guardar</Button>
        <div>
            seleccionado: {count}   
        </div>
    </>
  )
}

export default CoutnBtn


/*
const CoutnBtn = (stock ,{setValorCarrito}) => {

    console.log(stock.stock)

    const[count, setCount] = useState(1)  

    const Decrementar = () =>{
        if(count >= 1){
            setCount(count -1)
            console.log(count)
        }
        
    }

    const Incrementar = () =>{
        if(count < stock.stock){
            setCount(count +1)
            console.log(count)
        }
    }

    
    const guardarCantidad = () =>{
        console.log("cantidad en boton: " + count)
        setCantidad(count)
    }
    
  return (
    <>
        <Button onClick={Incrementar} >+</Button>
        <Button onClick={Decrementar} >-</Button>
        <Button onClick={setValorCarrito(count)} >Guardar</Button>
        <div>
            seleccionado: {count}   
        </div>
    </>
  )
}

export default CoutnBtn







<Button onClick={setValorCarrito(count)} >Guardar</Button>
*/

/**
 * 
 * 
 * 
 * 
 * 
 * class CoutnBtn extends Component{
    constructor(props, stock){
        super(props)
        this.state = { count: 0}
    }
     Decrementar = () =>{
        if(this.state.count >= 1){
            this.setState({
                count: this.state.count -1
            })
        }        
    }


    Incrementar = () =>{
        if(this.state.count < this.state.stock){
            this.setState({

            })
            //setCount(count +1)
            //console.log(count)
        }
    }


    render(){
        return(
        <>
            <Button onClick={this.Incrementar} >+</Button>
            <Button onClick={this.Decrementar} >-</Button>
            
            <div>
                seleccionado: {this.state.count}   
            </div>
        </>
    
        )
}
}
export default CoutnBtn
 */