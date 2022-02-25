import React from 'react'

const fetchItem = ({setTv}) => {


    fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv')
    .then(response => {
      return response.json()
    })
    .then(res =>{
      console.log(res)
      setTv(res.results)
    })


  return (
    <div>fetchItem</div>
  )
}

export default fetchItem