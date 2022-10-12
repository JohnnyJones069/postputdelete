import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import AdminFooter from './AdminFooter'
import {LoginContext} from '../../context/LoginContext'

const AdminLayout = () => {

  const {user} = useContext( LoginContext )

  // Hvis der IKKE er en user (i Context = ikke logget ind)
  if (!user){
    return<Navigate to="/login" replace />
  }

  return (
    <div className='AdminLayout'>
      <AdminHeader />

      <div className='admin-container'>
        <AdminNavbar />

        <Outlet />
      </div>


      <AdminFooter />
    </div>
  )
}

export default AdminLayout