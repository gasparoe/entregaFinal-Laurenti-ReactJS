import React from 'react'
import './ItemCard.css';
import { Link } from 'react-router-dom' 

const ItemCard = ({ producto }) => {

  console.log(producto)

  return (
    <div class="card border rounded m-3" >
      <img src={producto.image} class="card-img-top " alt="..."  />
      <div class="card-body">
        <h5 class="card-title">{producto.title}</h5>
        <h3 class="card-title">${producto.price}</h3>
        {/* <p class="card-text">{producto.description}</p> */}
        <Link to={`/item/${producto.id}`} class="btn btn-dark">Ver detalles</Link>
      </div>
    </div>
  )
}

export default ItemCard