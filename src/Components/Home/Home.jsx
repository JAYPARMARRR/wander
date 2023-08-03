//rafce
import React, { useEffect } from "react";
import "./Home.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <div className="homeText">
        <span date-aos="fade-up" date-aos-duration="2000" className="spanText">
          A TEAM OF PROFESSIONAL TRAVEL EXPERTS
        </span>
        <div date-aos="fade-up" date-aos-duration="4000" className="homeTitle">
          Trust <strong>Our Experience</strong>
        </div>
        <div date-aos="fade-up" date-aos-duration="6000" className="btn">
          Get In Touch
        </div>
      </div>
    </div>
  );
};

export default Home;
