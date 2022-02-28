
import React from 'react'
import { useState , useEffect} from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'
import {Card, CardImg, CardText, CardTitle, Button} from 'reactstrap'
import './ItemDetail.css'
function ItemDetail({ item }) {

    console.log(item)


  return (
      <>
        <Card className='cardItem'>
          <CardTitle>{item.title}</CardTitle>
          <CardImg src={item.thumbnail} className='imgCard'/>
          <CardText>{item.currency_id}: {item.price}</CardText>
          <CardText>Categoria: {item.domain_id}</CardText>
          <CardText>Cantidad: {item.available_quantity}</CardText>
          <CardText>ID: {item.id}</CardText>

        </Card>
            
      </>
    
  )
}

export default ItemDetail


/*


        <span>{item.title}</span>
        <span>{item.price}</span>
        <img src={item.thumbnail}/>


<div className='card' style="width: 18rem;">
          <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <p className="card-text"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>       
*/