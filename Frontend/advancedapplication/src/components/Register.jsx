import React, { useState } from 'react'
import './Register.css'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../assets/register-side-image.png'
import { ToastContainer, toast } from 'react-toastify';


function Register() {

const[emailid,setEmailId]=useState('');
const[user,setuser]=useState('');
const[password,setPassword]=useState('');
const[confirmpassword,setConfirmPassword]=useState('');
const[username,setUsername]=useState('');
const[mobilenumber,setMobilenumber]=useState('');
const nav=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    if(user.length===0||emailid.length===0|| password.length===0||confirmpassword.length===0||
      mobilenumber.length===0)
    {
      toast("Enter all fields");
    }
    else if(confirmpassword!==password) toast.warn("Password ⌛Must be same");
    else{
      emailid:emailid;
      username:username;
      user:user;
      mobilenumber:mobilenumber;
      console.log(emailid+" "+user+" "+mobilenumber+" "+username);
      localStorage.setItem("emailid",emailid);
      localStorage.setItem("username",username);
      localStorage.setItem("mobilenum",mobilenumber);
      
      if(user==='admin') nav("/admin/dashboard")
      else if(user==='user') nav("/user/dashboard")
    }
}



  return (
    <div id="register-form">
    <div className='side-register-image'>
    <img src={Image} height={500} width={500} alt='side-register-image'/>
    </div>
    <div className='register-glasscover'></div>
    <Link to="/"><img src={logo} className='image-logo-login'/></Link>
    <p className='yoga-academy-logo'>YOGA &nbsp;ACADEMY</p>
    <div className='form-register'>
    <form>
    <div className='title-register'><h2>Register Here</h2></div><br/>
    <select id='admin-user admin user' name='admin/user' onChange={(e)=>{setuser(e.target.value)}}>
    <option value="">Enter admin/user</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
    </select><br/><br/>


    <input type='email' id='emailid email'  value={emailid} required placeholder='Enter email' className='form-input-register' name='email' onChange={(e)=>{setEmailId(e.target.value)}}></input><br/><br/>
    <input type='text' id='username' value={username}  required placeholder='Enter Username'  className='form-input-register' name='username' onChange={(e)=>{setUsername(e.target.value)}}></input><br/><br/>
    <input type='tel' id='mobilenumber' value={mobilenumber} maxLength={10} required placeholder='Enter Mobilenumber' className='form-input-register' name='mobilenumber' onChange={(e)=>{setMobilenumber(e.target.value)}}></input><br/><br/>
    <input type='password' id='password pwd' required placeholder='Password' className='form-input-register' name='password' onChange={(e)=>{setPassword(e.target.value)}}></input><br/><br/>
    <input type='password' id='confirmpassword'  required placeholder='Confirm Password' className='form-input-register' name='confirmpassword' onChange={(e)=>{setConfirmPassword(e.target.value)}}></input><br/><br/>
    <ToastContainer autoClose={1000}/>
    <button type='submit' id='submitButton'  className='submitButton' onClick={handleSubmit}>Submit</button>
    </form> 
    <button className='signinButton'><Link to="/login" style={{textDecoration:'none',color:'inherit'}}>Already a user? Login</Link></button>
    </div>
    </div>
  )
}

export default Register



// https://img.freepik.com/premium-vector/serenity-nature-beautiful-woman-meditating-nature-cartoon-vector-eps-10-format_24381-1773.jpg?w=740