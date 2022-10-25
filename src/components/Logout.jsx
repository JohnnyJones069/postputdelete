import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const Logout = () => {

    const {signOut} = useContext(LoginContext)

    return (
        <>
            <button onClick={signOut}>Log ud</button>
        </>
    )
}

export default Logout