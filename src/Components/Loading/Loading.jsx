import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const Loading = () => {
  return (

    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <CircularProgress size={80} style={{ color: '#FF3E00' }} />

    </div>
  )
}

export default Loading