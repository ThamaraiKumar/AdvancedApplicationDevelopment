import React from 'react'
import AdminDashboard from './AdminDashboard'
import { GitHub, LinkedIn, YouTube } from '@mui/icons-material'

function Settings() {
 const username=localStorage.getItem("username");

  return (
    <div>
    <div><AdminDashboard/></div>
    <div className='profile-admin'>
    
    <div className="profile-card">
            <div className="profile-text">
                <img src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt="profile"/>
                <h3>{username}</h3><br/>
                <p>Admin | Student</p><br/>
                <p>
                Self Motivated Person-Admin Of Yoga Academy Portal
                </p>
            </div>
            <div className="profile-links">
                <a target="_blank" href="www.linkedin.com/in/thamarai-kumar-93a005251"><LinkedIn/></a>
                <a target="_blank" href="https://github.com/thamaraikumar"><GitHub/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCPOyUi82bRcPTdpDuSHVNbw"><YouTube sx={{color:'red'}}/></a>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Settings