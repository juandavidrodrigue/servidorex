import React from 'react'
import { TextField } from  '@mui/material'
import { Button } from '@mui/material';


const OlvideClave = () => {
  return (
    <div className='olv'> 
      <b>Introduce tu dirección de correo electrónico de recuperación</b>
      <br></br>
    <TextField id="outlined-basic" label="correo" variant="outlined"/>
    <br></br>
    <br></br>
    <div> <Button variant="contained" color="success">
        enviar
      </Button></div>
    </div>

    
  )
}

export default OlvideClave