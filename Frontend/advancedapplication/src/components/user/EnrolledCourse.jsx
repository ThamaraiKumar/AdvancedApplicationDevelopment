import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'D:/AdvancedApplicationDevelopment/AdvancedApplicationDevelopment/Frontend/advancedapplication/src/assets/logo.png'
import { ToastContainer, toast } from 'react-toastify';


function EnrolledCourse() {

  const logout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("mobilenum");
    localStorage.removeItem("emailid");
  }


  const[name,setName]=useState('')
const[location,setLocation]=useState('')
const[image,setImage]=useState('')
const[email,setEmail]=useState('')
const[contactnumber,setContactnumber]=useState('')
const nav=useNavigate();





const addAcademy=(e)=>{

    e.preventDefault();
    if(name.length===0||email.length===0||location.length===0||image.length===0||contactnumber.length===0)
    {
        toast("Check It");
    }
    else{
        nav("/user/dashboard")
    }
}

  return (
    <div>
    <nav className='user-nav'>
      <label className="user-navbar-logo"><Link to='/'><img src={logo} className='image-logo-login'/></Link>YOGA &nbsp; ACADEMY</label>
      <ul className='ul'>
        <li className='li'><Link  to="/" className="user-active" >Home</Link></li>
        <li className='li' id='userAcademy'><a href="#useracademygrid">Academy</a></li>
        <li className='li' id='userEnrolledCourse'><Link to='/user/enrollement'>Enrolled Course</Link></li>
        <li className='li' id='logout'><Link to='/login' onClick={logout} className='logout-navbar'>Logout</Link></li>
      </ul>
    </nav>
    <section></section>


    <div className='enroll-form'>
    
<form className='academy-add-form'>
    <div className='title-register'>
    <h2>Enroll Institute</h2></div><br/>
    <label htmlFor='institute-name'>Institute Name</label>&nbsp;
    <input type='text' id='insitute-name' placeholder='Academy Name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-place'>Location</label>&nbsp;
    <input type='text' id='insitute-place' placeholder='Location' value={location} onChange={(e)=>{setLocation(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-email'>Academy Email id</label>&nbsp;
    <input type='email' id='insitute-email' placeholder='Email Id' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-contact'>contact Number</label>&nbsp;
    <input type='tel' maxLength={10} id='insitute-contact' placeholder='Contact Number' value={contactnumber} onChange={(e)=>{setContactnumber(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-image'>Institute Image Url</label>&nbsp;
    <input type='text' id='insitute-image' placeholder='Image url' value={image} onChange={(e)=>{setImage(e.target.value)}}/><br/><br/>
    <button type='submit' id='submitButton' onClick={addAcademy} className='submitButton'>Submit</button>
    <ToastContainer autoClose={1000}/>
    </form>     

    
    </div>
    </div>
  )
}

export default EnrolledCourse