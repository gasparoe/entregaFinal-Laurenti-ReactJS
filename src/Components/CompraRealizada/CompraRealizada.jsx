import React from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CompraRealizada = () => {
  
  
    const { idCompra } = useParams()
  
    return (

    

        <div style={{textAlign:'center', padding:'100px'}}>
        <CheckCircleOutlineIcon fontSize='large' color='success' />
        <Typography style={{ fontSize: '18px', fontWeight: 'bold', padding:'10px', color:'white' }}
                variant="body1"
                
            >
               ¡Compra realizada con exito!
            </Typography>
            <Typography style={{ fontSize: '14px', fontWeight: 'bold', padding:'10px', color:'white' }}
                variant="body2"
                
            >
               El ID de su compra es: {idCompra}
            </Typography>
    
    </div>
  )
}

export default CompraRealizada