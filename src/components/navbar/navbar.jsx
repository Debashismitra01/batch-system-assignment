import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="download">Download</div>
            
            <div className={`container ${isOpen ? 'change' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;
