import React from "react";
import "./Nav.css";

// images
import boba from "../assets/boba.png";
import tea from "../assets/tea.png";
import fruit from "../assets/fruit.png";
import smoothie from "../assets/smoothie.png";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// // import required modules
// import { FreeMode} from "swiper";

export default function Nav() {
  return (
    <section id="nav">
      <div className="container">
        <div className="navbar">
          <div className="drink-links">
            <a href="#Popular" className="drink-link popular">
              <img src={boba} alt="" />
              Popular
            </a>

            <a href="#Fresh Teas" className="drink-link fresh">
              <img src={tea} alt="" />
              Fresh Teas
            </a>

            <a href="#Fruit Teas" className="drink-link fruit">
              <img src={fruit} alt="" />
              Fruit Teas
            </a>

            <a href="#Smoothies" className="drink-link smoothie">
              <img src={smoothie} alt="" />
              Smoothies
            </a>

            {/* <Swiper
              slidesPerView={4}
              spaceBetween={100}
              freeMode={true}
              // pagination={{
                //   clickable: true,
              // }}
              modules={[FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#Popular" className="drink-link popular">
                  <img src={boba} alt="" />
                  Popular
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#Fresh Teas" className="drink-link fresh">
                  <img src={tea} alt="" />
                  Fresh Teas
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#Fruit Teas" className="drink-link fruit">
                  <img src={fruit} alt="" />
                  Fruit Teas
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#Smoothies" className="drink-link smoothie">
                  <img src={smoothie} alt="" />
                  Smoothies
                </a>
              </SwiperSlide>

              <SwiperSlide>
              </SwiperSlide>

            </Swiper> */}
          </div>
        </div>
      </div>
    </section>
  );
}
