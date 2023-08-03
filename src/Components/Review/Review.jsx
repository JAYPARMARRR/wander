//rafce
import React from "react";
import "./Review.css";

// import images

import userl from "../Assets/pexels-sobhan-joodi-2925484.jpg";
import user2 from "../Assets/pexels-marcelo-chagas-3064369.jpg";//baki che photos
import user3 from "../Assets/pexels-marcelo-chagas-3334783.jpg";

const Review = () => {
  return (
    <div className="review section">
      <div className="secContainer">
        <span className="secTitle">What People Sey</span>
        <div className="reviewContainer container grid">

          <div className="singlereview">
            <div className="imgDiv">
              <img src={userl} />
            </div>
            <p>
            Second time I booked my tour with them, so far so good! I was so desperate to grab a coffee and for that.Nice one Eddy! And of course our bus driver, Perfect! Overall, the group where I was with was perfectly fun, lucky me Thumbs up!😘😊



            </p>
            <div className="name">
              Shakshi
            </div>
            

          </div>

          <div className="singlereview">
            <div className="imgDiv">
              <img src={user2} />
            </div>
            <p>
            Best tour ever, he's so knowledgeable and also made the tour so fun! loved how he got everyone involved.🥰🥰😊

            </p>
            <div className="name">
              Shraddha 
            </div>
            

          </div>

          <div className="singlereview">
            <div className="imgDiv">
              <img src={user3} />
            </div>
            <p>
            "Hi, I'm Hetal Parmar. I and my whole family are very happy 😊 with your service and tour Manager Gaurav Deshpande. We all enjoyed the trip a lot 😊👌👍
            </p>
            <div className="name">
             Hetal Parmar
            </div>
            

          </div>


        </div>
      </div>
    </div>
  );
};

export default Review;
