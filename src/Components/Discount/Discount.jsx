//rafce
import React from "react";
import "./Discount.css";

// import video
import video from "../Assets/nature-31377.mp4";

const Discount = () => {
  return (
    <div className="discount section">
      <div className="secContainer">
        <video src={video} autoPlay loop muted typeof="mp4"></video>
       
        <div className="textDiv">
          <span className="title">Sign Up For 35% Discount</span>
          <p>
            Want to get an instat discount for your next tour to any of your
            favourite destinations.
          </p>

          <div className="input_btn flex">
            <input type="text" placeholder="Enter Your Email" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
