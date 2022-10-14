import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from '../components/Logout';
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {

  // Hent "user" - for at se om der er logget ind
  const { user, signOut } = useContext( LoginContext );

  return (
    <nav className='Navbar'>
      <ul>
        {/* end tilføjet for at ungå at Home er .aktiv konstant */ }
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="kontakt">Kontakt</NavLink></li>
        <li><NavLink to="omos">Om os</NavLink></li>
        {
          //  Hvis der er en bruger i "global state/context"
          user ?
            <>
              <li><NavLink to="admin">ADMIN</NavLink></li>
              <li><Logout /></li>
            </>
            :
            <>
              <li><NavLink to="login">Login</NavLink></li>
            </>
        }
      </ul>
    </nav>
  )
}

export default Navbar