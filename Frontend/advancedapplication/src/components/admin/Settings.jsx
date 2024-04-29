import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Edit, GitHub, LinkedIn, Logout, YouTube } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

function Settings() {
 const username=localStorage.getItem("emailId").substring(0,11).toUpperCase();

 const nav=useNavigate();

 const logout=()=>{
  localStorage.removeItem("username");
  localStorage.removeItem("mobilenum");
  localStorage.removeItem("emailId");
  localStorage.removeItem("token");
  nav("/login")
}

  return (
    <div>
    <div><AdminDashboard/></div>
    <div className='profile-admin'>
    
    <div className="profile-card">
            <div className="profile-text">
                <img src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt="profile"/>
                <h4>{username}</h4><br/>
                <p>Admin | Student</p><br/>
                <p>
                Self Motivated Person-Admin Of Yoga Academy Portal
                </p>
            </div>
            <div className="profile-links">
                <a target="_blank" href="https://www.linkedin.com/in/thamarai-kumar-93a005251"><LinkedIn/></a>
                <a target="_blank" href="https://github.com/thamaraikumar"><GitHub/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCPOyUi82bRcPTdpDuSHVNbw"><YouTube sx={{color:'red'}}/></a>
            </div><div className='edit-profile-icon'><Edit/></div>
        </div>
    <div className='logout-sidebar' onClick={logout}>Logout<Logout/></div>
    </div>
    </div>
  )
}

export default Settings