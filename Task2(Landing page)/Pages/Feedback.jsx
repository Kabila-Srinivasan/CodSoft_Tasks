import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Feedback() {
  const nav = useNavigate();
  const [username, setName] = useState('');
  const [useremail, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [comment, setFeedback] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendFeedback = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.]+[a-z]/;
    setFeedbackError('');

    if (!username || !useremail ||!mobile|| !comment) {
      setSuccessMessage('');
 
      alert('Please fill in all fields.');
    } else if (!emailRegex.test(useremail)) {
      setSuccessMessage('');
      alert('Invalid email format');
    } else {
     
      setSuccessMessage('Thank you for your feedback!');

      setTimeout(() => {
        nav('/');
      }, 3000);
    }
  };

  return (
    <div id="feedback-body">
      <div className="feedback-box">
        <div className="feedback-container">
          <div className="feedback-header">
            <h1>Provide Feedback</h1>
          </div>
          <form>
            <div className="feedback-input">
              <input
                type="text"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="feedback-input">
              <input
                type="email"
                value={useremail}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
               </div>
            <div className="feedback-input">
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                placeholder="Mobile"
              />
           </div>
            <div className="feedback-input">
              <textarea
                value={comment}
                onChange={(e) => setFeedback(e.target.value)}
                required
                placeholder="Your Feedback"
              />
              {feedbackError && <p className="feedback-error">{feedbackError}</p>}
            </div>
            <input
              className="feedback-btn"
              onClick={sendFeedback}
              type="submit"
              value="Submit Feedback"
            />
          </form>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p className="feedback-link">
              Back to Home
            </p>
          </Link>
          {successMessage && (
            <p className="feedback-success-message">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
