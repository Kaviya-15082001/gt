import React from 'react';
import './Header.css';
import badmintonImage from '../Assets/badminton.png';
import bookslot from '../Assets/booking-online.png';
import trainer from '../Assets/coach.png';
import avatar from '../Assets/avatar.png';
import Hamburger from './Hamburger';

const Header = () => {
    
  return (
    <header className='header'>
      <div className='header-left'>
        <div className='logo'>FieldUp</div>
        <div className='search-container'>
          <input type='search' placeholder='Search' className='search-box' />
        </div>
      </div>
      
      <nav className='nav-links'>
        <div className='nav-item'>
          <img className='icon' src={badmintonImage} alt='Badminton' />
          <span>Play</span>
        </div>
        <div className='nav-item'>
          <img className='icon' src={bookslot} alt='Book Slot' />
          <span>Book</span>
        </div>
        <div className='nav-item'>
          <img className='icon' src={trainer} alt='Trainer' />
          <span>Trainer</span>
        </div>
      </nav>
      
      <div className='login-container'>
        <img className='icon' src={avatar} alt='User Avatar' />
        <span>Login / Signup</span>
      </div>
      
    <Hamburger/>
    </header>
  );
};

export default Header;