import React from 'react';
import logo from '../photos/Main_Logo.png'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page when the button is clicked
  };

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex-grow"></div> {/* Left side empty div for centering logo */}
      <img src={logo} alt="Company Logo" className="h-10 mx-auto" />
      <div className="flex-grow flex justify-end">
        <button
          onClick={handleLoginClick}
          className="flex items-center justify-center gap-2 hover:bg-gray-700 p-2 rounded"
        >
          <i className="fas fa-sign-in-alt"></i> {/* Font Awesome login icon */}
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
