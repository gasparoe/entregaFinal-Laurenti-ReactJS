import React, { useEffect, useState, useContext } from 'react'
import './ItemListContainer.css';
import ItemCard from '../ItemCard/ItemCard'
import { dataProductos } from "../../dataProductos";
import { useParams } from 'react-router-dom';
import { dataContext } from "../../context/DataContext";


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
    <div class="container text-center">
      <div class="row align-items-start">
        {productosFiltrados.map((value, index) => (
          <div class="col-lg-4 col-md-6">
            <ItemCard key={value.id} producto={value} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer