"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/process.json";
import Link from "next/link";

const SocialSlider = ( { bgStyle = "default", paddingTop = "10" } ) => {
  return (
    <>
      <section className={`mil-${bgStyle}-bg mil-relative`} style={{marginTop:"-50px"}}>
    {bgStyle == "soft" && (
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
    )}

    <div className={`container mil-p-${paddingTop}-60`}>
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
        <SwiperSlide className="swiper-slide">
        <div className="row col-lg-12">
                <div className="col-lg-6">
                    <Link href="/mainpage" className="mil-blog-card mil-mb-60">
                        <div className="mil-cover mil-up mil-long">
                            <img src="https://ruizarch-react.vercel.app/img/covers/1.jpg" alt="Sample Blog Post 1" />
                            <div className="mil-date">date</div>
                        </div>
                        <div className="mil-description">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-10"></span>
                            <h4 className="mil-upper mil-up mil-mb-30">Explore new design</h4>
                            <p className="mil-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/mainpage" className="mil-blog-card mil-mb-60">
                        <div className="mil-cover mil-up mil-long">
                            <img src="https://ruizarch-react.vercel.app/img/covers/1.jpg" alt="Sample Blog Post 1" />
                            <div className="mil-date">date</div>
                        </div>
                        <div className="mil-description">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-10"></span>
                            <h4 className="mil-upper mil-up mil-mb-30">Explore new design</h4>
                            <p className="mil-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
                        </div>
                    </Link>
                </div>
            </div>
        </SwiperSlide>

        {/* Slide 2 */}
        {/* <SwiperSlide className="swiper-slide">
            <div className="row col-lg-12">
                <div className="col-lg-6">
                    <Link href="/mainpage" className="mil-blog-card mil-mb-60">
                        <div className="mil-cover mil-up mil-long">
                            <img src="https://ruizarch-react.vercel.app/img/covers/1.jpg" alt="Sample Blog Post 1" />
                            <div className="mil-date">date</div>
                        </div>
                        <div className="mil-description">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-10"></span>
                            <h4 className="mil-upper mil-up mil-mb-30">Explore new design</h4>
                            <p className="mil-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/mainpage" className="mil-blog-card mil-mb-60">
                        <div className="mil-cover mil-up mil-long">
                            <img src="https://ruizarch-react.vercel.app/img/covers/1.jpg" alt="Sample Blog Post 1" />
                            <div className="mil-date">date</div>
                        </div>
                        <div className="mil-description">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-10"></span>
                            <h4 className="mil-upper mil-up mil-mb-30">Explore new design</h4>
                            <p className="mil-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod</p>
                        </div>
                    </Link>
                </div>
            </div>
        </SwiperSlide> */}
        {/* Add more SwiperSlide components here for additional slides */}
    </div>
</Swiper>

    </div>
</section>

    </>
  );
};
export default SocialSlider;
