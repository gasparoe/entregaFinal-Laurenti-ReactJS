import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = (props) => {



  console.log(props.products)

  return (
    <div class="itemListContainer">
      <h1>{props.products}</h1>
    </div>
  )
}

export default ItemListContainer