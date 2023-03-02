import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import ItemCard from '../ItemCard/ItemCard'
import { dataProductos } from "../../dataProductos";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const {idCategoria} = useParams()

  console.log(idCategoria)

  let productos = [];
  let productosFiltrados = [];

  dataProductos.forEach((element) => {
    productos.push(element);
  });


  if (idCategoria !== undefined){
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