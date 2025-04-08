import React from "react";
import './style/style.css'
import logo from '../assets/images/amazon-logo-transparent.png'
function Navbar(){
    return (
   <>
    <div className="container">
        {/* logo */}
      <div className="logo borderhover">
<img src={logo} alt="Logo" width={150} height={40}/>
      </div>
      {/* Location part */}
      <div className="session1 borderhover">
      <p style={{marginLeft:'20px', fontSize:'12px'}}>Delivery to</p>
      <div className="location">
      <i class="fa-solid fa-location-dot icon" ></i>
      <span>Pakistan</span>
      </div>
      </div>
{/* Search-box */}
<div className="search-box">
    <select className="select-option">
        <option>All</option>
        <option>Dress</option>
        <option>Cloth</option>
        <option>Shoes</option>
    </select>
 <input placeholder="Search Amzone"/>
 <button className="btn">
 <i class="fa-solid fa-magnifying-glass"></i>
 </button>
</div>
{/* sigin */}
<div className="accountSession">
 <p className="sigin">Hello, sig in</p>
 <h1 className="accountheading">Account & List</h1>
</div>

{/* orderSession */}
<div className="odersession">
    <p>Return</p>
    <h3>& Orders</h3>
</div>
{/*shopping  */}
<div className="shopping">
    <i class="fa-solid fa-cart-shopping"></i>
    <p className="cart-des">0 Cart</p>
</div>
    </div>
   </>
    )
}
export default Navbar;