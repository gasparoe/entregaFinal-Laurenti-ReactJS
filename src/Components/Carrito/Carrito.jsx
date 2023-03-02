import React from 'react'
import './Carrito.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'

const Carrito = ({ carrito, vaciar }) => {
    console.log(carrito)
    return (
        <div class="listaCarrito">
            <List sx={{ bgcolor: 'background.paper', marginY: '10px', marginX: '20px', borderRadius: '20px'}}>
                {carrito.map((value, index) => (
                    <div key={index} class="">
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={value.title} src={value.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={value.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {value.price} -
                                        </Typography>
                                        - {value.description}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>

                ))}
                
                
            </List>
                <button class="btn btn-danger" onClick={() => {vaciar()}}>Vaciar carrito</button>
                
        </div>

    )
}

export default Carrito