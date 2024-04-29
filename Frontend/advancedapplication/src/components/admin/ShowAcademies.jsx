import React, { useState } from 'react'
import AdminDashboard from './AdminDashboard'
import { Rating } from '@mui/material'
import { Edit } from '@mui/icons-material'

function ShowAcademies() {
    const [details,setDetails]=useState([]);
  return (
    <div>
    <div><AdminDashboard/></div>
    <div className='show-academies-admin'>
    <div className='heading-show-academies'>Academies With US</div>
    
    <div xs={1} md={3} id='academycard-showing'>
       {details.map((item) => (
          <span key={item.academyId}>
          <div className='academycard'>
          <img className="academyimage" src={item.imageurl} alt={item.place} height={230}/>
          <div className='content-academy'>
                {item.academyname}<br/>
                {item.place}<br/>
                <Edit/>
                <Rating/>
          </div>
          </div>
          </span>
          ))}
          </div>
    
    </div>
    
    </div>
  )
}

export default ShowAcademies