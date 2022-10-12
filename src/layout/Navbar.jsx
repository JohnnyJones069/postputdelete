import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom';
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {

    // Hent "user" - for at se om der er logget ind
    const { user, signOut } = useContext( LoginContext );

  return (
    <nav className='Navbar'>
        <ul>
            {/* end tilføjet for at ungå at Home er .aktiv konstant */}
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="kontakt">Kontakt</NavLink></li>
            <li><NavLink to="omos">Om os</NavLink></li>
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="admin">Admin</NavLink></li>
            {
          //  Hvis der er en bruger i "global state/context"
          user ?
            <>
              <li><button onClick={signOut} >Log ud</button></li>
            </>
            :
            null
        }
        </ul>
    </nav>
  )
}

export default Navbar