import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

const Navbar = () => {
    const authUser="kashif"
    const jsonData = JSON.stringify(authUser);
    return (
       <>
       <div className='container'>
      <div >
      <img src='../../public/images/e-commerce-logo.jpg' width={100} height={100} className='img'/>  
      </div>
        <ul className='nav'>
            <li><Link to="/">Products</Link></li>
            <li><Link to={"/add-products"}>Add Products</Link></li>
            <li><Link to={"/update-products"}>Update Products</Link></li>
            <li><Link to={"/logout"}>{JSON.parse(jsonData)}</Link></li>
            <li><Link to={"/profile"}>Profile</Link></li>
            <li><Link to={"/sign-up"}>Sign up</Link></li>
        </ul>
       </div>
       </>
    );
}

export default Navbar;


