import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Service = () => {
  return (
    <div className="service" id="service">
      <Carousel infiniteLoop 
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={1000}
      >
        <div>
          <img src={img1} alt="image" />
        </div>
        <div>
          <img src={img2} alt="image" />
        </div>
      </Carousel>
    </div>
  );
};

export default Service;
