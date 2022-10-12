import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom';

// Hent Login fra contextprovider
import { LoginContext } from '../context/LoginContext'

const Login = () => {

  // Hent sign-in-metoden fra context-filen
  const {signIn, user} = useContext(LoginContext);

  // Når man allerede er logget ind sendes man direkte til admin
  if (user){
    return<Navigate to="/admin" replace />
  }

  const handleLogin = (e) => {
    e.preventDefault(); //Forhindre reloading af siden.

    signIn(e.target.un.value, e.target.pw.value);

    

  }


  return (
    <div>
      <form onSubmit={handleLogin}>

        <input type="text" name="un" placeholder='Username' />
        <input type="password" name="pw" placeholder='Password' />
        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login