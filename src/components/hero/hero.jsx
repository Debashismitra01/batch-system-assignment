import React from "react";
import "./hero.css";
import arrow_icon from '../../assets/arrow_icon.svg';
import play_button from '../../assets/play_button.svg';
import banner from '../../assets/banner.png';
import heroimg from '../../assets/heroimg.png';
function Hero(){
    return(
        <div className="hero">
            <div className="hero-left">
                <h1>Make the best financial decisions</h1>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <div className="hero-action">
                    <div className="getstarted">
                    <p>Get Started</p>
                    <img src={arrow_icon} alt="arrow icon" />
                    </div>
                    <div className="watchvideo">
                        <img src={play_button} alt="play-button" />
                        <p>Watch Video</p>
                    </div>
                </div>
                <img src={banner} alt="banner" />
            </div>
            <div className="hero-right">
            <img src={heroimg} alt="heroimg" />
            </div>
        </div>
    )
}

export default Hero;