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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Booking</li>
                    <li>Blog</li>
                </ul>
                </div>
            <div className="footercontainer">
                <ul>
                <li><h1>Legal</h1></li>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
                </div>
            <div className="footercontainer">
                <ul>
                <li><h1>Product</h1></li>
                    <li>Take Tour</li>
                    <li>Live Chat</li>
                    <li>Reviews</li>
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