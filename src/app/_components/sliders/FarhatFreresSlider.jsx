"use client";

import { SliderProps } from "@common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const FarhatFreresSlider = ( { items } ) => {
  return (
    <>
    
        {/* full image slider */}
       
        <div className="mil-illustration-slider-frame mil-up" >
            
            <Swiper
                {...SliderProps.milIllustrationSlider}
                className="swiper-container mil-illustration-slider"
               
            >
              

               
               
                {/* {items.map((item, key) => ( */}
               
                <SwiperSlide className="swiper-slide">
                
                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                        <img src='./img/FarhatFreres/Farhat mockup.webp' alt='img'  />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                        <img src='./img/FarhatFreres/Farhat mockup 2.webp' alt='img'  />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                        <img src='./img/FarhatFreres/farhat web development.webp' alt='img'  />
                        </div>
                    </div>

                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide">
                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                        <img src='./img/kaiser/kaiser4.webp' alt='img'  />
                        </div>
                    </div>

                </SwiperSlide> */}
                {/* <SwiperSlide className="swiper-slide">
                    <div className="mil-illustration mil-fw-item" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                        <div className="mil-image-frame">
                        <img src='./img/kaiser/kaiser5.webp' alt='img'  />
                        </div>
                    </div>

                </SwiperSlide> */}
                {/* ))} */}
            </Swiper>
            <div className="container" >
                <div className="mil-illustration-slider-nav mil-up"  >
                    <div className="mil-nav-buttons">
                        <div className="mil-slider-button mil-illustration-prev">Prev</div>
                        <div className="mil-slider-button mil-illustration-next">Next</div>
                    </div>
                </div>
            </div>

            {/* <section>
          <div className="container mil-p-120-60">
              <div className="row">
                  <div className="col-md-6 col-lg-6">
                     
                      <div className="mil-prev-project1 " style={{marginTop:'-100px'}}>
                          <Link href='/Motorland' className="mil-link mil-left-link mil-upper mil-up"> <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      
                  </div>
                  <div className="col-md-6 col-lg-6">
                      <div className="mil-next-project1 " style={{marginTop:'-100px'}}>
                          <Link  href='/Secondcup' className="mil-link mil-upper mil-up"> <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
        </div>
        {/* full image slider end */}
    </>
  );
};
export default FarhatFreresSlider;
