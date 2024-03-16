import React from 'react';
import '../assets/Follow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Follow() {
  const backgroundStys = {
    backgroundImage: "url('https://img.freepik.com/free-vector/blurred-pink-tones-background_1102-31.jpg?size=626&ext=jpg&ga=GA1.2.623741277.1686718373&semt=ais')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin: 0,
  };
  const socialMediaLinks = [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/pre.homeservice/',
      icon: faFacebook,
    },
    {
      platform: 'Twitter',
      link: 'https://twitter.com/whirlpoolcare?lang=en/',
      icon: faTwitter,
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/service_points/',
      icon: faInstagram,
    },
  ];

  return (
    <div style={backgroundStys}>
    <div className="follow-us">
      <h1>Follow Us</h1>
      <div className="social-links">
        {socialMediaLinks.map((socialLink, index) => (
          <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${socialLink.platform.toLowerCase()}`}
          >
            <FontAwesomeIcon icon={socialLink.icon} />
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Follow;
