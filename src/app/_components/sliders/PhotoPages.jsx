"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/process.json";
import Link from "next/link";

const PhotoPages = ( { bgStyle = "default", paddingTop = "10" } ) => {
  return (
    <>
      <section className={`mil-${bgStyle}-bg mil-relative`} style={{marginTop:"-50px"}}>
    {bgStyle == "soft" && (
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
    )}

    <div className={`container mil-p-${paddingTop}-60`} >
        <div className="row align-items-end">
            <div className="col-lg-6">
                <div className="mil-mb-90">
                    {/* <span
                        className="mil-suptitle mil-upper mil-up mil-mb-30"
                        dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                    /> */}
                    <h2
                        className="mil-upper mil-up"
                        dangerouslySetInnerHTML={{ __html: Data.title }}
                    />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="mil-adaptive-right mil-up mil-mb-90">
                    <div className="mil-nav-buttons">
                        <div className="mil-slider-button mil-process-prev">Prev</div>
                        <div className="mil-slider-button mil-process-next">Next</div>
                    </div>
                </div>
            </div>
        </div>

        <Swiper {...SliderProps.milProcessSlider} className="swiper-container mil-process-slider" style={{marginTop:"-30px"}}>
    <div className="swiper-wrapper" >
        {/* Slide 1 */}
        {/* <SwiperSlide className="swiper-slide">
        <div className="col-md-2 col-lg-3" >
                            <Link href='/Bajaj'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/bajaj.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20 mil-text-sm">Bajaj</h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                   <img src="./img/icons/6.svg" alt="icon" style={{height:'30px',width:'30px'}}/> 
                                    <p style={{fontSize:'12px'}}>Check it out</p>
                                    </div>
                               
                                
                                <div className="mil-category">Bike Manufacturers </div>
                            </Link>
                            <Link href='/Motorland'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/Mllog.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20 mil-text-sm ">Motorland</h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p style={{fontSize:'12px'}}>Check it out</p>
                                </div>
                                <div className="mil-category" ><span style={{marginLeft:'20px'}}> Automotive Dealer</span> </div>
                            </Link>
                        </div>
        </SwiperSlide> */}





        {/* Slide 2 */}
      
        <SwiperSlide className="swiper-slide" >
            <div className="row ">
            <div className="col-lg-4">
                <Link href='/Secondcup '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/lg/secondcup1.webp' alt='img' />
                                <div className="mil-project-descr2">
                                    <h4 className="mil-upper  mil-text-sm">Second Cup  </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Coffee Shop</div>
                            </Link>
                </div>
                
                <div className="col-lg-4">
                <Link href='/Amore  '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/amore.webp' alt='img' />
                                <div className="mil-project-descr2">
                                    <h4 className="mil-upper  mil-text-sm">Amore Glacier </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p>Travel Agency</p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Cafe</div>
                            </Link>
                
                </div>
                <div className="col-lg-4">
                <Link href='/Tonino'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/tonino.webp' alt='img' />
                                <div className="mil-project-descr2">
                                    <h4 className="mil-upper mil-text-sm">Tonino </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Restaurant</div>
                            </Link>
                </div>
                
                 
            
                
            </div>
        </SwiperSlide>
       

      
        {/* Add more SwiperSlide components here for additional slides */}
    </div>
</Swiper>



    </div>
</section>

    </>
  );
};
export default PhotoPages;