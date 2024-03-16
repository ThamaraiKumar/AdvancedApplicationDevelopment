import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import loginbackground from '../assets/login-background.png'
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
    navigate("/");
  }
}

  return (
    <div className='login-page'>
    <p className='yoga-academy-logo'>YOGA &nbsp;ACADEMY</p>
    <img src={loginbackground} height={500} width={500} id='login-background-image'/>
    <div className='cover-login'></div>
        <form id='loginform'>
            <fieldset className='fieldset-login'>
                <legend>Back to Login</legend><br/>
                <label htmlFor='emailid'>EmailId</label>
                <input type='email' id='emailid' name='emailid' autoComplete='username' value={emailid} onChange={(e)=>{setEmailid(e.target.value)}} required/><br/><br/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <button type='submit' className='login_button' onClick={submit}>Login</button>
                <ToastContainer autoClose={1000}/>
            </fieldset>
        </form>
    
    </div>
  )
}

export default Login