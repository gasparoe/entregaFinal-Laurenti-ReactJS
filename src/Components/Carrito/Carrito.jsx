import React, { useContext, useState } from 'react'
import './Carrito.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import { dataContext } from "../../context/DataContext";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { db } from "../../firebase";
import { collection, docs, getDocs, addDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom';


const Carrito = () => {

    const navigate = useNavigate();

    const ordersCollection = collection(db, 'orders')

    const [open, setOpen] = useState(false)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const { carrito, vaciarCarrito, eliminarProducto } = useContext(dataContext);
    let total = 0

    carrito.forEach(element => {
        total = total + (element.cantidad * element.price)
    });


    const realizarCompra= () => {

        const orden = {
            comprador: {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email
            },
            items: carrito,
            total: total
        }

        if( nombre !== '' && apellido !== '' && telefono !== '' && email !== '' && email === email2){
            addDoc(ordersCollection, orden)
            .then((docRef) => {
                console.log('id de la orden', docRef.id)
                handleClose()
                vaciarCarrito()
                navigate(`/compraRealizada/${docRef.id}`)          
            })    
        }


    };


    return (
        <div className="listaCarrito">
            <List sx={{ bgcolor: 'background.paper', marginY: '10px', marginX: '20px', borderRadius: '20px' }}>
                {carrito.map((value, index) => (
                    <div key={index} className="">
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
                                            {value.description}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}
                            variant="body1"
                            color="text.primary"
                        >
                            {value.cantidad} Unidades - ${value.price * value.cantidad}
                        </Typography>
                        <button className="btn btn-danger m-2" onClick={() => { eliminarProducto(value.id) }}>Eliminar Producto</button>
                        <Divider variant="inset" component="li" />
                    </div>

                ))}

                <Typography style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px' }}
                    variant="body1"
                    color="text.primary"
                >
                    {total !== 0 ? `Total = ${total}` : `El carrito esta vacio`}
                </Typography>
            </List>
            <button className="btn btn-danger m-2" onClick={() => { vaciarCarrito() }}>Vaciar carrito</button>
            <button className="btn btn-success m-2" onClick={() => { handleClickOpen() }}>Realizar orden</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle textAlign="center">Detalle de compra</DialogTitle>
                <DialogContent>
                    <List sx={{ bgcolor: 'background.paper', marginY: '10px', marginX: '20px', borderRadius: '20px', textAlign:'center' }}>
                {carrito.map((value, index) => (
                    <div key={index} className="">
                        <ListItem alignItems="flex-center">
                            <ListItemAvatar>
                                <Avatar alt={value.title} src={value.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={value.title}
                            />
                        </ListItem>
                        <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}
                            variant="body1"
                            color="text.primary"
                        >
                            {value.cantidad} Unidades - ${value.price * value.cantidad}
                        </Typography>
                        <Divider variant="inset" component="li" />
                    </div>

                ))}

                <Typography style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px' }}
                    variant="body1"
                    color="text.primary"
                >
                    {total !== 0 ? `Total = ${total}` : `La orden esta vacia`}
                </Typography>
            </List>
            <DialogContentText style={{textAlign:'center'}}>
                        Complete sus datos personales
                    </DialogContentText>
                    <TextField
                        autoFocus
                        onChange={(event) => {
                            setNombre(event.target.value);
                        }}
                        margin="dense"
                        id="nombre"
                        label="Nombre"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={nombre === '' ? true : false}
                    />
                    <TextField
                        autoFocus
                        onChange={(event) => {
                            setApellido(event.target.value);
                        }}
                        margin="dense"
                        id="apellido"
                        label="Apellido"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={apellido === '' ? true : false}
                    />
                    <TextField
                        autoFocus
                        onChange={(event) => {
                            setTelefono(event.target.value);
                        }}
                        margin="dense"
                        id="telefono"
                        label="Telefono"
                        type="number"
                        fullWidth
                        variant="standard"
                        error={telefono === '' ? true : false}
                    />
                     <TextField
                        autoFocus
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        error={(email === email2 && email !== '') ? false : true}
                    />
                    <TextField
                        autoFocus
                        onChange={(event) => {
                            setEmail2(event.target.value);
                        }}
                        margin="dense"
                        id="confirmaremail"
                        label="Confirmar Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        error={(email === email2 && email2 !== '') ? false : true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={realizarCompra}>Realizar compra</Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}

export default Carrito