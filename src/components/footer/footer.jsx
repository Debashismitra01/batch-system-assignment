import React from "react";
import "./footer.css";
import mail_logo from "../../assets/mail_logo.png";
import call_logo from "../../assets/call_logo.png";
import logo from "../../assets/logo.png";

function Footer() {
    return(
        <div className="footer">
            <div className="uppercontainer">
            <div className="footercontainer">
                <ul>
                <li><div className="logo">
                <img src={logo} alt="logo"/></div></li>
                <li><div className="contacts"><img src={mail_logo} alt="logo"/><p>help@frybix.com</p></div></li>
                <li><div className="contacts"><img src={call_logo} alt="logo"/><p>+1234 56789</p></div></li>
                </ul>
                </div>
            <div className="footercontainer">
                <ul>
                <li><h1>Links</h1></li>
                    <li className="highlight">Home</li>
                    <li className="highlight">About Us</li>
                    <li className="highlight">Booking</li>
                    <li className="highlight">Blog</li>
                </ul>
                </div>
            <div className="footercontainer">
                <ul>
                <li><h1>Legal</h1></li>
                    <li className="highlight">Terms Of Use</li>
                    <li className="highlight">Privacy Policy</li>
                    <li className="highlight">Cookie Policy</li>
                </ul>
                </div>
            <div className="footercontainer">
                <ul>
                <li><h1>Product</h1></li>
                    <li className="highlight">Take Tour</li>
                    <li className="highlight">Live Chat</li>
                    <li className="highlight">Reviews</li>
                </ul>
                </div>
            <div className="footercontainer">
                <h1>Newsletter</h1>
                <p>Stay Up To Date</p>
                <form className="form">
                    <input placeholder="Your Email"></input>
                    <button>Subscribe</button>
                </form>
                </div></div>
                <p>Copyright 2022 uifry.com all rights reserved</p>
        </div>
    )
}

export default Footer;
