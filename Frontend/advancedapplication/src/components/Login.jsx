import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import loginbackground from '../assets/login-background.png'
import logo from '../assets/logo.png'
import './Login.css'
import axios from 'axios'
// import bcrypt from 'bcryptjs'

function Login() {

  const [email,setEmailid]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();


  // const salt = bcrypt.genSaltSync(10)
  // const encryptPassword=bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u');



const submit=(e)=>{
   e.preventDefault();
   if(email.length===0 || password.length===0)
  {
    toast("Enter all fields");
  }
  else{
    const userAuth={
    email:email,
    password:password,
    }
    
    axios.post("http://localhost:8080/api/auth/authenticate",userAuth)
  .then((response=>{
    const token=response.data.token;
    const role=response.data.role;
    const email=response.data.email;
    if(token){
    localStorage.setItem("emailId",email);
    localStorage.setItem("token",token);
    localStorage.setItem("role",role);
    }
    // console.log(email+" "+encryptPassword);
    // toast.success("Congratulations🥳");
  

    if(role!=='ADMIN') navigate("/user/dashboard/chart")
    else navigate("/admin/dashboard");



    // if(email==="admin@gmail.com"&& password==="admin@Password") 
    // {
    //   navigate("/admin/dashboard/chart");
    // }
  })).catch((error)=>{
    console.error("Error",error);
    toast.error(error)})
  }
}

  return (
    <div className='login-page'>
    <Link to="/"><img src={logo} className='image-logo-login'/></Link>
    <p className='yoga-academy-logo'>YOGA &nbsp;ACADEMY</p>
    <img src={loginbackground} height={500} width={500} id='login-background-image'/>
    <div className='cover-login'></div>
        <form id='loginform'>
            <fieldset className='fieldset-login'>
                <legend>Login Back</legend><br/>
                <label htmlFor='emailid' className='form-label'>EmailId</label>
                <input type='email' id='emailid' className='input-login-form' name='emailid' placeholder='Email ID' value={email} onChange={(e)=>{setEmailid(e.target.value)}} required/><br/><br/>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type='password' id='password' className='input-login-form' name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <button type='submit' className='login_button' onClick={submit}>Login</button>
                <ToastContainer autoClose={1000}/>
                </fieldset>
                </form>
                <button className='create-register-button'>
                <Link to='/register' style={{textDecoration:'none',color:'inherit'}}>Don't Have an Account? Create It </Link>
                </button>

      
    </div>
  )
}

export default Login