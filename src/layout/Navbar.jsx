import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <ul>
            {/* end tilføjet for at ungå at Home er .aktiv konstant */}
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="kontakt">Kontakt</NavLink></li>
            <li><NavLink to="omos">Om os</NavLink></li>
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="admin">Admin</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar