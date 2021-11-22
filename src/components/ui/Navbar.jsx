import React from 'react';
import '../../styles/navbar.scss';

const Navbar = () => {
    return(
        <div className="navbar">
            <a href="#newsletter">Newsletter</a>
            <a href="#about-us">About us</a>
            <a href="#follow-us">Follow Us</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default Navbar;