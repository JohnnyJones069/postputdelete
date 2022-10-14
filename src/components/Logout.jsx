import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const Logout = () => {

    const {signOut} = useContext(LoginContext)

    return (
        <div>
            <button onClick={signOut}>Log ud</button>
        </div>
    )
}

export default Logout