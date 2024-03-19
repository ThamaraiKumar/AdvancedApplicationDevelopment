import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Rating } from '@mui/material'
import { Edit } from '@mui/icons-material'

function ShowAcademies() {

    const details=[
        {
            academyId:1,
            academyname:"COIMBATORE YOGA CENTER",
            imageurl:"https://www.kindpng.com/picc/m/253-2534116_yoga-icon-png-transparent-png.png",
            place:"Coimbatore"
        },
        {
            academyId:2,
            academyname:"MADURAI YOGA CENTER",
            imageurl:"https://static.vecteezy.com/system/resources/thumbnails/013/261/186/small/girl-doing-yoga-and-meditating-yoga-love-freedom-happiness-health-free-png.png",
            place:"Madurai"
        },
        {
            academyId:3,
            academyname:"MADURAI YOGA CENTER",
            imageurl:"D:/AdvancedApplicationDevelopment/AdvancedApplicationDevelopment/Frontend/advancedapplication/src/assets/coimbatore-yoga-center.png",
            place:"Madurai"
        },
    ]
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