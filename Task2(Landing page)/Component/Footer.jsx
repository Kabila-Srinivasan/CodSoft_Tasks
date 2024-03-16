import React from 'react';
import '../assets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  
  return (
    <footer className="footerer">
      <div className="containerer">
        <div className="rows">
          <div className="footerer-coll">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/service">Our Services</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <br/>
            </ul>
          </div>
          <div className="footerer-coll">
            <h4>Get Help</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/test">Testimonials</a></li>
              <li><a href="#">Repairs</a></li>
              <li><a href="#">Payment Options</a></li>
              <br/>
            </ul>
          </div>
          <div className="footerer-coll">
          
            <h4>Contact Us:</h4>
            <p>Email 1:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer">kabilasrini@gmail.com</a></p>
            <p>Email 1:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer">eliteappliance@gmail.com</a></p>
            
            <p>Mobile Number: 6384842423</p>
            
          </div>
          <div className="footerer-coll">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/pre.homeservice/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/whirlpoolcare?lang=en/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/service_points/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/company/home-appliance-service/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          </div>
      </div>
      <hr style={{ borderTop: '3px solid white' }} />
       <div class="sb_footerer-below">
       <div class="sb_footerer-copyright">
       <br/><br/><br/>
       <p>
       {new Date().getFullYear()} Elite Appliance Care Kabila Srinivasan.</p></div>
       </div>
        
    </footer>
  );
};

export default Footer;
