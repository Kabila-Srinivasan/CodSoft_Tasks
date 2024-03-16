import React from 'react';
import '../assets/Aboutus.css';

function Aboutus() {
  return (
    <div>
      

      <section className="aboutt">
        <h1>About Us</h1>
        <p style={{ fontWeight: 'bold' }}>Your Trusted Home Appliance Service Centre</p>
        <div className="aboutt-info">
          <div className="aboutt-img">
            <img src="https://png.pngitem.com/pimgs/s/609-6097843_appliance-repair-services-hd-png-download.png" alt="Home Appliance Service Centre" />
          </div>
          <div>
            <p>"Welcome to Home Appliance Service Centre", your trusted partner for all your home appliance repair and maintenance needs. Our mission is to provide top-notch appliance repair services, ensuring your home appliances run efficiently and reliably. Our dedicated team of experts is passionate about fixing appliances and providing exceptional service. With years of experience in the industry, you can trust us with your valuable appliances. We operate with honesty and integrity in all our dealings. When you choose Home Appliance Service Centre, you are choosing excellence. Our experienced technicians respond promptly to your service requests, offer competitive and transparent pricing, and prioritize your satisfaction.We are your leading Home Appliance Service Centre, dedicated to providing top-quality repair and maintenance services for all your home appliances. With a team of skilled technicians and a commitment to excellence, we ensure that your appliances run efficiently and reliably.</p>
            
          </div>
        </div>
      </section>
  
     
      <section className="teamii">
      <h1>Meet Our Team</h1>
        <div className="teamii-rcardr">
          <div className="rcardr">
            <div className="rcardr-img">
              <img src="https://media.istockphoto.com/id/1312451456/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=1L7yTeY2VcQpm7NgmwHj6rKudVkc0skMAH7Ot5T2oZo=" alt="Technician 1" />
            </div>
            <div className="rcardr-info">
              <h2 className="rcardr-name">Kabila</h2>
              <p className="rcardr-role">CEO and Founder</p>
              <p className="rcardr-email">kabilasrini@gmail.com</p>
              <p><button className="buttons">Contact</button></p>
            </div>
          </div>
          <div className="rcardr">
            <div className="rcardr-img">
              <img src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg" alt="Technician 2" />
            </div>
            <div className="rcardr-info">
              <h2 className="rcardr-name">Hemalathaa</h2>
              <p className="rcardr-role">Managing Directory</p>
              <p className="rcardr-email">hemalathaa@gmail.com</p>
              <p><button className="buttons">Contact</button></p>
            </div>
          </div>

          
          <div className="rcardr">
            <div className="rcardr-img">
              <img src="https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo=" alt="Technician 3" />
            </div>
            <div className="rcardr-info">
              <h2 className="rcardr-name">Arul Sankaran</h2>
              <p className="rcardr-role">Co-Founder</p>
              <p className="rcardr-email">arulsankarand2825@gmail.com</p>
              <p><button className="buttons">Contact</button></p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Aboutus;
