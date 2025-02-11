import React, { useState } from "react";
import hamburgerIcon from "../Assets/hamburger.png";
import badmintonImage from "../Assets/badminton.png";
import bookslot from "../Assets/booking-online.png";
import trainer from "../Assets/coach.png";
import home from "../Assets/home.png";
import "./Hamburger.css";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/play"
            className={({ isActive }) => (isActive ? "card-color" : "nav-itemh")}
          >
            <img className="icon" src={badmintonImage} alt="Badminton" />
            <span>Play</span>
          </NavLink>
          <NavLink
            to="/book"
            className={({ isActive }) => (isActive ? "card-color" : "nav-itemh")}
          >
            <img className="icon" src={bookslot} alt="Book Slot" />
            <span>Book</span>
          </NavLink>
          <NavLink
            to="/trainer"
            className={({ isActive }) => (isActive ? "card-color" : "nav-itemh")}
          >
            <img className="icon" src={trainer} alt="Trainer" />
            <span>Trainer</span>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "card-color" : "nav-itemh")}
          >
            <img className="icon" src={home} alt="Home" />
            <span>Home</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
