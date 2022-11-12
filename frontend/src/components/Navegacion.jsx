import React from 'react'
import {NavLink} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ContactsIcon from '@mui/icons-material/Contacts';
import Button from '@mui/material/Button'
const Navegacion = () => {
  return (
    
  <div className='nave'>
    
    <div>
        
        <NavLink to='/'>
          <div className='nav_butt'>
            <HomeIcon iconm>Home</HomeIcon><Button variant="contained">Inicio</Button>
          </div>
        

        
        </NavLink>
    </div>

    <div>
      
      <NavLink to='/contactos'>
        <div className='nav_butt'>
        <ContactsIcon>Contacts</ContactsIcon> <Button variant="contained">Contactos</Button>
        </div>
      

      </NavLink>
    </div>

    <div>
        
        <NavLink to='/acerca-de'>
          <div className='nav_butt'>
        <PriorityHighIcon>Priority</PriorityHighIcon><Button variant="contained">Acerca de</Button>
          </div>
        </NavLink>
    </div>

    


  </div>


  )
}

export default Navegacion