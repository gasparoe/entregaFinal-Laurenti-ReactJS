import React from 'react'
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard'
import { dataProductos } from "../../dataProductos";
import { db } from "../../firebase";
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore'

const SearchProduct = () => {

  const orderCollection = collection(db,'items')

  const { name } = useParams()

  let productos = [];
  let productosFiltrados = [];

  const agregarproducto = () => {
    dataProductos.forEach((element) => {

      const item = {
        category: element.category,
        description: element.description,
        image: element.image,
        price: element.price,
        rating: element.rating,
        title: element.title
      }
      
      addDoc(orderCollection,item)
        
      
    })
  }

  dataProductos.forEach((element) => {
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
      <button style={{height:'50px', width:'100px'}} onClick={agregarproducto}></button>
    </div>
  )
}

export default SearchProduct