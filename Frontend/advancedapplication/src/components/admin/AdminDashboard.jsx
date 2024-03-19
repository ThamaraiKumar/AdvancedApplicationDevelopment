import React from 'react'
import './AdminDashboard.css'
import { Link } from 'react-router-dom'
import NoofUsers from './Charts/NoofUsers'

function AdminDashboard() {

  
  return (
    <div className='admin-dashboard-header'>
    <div className='admin-title'><h1>Admin &nbsp;Dashboard</h1></div>
   <div className='sidebar-admin'>
    <ul className="sidebar-menu-admin">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/addacademy">Add Academy</Link></li>
        <li><Link to='/admin/showacademies'>Show Academies</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
      </ul>
      </div>

      <div><NoofUsers/></div>
    </div>
  )
}

export default AdminDashboard