import React from 'react';
import './Header.css';
import badmintonImage from '../Assets/badminton.png';
import bookslot from '../Assets/booking-online.png';
import trainer from '../Assets/coach.png';
import avatar from '../Assets/avatar.png';

const Header = () => {
  return (
    <div className='HeaderCard'>
      <div className='HeaderCardOne'>
        <div>FieldUp</div>
        <div>Search</div>
        <div className='PlayCard'>
            <img className="badmitonPlay" src={badmintonImage} alt="Badminton"/>
            <text>Play</text>
        </div>
        <div className='BookCard'>
            <img className="bookslot" src={bookslot} alt="bookslot"/>
            <text>Book</text>
        </div>
        <div className='TrainerCard'>
            <img className="trainer" src={trainer} alt="trainer"/>
            <text>Trainer</text>
        </div>
      </div>

      <div className='HeaderCard'>
        <div className='LoginCard'>
            <img className="avatar" src={avatar} alt="avatar"/>
            <text>Login / Signup</text>
        </div>
      </div>
    </div>
  )
}

export default Header
