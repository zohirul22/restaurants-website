import React from 'react';
import { Link } from 'react-router-dom';


import './Menu.css'

const Menu = () => {
    return (
        <nav className='navber my-4'>
         <a href="#breakfast">Breakfast</a>
         <a href="lunch">Lunch</a>
         <a href="dinar">Dinar</a>
        </nav>
    );
};

export default Menu;