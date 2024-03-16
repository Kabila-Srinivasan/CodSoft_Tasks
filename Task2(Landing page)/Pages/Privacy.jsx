import React from 'react';
import '../assets/Privacy.css'; 

const PrivacyPolicy = () => {
  const yellowTextStyle = { color: 'blue' };
  const backgroundStylos = {
    backgroundImage: "url('https://cdn1.vectorstock.com/i/1000x1000/67/85/background-with-home-appliances-household-items-vector-16916785.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '130vh',
    width: '100vw',
    margin: 0,
  };
  return (
    <div style={backgroundStylos}>
    <div className="privacy-policy-container">
    
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>

        <p style={yellowTextStyle}>
          Welcome to Elite Appliance Care's Privacy Policy. This Privacy Policy
          describes how your personal information is collected, used, and shared
          when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p style={yellowTextStyle}>
          We collect information that you provide directly to us, such as your
          name, email address, and phone number when you contact us or fill out
          a form on our website.
        </p>
        <h2>How We Use Your Information</h2>
        <p style={yellowTextStyle}>
          We use the information we collect to provide and improve our services,
          respond to your inquiries, and communicate with you about our
          services.
        </p>

        <h2>Sharing Your Information</h2>
        <p style={yellowTextStyle}>
          We do not sell, trade, or otherwise transfer your personal
          information to outside parties. This does not include trusted third
          parties who assist us in operating our website or servicing you, as
          long as those parties agree to keep this information confidential.
        </p>

        <h2>Security</h2>
        <p style={yellowTextStyle}>
          We implement security measures to maintain the safety of your personal
          information when you submit, or access your personal information.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p style={yellowTextStyle}>
          We may update our Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p style={yellowTextStyle}>
          If you have any questions about this Privacy Policy, please contact
          us at privacy@eliteappliancecare.com.
        </p>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
