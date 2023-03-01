import React from 'react'
import './CartWidget.css';
import shoppingicon from './shopping-icon.png';

const CartWidget = () => {
    return (
        <div class="cartWidget">
            <a href="./index.html"><img class="shopping_logo" src={shoppingicon}
                alt="shopping_icon" />
            </a>
            <div class="cantidadCarrito">15</div>
        </div>


    )
}

export default CartWidget