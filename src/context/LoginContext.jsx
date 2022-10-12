import { useState, createContext } from 'react';
export const LoginContext = createContext();

const LoginContextProvider = ( props ) => {

    // USER-state - hvis der er en bruger = logget ind
    const [ user, setUser ] = useState()

    // LOGIN-funktion
    let signIn = ( username, password ) => {

        // Simuleret tjek af login (Kobles på API-loginklad hvis det skal virke rigtigt)
        if ( username === "admin" && password === "123456" ) {

            // Brugernavn er godkendt så gem hans brugernavn i state
            setUser( username );
        } else {

            // Bruger ikke godkendt
            setUser( null )
        }

    }

     // LOGOUT-funktion
     let signOut = ( ) => {
        // Tøm state - så der ikke længere er en "bruger"
        setUser( null );
    }

    return (

        // Provider - export fra component
        <LoginContext.Provider value={ { user, signIn, signOut } }>
            { props.children }
        </LoginContext.Provider>

    )


}

export default LoginContextProvider;