import React from 'react';

function Cards() {
  // Sample data
  const notifications = [
    { id: 1, type: "user", title: "Welcome To Admin Dashboard", message: "Number of Users: 100" },
    { id: 2, type: "academy", title: "Welcome To Admin Dashboard", message: "Number of Academies: 5" },
    { id: 3, type: "course", title: "Welcome To Admin Dashboard", message: "Number of Courses: 20" }
  ];

  return (
    <div>
      {notifications.map(notification => (
        <div className={`notification ${notification.type}`} key={notification.id}>
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">{notification.title}</div>
          <div className="notibody" style={{display:'flex',justifyContent:'center',marginTop:'6%',fontSize:'larger',fontFamily:'times new roman'}}>{notification.message}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
