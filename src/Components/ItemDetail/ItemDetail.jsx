import React from 'react'
import { dataProductos } from "../../dataProductos";
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { Rating } from '@mui/material'


 
const ItemDetail = ({agregar}) => {

    const { id } = useParams()


    let productos = [];
    let productosSeleccionado = [];

    dataProductos.forEach((element) => {
        productos.push(element);
    });

    productosSeleccionado = productos.filter(producto => producto.id === parseInt(id))


    return (
        <div>
            <div class="col-lg-12 p-4">
                <div class="card border rounded m-3" >
                    <img src={productosSeleccionado[0].image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title text-center">{productosSeleccionado[0].title}</h2>
                        <h3 class="card-title text-center">${productosSeleccionado[0].price}</h3>
                        <p class="card-text text-center p-0 m-0">{productosSeleccionado[0].description}</p>
                        {/* <Link to={`/item/${productosSeleccionado[0].id}`} class="btn btn-dark">Ver detalles</Link> */}
                        <div class="rating">
                        <Rating name="half-rating-read" defaultValue={parseFloat(productosSeleccionado[0].rating.rate)} precision={0.1} readOnly />
                        <h3>Rating: {productosSeleccionado[0].rating.rate}</h3>
                        <h4>Opiniones: {productosSeleccionado[0].rating.count}</h4>
                        </div>
                        <div class="rating">
                        <button class="btn btn-dark" onClick={() => {agregar(productosSeleccionado[0])}}>Agregar al carrito</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail