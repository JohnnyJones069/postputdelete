import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';

// Hent Login fra contextprovider
import { LoginContext } from '../context/LoginContext'

const Login = () => {

  // Hent sign-in-metoden fra context-filen
  const { signIn, user } = useContext( LoginContext );

  const [ userName, setUserName ] = useState()
  const [ password, setPassword ] = useState()
  const [ message, setMessage ] = useState()

  // Når man allerede er logget ind sendes man direkte til admin
  if ( user ) {
    return <Navigate to="/admin" replace />
  }

  // Håndtere login - med indhold fra login-form
  const handleLogin = ( e ) => {
    e.preventDefault(); //Forhindre reloading af siden.

    signIn( userName, password );



  }


  return (
    <div className='Login'>

      {/* {
        user && <h2>Bruger er logget som: { user }</h2>
      } */}

      <h1>Login</h1>
      <form onSubmit={ handleLogin }>

        <div>
          <label htmlFor='inpBruger'>Brugernavn:</label>
          <br />
          <input type="text" onChange={ ( e ) => setUserName( e.target.value ) } id="inpBruger" placeholder="Brugernavn" />
        </div>

        <div>
          <label htmlFor='inpPassword'>Adgangskode:</label>
          <br />
          <input type="password" onChange={ ( e ) => setPassword( e.target.value ) } id="inpPassword" placeholder='Adgangskpde' />
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login