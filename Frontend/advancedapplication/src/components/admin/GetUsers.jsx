import React from 'react'
import AdminDashboard from './AdminDashboard'


function GetUsers() {

const details=[
    {
        userId:1,
        userName:"Nivetha S",
        emailid:"nivetha@mail.com",
        mobilenumber:1234567890
    },
    {
        userId:2,
        userName:"Pavithra K",
        emailid:"pavi@mail.com",
        mobilenumber:9876543230
    },
]

  return (
    <div>
    
    <div><AdminDashboard/></div>
    <div className='all-users-admin-dashboard'>
    
    <div className='tableheading-admin'>
    <h1 style={{textAlign:'center'}}>User Details</h1></div>
    <table>
      <thead>
        <tr>
          <th>user ID</th>
          <th>user Name</th>
          <th>User EmailId</th>
          <th>User MobileNo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {details.map((user) =>{return (
            <tr>
            <td>{user.userId}</td>
            <td>{user.userName}</td>
            <td>{user.emailid}</td>
            <td>{user.mobilenumber}</td>
            <td><button style={{border:'none',color:'inherit',backgroundColor:'transparent'}}>Remove</button></td>
            </tr>
        )})}
      </tbody>
    </table>
    </div>   
    </div>
  )
}

export default GetUsers