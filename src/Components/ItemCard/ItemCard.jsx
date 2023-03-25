import React from 'react'
import './ItemCard.css';
import { Link } from 'react-router-dom'

const ItemCard = ({ producto }) => {

  return (
    <div className="card border rounded m-3" >
      <img src={producto.image} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <h3 className="card-title">${producto.price}</h3>
        <Link to={`/item/${producto.id}`} className="btn btn-dark">Ver detalles</Link>
      </div>
    </div>
  )
}

export default ItemCard