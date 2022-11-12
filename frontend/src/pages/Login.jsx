import { NavLink } from 'react-router-dom';
import { TextField } from  '@mui/material'
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Login = () => {
  return (
    <div className='log'>
      <PersonIcon fontSize='large'></PersonIcon>

      <p>Iniciar sesion</p>

      <div>
      <TextField id="outlined-basic" label="Nombre" variant="outlined"/>
      </div> 
      <br></br>
      <div>
      <TextField id="outlined-basic" label="Contraseña" variant="outlined"/>
      </div>

      <br></br>

      <div className='butt'>
      <Button variant="contained" color="success">
        iniciar sesion
      </Button>

      <br></br>

      </div>

      <div>
        <NavLink to="/registro">
          Si no tinenes cuenta, registrate
        </NavLink>
      </div> 

      <div>
        <NavLink to="/olvide-clave">
          Olvide Clave
        </NavLink>
      </div>      

    </div>
  )
}

export default Login