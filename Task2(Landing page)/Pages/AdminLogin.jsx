import React, { useState, useEffect } from 'react';
import '../assets/AdminLogin.css'; // Assuming the styles are imported from AdminLogin.css
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const nav = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = () => {
    
    if (
      
      !username ||
      !password 
    )
     {
      alert('Enter all fields');
    }
    if (!usernameRegex.test(username)) {
      alert('Invalid username format');
      return;
    } else if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    } else if (!passwordRegex.test(password)) {
      alert('Invalid Password format');
      return;
    }
    else{
      nav('/main');
    }

    // Your sign-in logic here
  };

  useEffect(() => {
    const ioniconsModuleScript = document.createElement('script');
    ioniconsModuleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    ioniconsModuleScript.type = 'module';
    document.body.appendChild(ioniconsModuleScript);

    const ioniconsNomoduleScript = document.createElement('script');
    ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    ioniconsNomoduleScript.setAttribute('nomodule', '');
    document.body.appendChild(ioniconsNomoduleScript);

    return () => {
      document.body.removeChild(ioniconsModuleScript);
      document.body.removeChild(ioniconsNomoduleScript);
    };
  }, []);

  return (
    
    <div className='adminlogin'>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                required
                value={username}
                onChange={handleUserNameChange}
              />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" />Remember Me{' '}
              </label>
              <span className="forget-password-link">
              <a href="#">Forget Password</a>
            </span>
            </div>
            <button onClick={handleSignin}>Log in</button>
            <div className="register">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
      
  );
};

export default AdminLogin;
