import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logout from '../components/Logout';
import SearchInput from '../components/SearchInput';
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {

  // Hent "user" - for at se om der er logget ind
  const { user, } = useContext( LoginContext );

  const [showMenu, setShowMenu] = useState(false)



  return (
    <nav className='Navbar'>

      {/* LOGO */ }
      <Link className="navbar-brand" to="/">FTA Travel (logo)</Link>

      {/* Burgermenu */ }
      <div className={showMenu == true ? "burger-button open" : "burger-button"} onClick={() => setShowMenu(!showMenu)}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      <div className={showMenu === true ? "navbar-container active" : "navbar-container"}>
        <ul>
          {/* end tilføjet for at ungå at Home er .aktiv konstant */ }
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="kontakt">Kontakt</NavLink></li>
          <li><NavLink to="omos">Om os</NavLink></li>
          <li><NavLink to="tours">Alle tours (pagination)</NavLink></li>
          <li>
            <SearchInput />
          </li>
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
      </div>
    </nav>
  )
}

export default Navbar