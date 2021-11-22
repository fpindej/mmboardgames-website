import React from 'react';
import '../../styles/navbar.scss';

const Navbar = () => {
    return(
        <div className="navbar">
            <a href="#newsletter">Newsletter</a>
            <a href="#about-us">About us</a>
            <a href="#about-us2">About us 2</a>
        </div>
    );
}

export default Navbar;