"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const KaiserSlider = ( { items } ) => {
  return (
    <>
        {/* full image slider */}
        <div className="mil-illustration-slider-frame mil-up">
            <Swiper
                {...SliderProps.milIllustrationSlider}
                className="swiper-container mil-illustration-slider"
            >
                {/* {items.map((item, key) => ( */}
                <SwiperSlide className="swiper-slide">

                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                            <img src='./img/kaiser/kaiser1.webp' alt='img'  />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">

                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                            <img src='https://ruizarch-react.vercel.app/img/covers/2.jpg' alt='img' />
                        </div>
                    </div>

                </SwiperSlide>
                {/* ))} */}
            </Swiper>
            <div className="container">
                <div className="mil-illustration-slider-nav mil-up">
                    <div className="mil-nav-buttons">
                        <div className="mil-slider-button mil-illustration-prev">Prev</div>
                        <div className="mil-slider-button mil-illustration-next">Next</div>
                    </div>
                </div>
            </div>
        </div>
        {/* full image slider end */}
    </>
  );
};
export default KaiserSlider;
