import React from 'react'
import './CartWidget.css';
import shoppingicon from './shopping-icon.png';
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';

const CartWidget = ({ cantidadCarrito }) => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));



    return (
        <div class="cartWidget">
            <Link to={'/carrito'}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cantidadCarrito} color="warning">
                    <LocalGroceryStoreTwoToneIcon color='warning' fontSize='large' />
                </StyledBadge>
            </IconButton>
            </Link>
            {/* <Link to={'/carrito'} ><img class="shopping_logo" src={shoppingicon}
                alt="shopping_icon" />
            </Link>
            <div class="cantidadCarrito">{cantidadCarrito}</div> */}
        </div>


    )
}

export default CartWidget