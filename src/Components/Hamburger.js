import React, { useState } from "react";
import hamburgerIcon from "../Assets/hamburger.png";
import badmintonImage from '../Assets/badminton.png';
import bookslot from '../Assets/booking-online.png';
import trainer from '../Assets/coach.png';
import "./Hamburger.css";

const Hamburger = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar-mobile">
      <img
        src={hamburgerIcon}
        alt="Hamburger"
        onClick={toggleDropdown}
        className="nav-hamb"
      />

      {dropdownOpen && (
        <div className="dropdown-content">
          <a>
            <div className="nav-item">
              <img className="icon" src={badmintonImage} alt="Badminton" />
              <span>Play</span>
            </div>
          </a>
          <a>
            <div className="nav-item">
              <img className="icon" src={bookslot} alt="Book Slot" />
              <span>Book</span>
            </div>
          </a>
          <a>
            <div className="nav-item">
              <img className="icon" src={trainer} alt="Trainer" />
              <span>Trainer</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
