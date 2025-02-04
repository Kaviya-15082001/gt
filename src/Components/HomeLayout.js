import React from 'react';
import './HomeLayout.css';
import HomeLay from '../Assets/HomeLay.jpeg';

const HomeLayout = () => {
  return (
    <div className='HomeLayoutContainer'>
      <div>
      <text className="HomeLayText">
  Find Players & {"\n"}Venue NearBy
</text>

      </div>
      <div>
        <img src={HomeLay} alt='HomeLay' className='HomeLayBox'/>
      </div>
    </div>
  )
}

export default HomeLayout
