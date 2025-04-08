import React from 'react'
import heroImage from '../assets/images/hero-img.jpg'
function Hero() {
  return (
    <>
    <div className='hero-container'>
        <div className='menu'>
        <i class="fa-solid fa-bars menubar"></i>
         <p className='menu-para'>All</p>
        </div>
        {/* Hero-session2 */}
        <div className='hero-detail'>
            <p>Today's Deals</p>
           <p>Registry</p>
        <p>Customer Service</p>
          <p>Gift Cards</p>
         <p>Sell</p>
        </div>
    {/* hero-img */}
    </div>
    <img src={heroImage} alt='Hero-img' className='hero-img'/>
    </>
  )
}

export default Hero