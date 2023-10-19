import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Netflix from "../../img/Netflix.png";
import Responsive from "../../img/Responsive.png";
import Travel from "../../img/Travel.png";
import calc from "../../img/calc.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Netflix} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Responsive} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Travel} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={calc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
