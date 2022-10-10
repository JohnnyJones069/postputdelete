import React from 'react'
import {NavLink} from 'react-router-dom';


const AdminNavbar = () => {
  return (
    <nav className='Navbar'>
        <ul>
            {/* end tilføjet for at ungå at Home er .aktiv konstant */}
            <li><NavLink to="/admin" end>Admin Home</NavLink></li>
            <li><NavLink to="admintours">Admin Tours</NavLink></li>
            <li><NavLink to="admintoursopret">Admin Tours Opret</NavLink></li>
            <li><NavLink to="/" end>Public Home</NavLink></li>
        </ul>
    </nav>
  )
}

export default AdminNavbar