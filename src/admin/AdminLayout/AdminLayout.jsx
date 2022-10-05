import React from 'react'
import {Outlet} from 'react-router-dom';

import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import AdminFooter from './AdminFooter'

const AdminLayout = () => {
  return (
    <div className='AdminLayout'>
        <AdminHeader />
        <AdminNavbar />
        
        <Outlet />

        <AdminFooter />
    </div>
  )
}

export default AdminLayout