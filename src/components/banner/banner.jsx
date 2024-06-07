import React from 'react';
import "./banner.css";
import vector from "../../assets/Vector.png";

function Banner(){
    return(
        <div className='Frame'>
        <h1>Ready to get started?</h1>
        <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
        <div className="downloadapp">
            <p>Download app</p>
            <img src={vector} alt="vector"/>
        </div>
        </div>
        
    )
}

export default Banner;