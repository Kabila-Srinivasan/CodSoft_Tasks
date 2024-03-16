import React from 'react';
import './Update.css'; // Import your CSS file for styling
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
const notifications = [
  {
    img: img1,
    name: 'Mahir',
    noti: 'has repaired her refrigerator from her house.',
    time: '25 minutes ago',
  },
  {
    img: img2,
    name: 'Omkar',
    noti: 'has repaired her Samsung TV for display.',
    time: '30 minutes ago',
  },
  {
    img: img3,
    name: 'Rohini',
    noti: 'has repaired his washing machine.',
    time: '2 hours ago',
  },
];

const Update = () => {
  return (
    <div className="update-container">
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <div className="notification-item" key={index}>
            <img src={notification.img} alt={notification.name} className="user-image" />
            <div className="notification-content">
              <p className="notification-text">
                <span className="user-name">{notification.name}</span> {notification.noti}
              </p>
              <p className="time">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;
