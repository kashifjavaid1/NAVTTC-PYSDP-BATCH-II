import React from 'react';
import cartLogo from '../assets/images/cart-1.jpg'

function Cart(props) {
  return (
    <>
    <div className='cart-cintainer'>
        <div className='cart'>
        <h1 className='cart-heading'>{props.title}</h1>
         <img src={cartLogo} className='logoImage'/>
         <p className='cart-description'>Shop gaming</p>
        </div>
    </div>
    </>
  )
}

export default Cart;