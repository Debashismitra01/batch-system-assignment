import React from "react";
import "./testimonial.css";
import testimonial from '../../assets/testimonial.png';
import users from '../../assets/users.png';

function Testimonial(){
    return(
        <div className="testimonial">
            <div className="testimonial-title">
                <p>Testimonial</p>
                <h1>What Our Users Say About Us?</h1>
            </div>
            <div className="testimonial-section">
                <div className="testimonial-left">
                    <img src={testimonial} alt="testimonial"/>
                </div>
                <div className="testimonial-right">
                    <h2>The Best Finance Accouting App Ever!</h2>
                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <div className="testimonial-user">
                        <img src={users} alt="users"/>
                        <h3>Nick Jonas</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;