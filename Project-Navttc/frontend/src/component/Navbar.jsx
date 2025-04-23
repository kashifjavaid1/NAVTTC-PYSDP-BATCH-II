import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

const Navbar = () => {
    return (
       <>
       <div >
        <ul className='nav'>
            <li><Link to="/">Products</Link></li>
            <li><Link to={"/add-products"}>Add Products</Link></li>
            <li><Link to={"/update-products"}>Update Products</Link></li>
            <li><Link to={"/logout"}>Logout</Link></li>
            <li><Link to={"/profile"}>Profile</Link></li>
        </ul>
       </div>
       </>
    );
}

export default Navbar;


