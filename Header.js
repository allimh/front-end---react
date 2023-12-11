// Header.js
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


// Components to include - login and sign out

const Header = ({ isLoggedIn, handleSignOut }) => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home');
    }
    const goToAboutPage = () => {
        navigate('/about');
    }
    const goToDashboard = () => {
        navigate('/dashboard');
    }
    const goToProfile = () => {
        navigate('/profile');
    }
    
  return (
    <header className="page-header">
      <button className="button" onClick={goToHomePage}>Home</button>
      <button className="button" onClick={goToAboutPage}>About Us</button>
      {isLoggedIn ? (
        <>
        <button className="button" onClick={goToProfile}>Profile</button>
        <button className="button" onClick={goToDashboard}>Dashboard</button>
        <button className="button" onClick={handleSignOut}>Sign Out</button>
        </>
        ) : (
        <button className="button">Login</button>
      )}
    </header>
  );
};

export default Header;
