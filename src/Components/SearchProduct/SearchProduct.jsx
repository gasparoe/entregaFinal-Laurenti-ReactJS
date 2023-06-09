import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard'
import { dataContext } from "../../context/DataContext";

const SearchProduct = () => {

  const { data, obtainData } = useContext(dataContext);

  const { name } = useParams()

  let productos = [];
  let productosFiltrados = [];



  data.forEach((element) => {
    productos.push(element);
  });


  if (name !== undefined) {
    productosFiltrados = productos.filter(producto => producto.title.toLowerCase().includes(name))
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

export default SearchProduct