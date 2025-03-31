import React, { useState } from 'react';
import hamburgerMenu from '../assets/lines.png';
import locationPin from '../assets/location.png';
import bellIcon from '../assets/bell.png';
import settingIcon from '../assets/settings.png';
import profilePic from '../assets/user.png';
import darkModeIcon from '../assets/night-mode.png';
import lightModeIcon from '../assets/brightness.png';
import './Navbar.css';

function Navbar() {
  // State to track whether the light mode is active
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode);
    // Optionally, add logic here to toggle an overall theme class on the body
  };

  return (
    <header className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <button className="icon-btn" aria-label="Menu">
          <img src={hamburgerMenu} alt="Menu" />
        </button>
        <a href="#" className="navbar-brand">SkyCast</a>
        <div className="navbar-location">
          <img src={locationPin} alt="Location" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="navbar-center">
        <input 
          type="text"
          className="search-input"
          placeholder="Search Location"
          aria-label="Search Location"
        />
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <button 
          className="icon-btn mode-btn" 
          onClick={toggleMode} 
          aria-label="Toggle Theme"
        >
          <img src={lightMode ? lightModeIcon : darkModeIcon} alt="Toggle Theme" />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <img src={bellIcon} alt="Notifications" />
        </button>
        <button className="icon-btn" aria-label="Settings">
          <img src={settingIcon} alt="Settings" />
        </button>
        <button className="icon-btn profile-btn" aria-label="Profile">
          <img src={profilePic} alt="Profile" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
