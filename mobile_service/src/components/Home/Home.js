
import React from 'react';
import './Home.css';
import image from './ser.jpg';

function Home() {
  return (
    <div>
        <div class = "all">
        <img class="img" src={image} alt="service"/>
        <div>
          <h1>MOBSER</h1>
          <p className='promo'>
          "Need a quick fix for your damaged mobile phone? Look no further than our professional mobile repair service! We offer fast and reliable repairs for all types of phones, including cracked screens, water damage, and battery issues. With our experienced technicians and quality parts, you can trust us to get your phone working like new in no time. Contact us today to schedule your repair and enjoy the convenience of our mobile service!"
          </p>
        </div>
        </div>
    </div>
  );
}

export default Home;