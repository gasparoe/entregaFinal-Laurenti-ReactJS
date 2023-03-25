import React, { useEffect, useState, useContext } from 'react'
import './ItemListContainer.css';
import ItemCard from '../ItemCard/ItemCard'

import { useParams } from 'react-router-dom';
import { dataContext } from "../../context/DataContext";
import Loading from '../Loading/Loading';


const ItemListContainer = () => {

  const { data, obtainData } = useContext(dataContext);

  const { idCategoria } = useParams()

  let productos = [];
  let productosFiltrados = [];

  data.forEach((element) => {
    productos.push(element);
  });

  console.log(data)
  console.log(obtainData)

  if (idCategoria !== undefined) {
    productosFiltrados = productos.filter(producto => producto.category === idCategoria)
  } else {
    productosFiltrados = productos
  }


  return (
    obtainData === false ?
    <div className="container text-center">
      <div className="row align-items-start">
        {productosFiltrados.map((value, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <ItemCard key={value.id} producto={value} />
          </div>
        ))}
      </div>
    </div>
    :
    <Loading/>
  )
}

export default ItemListContainer