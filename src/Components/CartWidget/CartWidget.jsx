import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
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
        <div className="cartWidget">
            <Link to={'/carrito'}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cantidadCarrito} color="warning">
                        <LocalGroceryStoreTwoToneIcon color='warning' fontSize='large' />
                    </StyledBadge>
                </IconButton>
            </Link>
        </div>


    )
}

export default CartWidget