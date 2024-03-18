import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import loginbackground from '../assets/login-background.png'
import logo from '../assets/logo.png'
import './Login.css'

function Login() {

  const [emailid,setEmailid]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();

const submit=(e)=>{
   e.preventDefault();
   if(emailid.length===0 || password.length===0)
  {
    toast("Enter all fields");
  }
  else{
    emailid:emailid;
    password:password;
    console.log(emailid+" "+password);
    toast.success("Congratulations🥳");
    if(emailid==="admin@gmail.com"&& password==="admin@Password") navigate("/admin/dashboard");
    else navigate("/user/dashboard");
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
                <input type='email' id='emailid' className='input-login-form' name='emailid' placeholder='Email ID' value={emailid} onChange={(e)=>{setEmailid(e.target.value)}} required/><br/><br/>
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