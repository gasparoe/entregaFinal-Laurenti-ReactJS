import React from 'react'
import './CartWidget.css';
import shoppingicon from './shopping-icon.png';
import { Link } from 'react-router-dom'

const CartWidget = ({cantidadCarrito}) => {
    return (
        <div class="cartWidget">
            <Link to={'/carrito'} ><img class="shopping_logo" src={shoppingicon}
                alt="shopping_icon" />
            </Link>
            <div class="cantidadCarrito">{cantidadCarrito}</div>
        </div>


    )
}

export default CartWidget