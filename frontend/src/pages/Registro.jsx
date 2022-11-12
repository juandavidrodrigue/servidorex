import React from 'react'
import { TextField } from  '@mui/material';
import { Button } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
const Registro = () => {
  return ( 
    <div className='reg'>
      <div className='icn'>
        <PersonAddAlt1Icon  fontSize='large'></PersonAddAlt1Icon>
      </div>

      <div >
      <TextField id="outlined-basic" label="Nombre" variant="outlined"/>
      </div>
      <br></br>
      <div>
      <TextField id="outlined-basic" label="Apellido" variant="outlined"/>
      </div>
      <br></br>
      <div>
      <TextField id="outlined-basic" label="Telefono" variant="outlined"/>
      </div>
      <br></br>
      <div>
      <TextField id="outlined-basic" label="Correo" variant="outlined"/>
      </div>
      <br></br>
      <div>
      <TextField id="outlined-basic" label="Contraseña" variant="outlined"/>
      </div>
      <br></br>
      <div>
      <Button variant="contained" color="success"> registrar
      </Button>
      </div>

    </div>
    
    
  )
}

export default Registro