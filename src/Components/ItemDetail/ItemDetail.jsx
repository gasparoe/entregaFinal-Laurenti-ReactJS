import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { Rating } from '@mui/material'
import { dataContext } from "../../context/DataContext";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



const ItemDetail = () => {

    const { data, obtainData, agregarCarrito } = useContext(dataContext);

    const { id } = useParams()

    const [cantidad, setCantidad] = useState(1)

    let productos = [];
    let productosSeleccionado = [];

    data.forEach((element) => {
        productos.push(element);
    });

    productosSeleccionado = productos.filter(producto => producto.id === id)

    return (
        productosSeleccionado.length !== 0 ?
            <div>
                <div className="col-lg-12 p-4">
                    <div className="card border rounded m-3" >
                        <img src={productosSeleccionado[0].image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center">{productosSeleccionado[0].title}</h2>
                            <h3 className="card-title text-center">${productosSeleccionado[0].price}</h3>
                            <p className="card-text text-center p-0 m-0">{productosSeleccionado[0].description}</p>
                            <div className="rating">
                                <Rating name="half-rating-read" defaultValue={parseFloat(productosSeleccionado[0].rating.rate)} precision={0.1} readOnly />
                                <h3>Rating: {productosSeleccionado[0].rating.rate}</h3>
                                <h4>Opiniones: {productosSeleccionado[0].rating.count}</h4>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <TextField
                                    autoFocus
                                    defaultValue={1}
                                    onChange={(event) => {
                                        setCantidad(parseInt(event.target.value));
                                    }}
                                    margin="dense"
                                    id="cantidad"
                                    label="Cantidad"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    style={{ width: '100px' }}
                                />
                            </div>

                            <div className="rating">
                                <button className="btn btn-success" onClick={() => { agregarCarrito(productosSeleccionado[0], cantidad) }}>Agregar al carrito</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            : <div style={{ textAlign: 'center', padding: '100px' }}>
                <ErrorOutlineIcon fontSize='large' color='error' />
                <Typography style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px', color: 'white' }}
                    variant="body1"

                >
                    No existe el producto
                </Typography>

            </div>

    )
}

export default ItemDetail