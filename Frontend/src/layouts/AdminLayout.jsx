import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useTokenContext } from '../context/TokenContext'
const AdminLayout = () => {

    const {user, loading} = useTokenContext();

    if(loading){
        return <h1>......Loading</h1>
    }

    if(!user.isAdmin){
        return <Navigate to = '/' />;
    }
  return (
    <>
        <header>
            <div className="container">
                <nav>
                    <ul className='flex'>
                        <li>
                            <NavLink to='/admin/users'>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/contacts'>Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
    </>
  )
}

export default AdminLayout
