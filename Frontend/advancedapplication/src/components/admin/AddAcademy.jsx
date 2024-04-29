import React, { useState } from 'react'
import AdminDashboard from './AdminDashboard'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddAcademy() {

const[academyname,setName]=useState('')
const[location,setLocation]=useState('')
const[imageurl,setImage]=useState('')
const[email,setEmail]=useState('')
const[contactnumber,setContactnumber]=useState('')
const nav=useNavigate();

const addAcademy=async(e)=>{

    e.preventDefault();
    if(academyname.length===0||email.length===0||location.length===0||image.length===0||contactnumber.length===0)
    {
        toast("Check It");
    }
    else{

      const details={
        academyname:academyname,
        email:email,
        location:location,
        imageurl:imageurl,
        contactnumber:contactnumber,
      }
      try{
        const response=await axios.post("http://localhost:8080/api/academy/create/Academy",details);
        console.log(response.data);
      }catch(error)
      {
        console.error("Error :",error);
      }
      localStorage.setItem("academyID",details.academyname);
      nav("/admin/dashboard/chart")
    }
}


  return (
    <div>
    <div><AdminDashboard/></div>
    <div>
    <div className='addacademy-admin'>Add Academy</div>
    <form className='academy-add-form'>
    <div className='title-register'>
    <h2>Add Institute</h2></div><br/>
    <label htmlFor='institute-name'>Institute Name</label>&nbsp;
    <input type='text' id='insitute-name' placeholder='Academy Name' value={academyname} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-place'>Location</label>&nbsp;
    <input type='text' id='insitute-place' placeholder='Location' value={location} onChange={(e)=>{setLocation(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-email'>Academy Email id</label>&nbsp;
    <input type='email' id='insitute-email' placeholder='Email Id' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-contact'>contact Number</label>&nbsp;
    <input type='tel' maxLength={10} id='insitute-contact' placeholder='Contact Number' value={contactnumber} onChange={(e)=>{setContactnumber(e.target.value)}}/><br/><br/>
    <label htmlFor='institute-image'>Institute Image Url</label>&nbsp;
    <input type='text' id='insitute-image' placeholder='Image url' value={imageurl} onChange={(e)=>{setImage(e.target.value)}}/><br/><br/>
    <button type='submit' id='submitButton' onClick={addAcademy} className='submitButton'>Submit</button>
    <ToastContainer autoClose={1000}/>
    </form>     
    
    
    </div>
    
    </div>
  )
}

export default AddAcademy