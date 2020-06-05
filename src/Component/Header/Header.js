import React from 'react';
import logo from '../../Image/logo.png/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
           <p>Madina Bank Limited</p>
           <nav className='nav-bar'>
            <a href = "/employee">Employee Info</a>
            <a href="/Contact">Contact</a>
          </nav> 
        </div>
    );
};

export default Header;