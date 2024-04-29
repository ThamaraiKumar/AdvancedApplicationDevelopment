import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';

function GetUsers() {
  const initialDetails = [
    {
      userId: 1,
      userName: "Nivetha S",
      emailid: "nivetha@mail.com",
      mobilenumber: 1234567890
    },
    {
      userId: 2,
      userName: "Pavithra K",
      emailid: "pavi@mail.com",
      mobilenumber: 9876543230
    },
  ];

  const [details, setDetails] = useState(initialDetails);

  const handleRemoveUser = (userId) => {
    // Filter out the user with the given userId
    const updatedDetails = details.filter(user => user.userId !== userId);
    // Update the state with the filtered user details
    setDetails(updatedDetails);
  };

  return (
    <div>
      <AdminDashboard />
      <div className='all-users-admin-dashboard'>
        <div className='tableheading-admin'>
          <h1 style={{ textAlign: 'center' }}>User Details</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User EmailId</th>
              <th>User MobileNo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.emailid}</td>
                <td>{user.mobilenumber}</td>
                <td>
                  <button
                    style={{ border: 'none', color: 'inherit', backgroundColor: 'transparent' }}
                    onClick={() => handleRemoveUser(user.userId)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetUsers;
