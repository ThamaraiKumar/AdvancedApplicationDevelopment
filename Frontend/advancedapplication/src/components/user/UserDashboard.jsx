import React, { useState } from 'react'
import './Dashboard.css'
import logo from 'D:/AdvancedApplicationDevelopment/AdvancedApplicationDevelopment/Frontend/advancedapplication/src/assets/logo.png'
import { Link } from 'react-router-dom'
import {  MenuItem, Rating } from '@mui/material'
import yogacenter1 from 'D:/AdvancedApplicationDevelopment/AdvancedApplicationDevelopment/Frontend/advancedapplication/src/assets/coimbatore-yoga-center.png'


function UserDashboard() {

  const [search,setSearch]=useState('');
 
  const Search=()=>{
    console.log(setSearch);
  }

  const logout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("mobilenum");
    localStorage.removeItem("emailid");
  }
  return (
    <div>
    <nav className='user-nav'>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" className="checkbtn">
        <i className="menu-bar"><MenuItem sx={{height:'100'}}/></i>
      </label>
      <label className="user-navbar-logo"><Link to='/'><img src={logo} className='image-logo-login'/></Link>YOGA &nbsp; ACADEMY</label>
      <ul className='ul'>
        <li className='li'><Link  to="/" className="user-active" >Home</Link></li>
        <li className='li' id='userAcademy'><a href="#useracademygrid">Academy</a></li>
        <li className='li' id='userEnrolledCourse'><Link to='/user/emrollement'>Enrolled Course</Link></li>
        <li className='li' id='logout'><Link to='/login' onClick={logout} className='logout-navbar'>Logout</Link></li>
      </ul>
    </nav>
    <section>
    <div className='content-user-dashboard'>
    <input type='text' className='search-bar-user' value={search}  name='search' onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search...'></input>
    <button type='submit'  onClick={Search} className='submit-search-btn' id='searchButton'>Search</button>
    </div>
    
<div id='useracademygrid' className='user-academy-image-gallery'>

<div className="responsive-user-dashboard">
  <div className="gallery-user-dashboard image1">
      <img src={yogacenter1} alt="Coimbatore-center" width="50" height="250"/>
    <div className="desc-user-dashboard">Coimbatore <br/>Place:Yoga Center&nbsp;<Rating/></div>
   </div>
</div>

   <div className="responsive-user-dashboard">
   <div className="gallery-user-dashboard image1">
       <img src={yogacenter1} alt="Coimbatore-center" width="50" height="250"/>
      <div className="desc-user-dashboard">Coimbatore <br/>Place:Yoga Center&nbsp;<Rating/></div>
    </div>
    </div>

  <div className="responsive-user-dashboard">
   <div className="gallery-user-dashboard image1">
       <img src={yogacenter1} alt="Coimbatore-center" width="50" height="250"/>
     <div className="desc-user-dashboard">Coimbatore <br/>Place:Yoga Center&nbsp;<Rating/></div>
  </div>
  </div>
  </div>   
    </section>
    </div>
  )
}

export default UserDashboard