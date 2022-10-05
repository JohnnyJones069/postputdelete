import React from 'react'
import {NavLink} from 'react-router-dom';


const AdminNavbar = () => {
  return (
    <nav className='Navbar'>
        <ul>
            {/* end tilføjet for at ungå at Home er .aktiv konstant */}
            <li><NavLink to="/admin">Admin Home</NavLink></li>
            <li><NavLink to="/">Public Home</NavLink></li>
        </ul>
    </nav>
  )
}

export default AdminNavbar