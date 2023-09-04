import React from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  function nav(){
    navigate("/");
  }
  return (
    <div className="landing-page">
      <h1>Welcome to vacServ</h1>
      <p>Your Vacuum Cleaner Service Provider</p>
      <div className="buttons-container">
        {/* <Link to="/login" className="nav-link"> */}
          <button className="login-button" onClick ={()=>nav()}>Login</button>


        {/* <Link to="/register" className="nav-link"> */}
          <button className="register-button">Register</button>
        {/* </Link> */}
      </div>
      
    </div>
  );
};

export default LandingPage;
