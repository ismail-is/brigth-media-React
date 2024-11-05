import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import LatestPostsSection from "../../_components/sections/LatestPosts";
import CallToActionSection from "../../_components/sections/CallToAction";
import PageBannerTwo from "../../_components/PageBannerTwo";

export const metadata = {
    title: {
        default: "Farhat Freres",
    },
    description: AppData.settings.siteDescription,
}

const FarhatFreres = () => {
  return (
    <>
           <PageBannerTwo subTitle="Automotive Dealer  " title="Social Media Marketing and Website " bgImage="./img/covers/8.jpg" />
        {/* <PageBannerTwo subTitle={postData.intro.subtitle} title={postData.intro.title} bgImage={postData.intro.bgImage} /> */}



        <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-between">
                  <div className="col-lg-5">

                      <div className="mil-mb-60">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Farhat Freres </span>
                          <h2 className="mil-upper mil-up mil-mb-30" > Partnering with  <span class="mil-marker"> Farhat Freres </span></h2>
                      </div>

                  </div>
                  <div className="col-lg-7 mil-mt-suptitle-offset">
                      {/* <div className="mil-text mil-up mil-mb-30" >Motorland is an official dealer of automotive brands, including Biac, DFM, CFmoto, and AsiaStar. We collaborated with them on branding and social media marketing, enhancing their online presence and engaging their customers effectively. Additionaly, we have helped them in creating Technical sheet for all of their Vehicles and Designed 100+ Posts for them.</div> */}
                      
                      <div className="row">
                          <div className="col-lg-4">

                              <div className="mil-item-frame mil-up mil-mb-30">
                                  <div className="mil-about-counter mil-center">
                                      <div className="mil-avatar mil-mb-10">
                                          <img src='./img/covers/project/Farhat.webp' alt='img' />
                                      </div>
                                      {/* <h5 className="mil-upper mil-mb-10">Motorland </h5> */}
                                      {/* <p className="mil-text-sm mil-dark-soft">Project Agent</p>     */}
                                  </div>
                              </div>

                          </div>
                          <div className="col-lg-8">

                              <div className="mil-text mil-up mil-mb-30" >Farhat Freres is the official dealer for automotive brands such as Honda, Chevrolet, Foton, and Kaiyi. We manage their social media presence to enhance customer engagement and brand visibility. 
Additionally, we developed a comprehensive website of over 50 pages, showcasing their extensive vehicles and delivering a seamless user experience.</div>
                              
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>


      <div className="container">
          <div className="mil-divider-lg" />
      </div>



      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened" />

              <div className="mil-mb-90">
                  <h2 className="mil-upper mil-up"> Project Info</h2>
              </div>
              <div className="row mil-mb-30">
                  <div className="col-lg-6" >

                      <h6 className="mil-upper mil-up mil-mb-20">Project Component</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-10" style={{display:'flex',gap:'30px'}}>
                          {/* <li> Branding and Social Media Marketing </li> */}
                           
                          <li>Social Media Marketing </li> <li>  Website    </li> 
                      </ul>
                     
                  </div>
                  <div className="col-lg-6" >

                      <h6 className="mil-upper mil-up mil-mb-30">Client Industry</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60" >
                          <li>Automotive  </li>
                      </ul>

                  </div>
                  {/* <div className="col-lg-3" >

                      <h6 className="mil-upper mil-up mil-mb-30">Completion Date</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60">
                          <li>May 6, 2025</li>
                      </ul>

                  </div>
                  <div className="col-lg-3" >

                      <h6 className="mil-upper mil-up mil-mb-30">Project Component</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60">
                          <li>Architectural Services</li>
                      </ul>

                  </div> */}
              </div>
          </div>
      </section>















        <section>
          <div className="container mil-p-120-60">
              <div className="row">
                  <div className="col-md-6 col-lg-6">
                     
                      <div className="mil-prev-project mil-mb-60">
                          <h4 className="mil-upper mil-up mil-mb-30">Previous project</h4>
                          <Link href='/Kaiser' className="mil-link mil-left-link mil-upper mil-up">Previous work <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      
                  </div>
                  <div className="col-md-6 col-lg-6">
                      <div className="mil-next-project mil-mb-60">
                          <h4 className="mil-upper mil-up mil-mb-30">Next project</h4>
                          <Link href='/Tonino' className="mil-link mil-upper mil-up">Next work <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>










      
    </>
  );
};
export default FarhatFreres;
