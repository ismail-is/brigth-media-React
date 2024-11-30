import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import LatestPostsSection from "../../_components/sections/LatestPosts";
import CallToActionSection from "../../_components/sections/CallToAction";
import PageBannerTwo from "../../_components/PageBannerTwo";
import FullImageSlider from "../../_components/sliders/FullImage";
import KaiserSlider from "../../_components/sliders/KaiserSlider";
import MotorlandSlider from "../../_components/sliders/MotorlandSlider";

export const metadata = {
    title: {
        default: "Motorland",
    },
    description: AppData.settings.siteDescription,
}

const Motorland = () => {
  return (
    <>
           <PageBannerTwo subTitle="Automobile Dealer " title="Automotive Dealer" bgImage="./img/allimg/all banners/motorland.webp" />
        {/* <PageBannerTwo subTitle={postData.intro.subtitle} title={postData.intro.title} bgImage={postData.intro.bgImage} /> */}



        <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-between">
                  <div className="col-lg-4">

                      <div className="mil-mb-60">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Motorland</span>
                          <h2 className="mil-upper mil-up mil-mb-30">Partnering with <span class="mil-marker">Motorland</span></h2>
                      </div>

                  </div>
                  <div className="col-lg-7 mil-mt-suptitle-offset" id='SystemShow'>
                      {/* <div className="mil-text mil-up mil-mb-30" >Motorland is an official dealer of automotive brands, including Biac, DFM, CFmoto, and AsiaStar. We collaborated with them on branding and social media marketing, enhancing their online presence and engaging their customers effectively. Additionaly, we have helped them in creating Technical sheet for all of their Vehicles and Designed 100+ Posts for them.</div> */}
                      
                      <div className="row">
                          <div className="col-lg-4">

                              {/* <div className="mil-item-frame mil-up mil-mb-30"> */}
                                  <div className="mil-about-counter mil-center">
                                      <div className="mil-avatar mil-mb-10">
                                          <img src='./img/covers/project/Mllog.webp' alt='img' />
                                          
                                      </div>
                                   
                                      {/* <h5 className="mil-upper mil-mb-10">Motorland </h5> */}
                                      {/* <p className="mil-text-sm mil-dark-soft">Project Agent</p>     */}
                                  </div>
                              {/* </div> */}

                          </div>
                          <div className="col-lg-8">

                              <div className="mil-text mil-up mil-mb-30" >Motorland is an official dealer of automotive brands, including Biac, DFM, CFmoto, and AsiaStar. We collaborated with them on branding and social media marketing, enhancing their online presence and engaging their customers effectively. Additionaly, we have helped them in creating Technical sheet for all of their Vehicles and Designed 100+ Posts for them.</div>
                              
                          </div>
                      </div>

                  </div>






                  <div className="col-lg-12" id='MObileShow' >
  <div
    className="mil-wrap-container"
    style={{
      padding: '1%',
      overflow: 'hidden', // To clear the float
      marginTop:"-30px"
    }}
  >
    {/* Image Section */}
    <img
      src="./img/covers/project/Mllog.webp"
      alt="Bajaj Auto"
      style={{
        float: 'left',
        width: '100px',
        height: 'auto',
        marginRight: '20px',
        borderRadius: '5px',
        filter: 'drop-shadow(4px 3px 4px grey)',
      }}
    />

    {/* Text Section */}
    <div
      style={{
        textAlign: 'justify',
        lineHeight: '1.5',
      }}
    >
      <p>
      Motorland is an official dealer of automotive brands, including Biac, DFM, CFmoto, and AsiaStar. We collaborated with them on branding and social media marketing, enhancing their online presence and engaging their customers effectively. Additionaly, we have helped them in creating Technical sheet for all of their Vehicles and Designed 100+ Posts for them.
      </p>
    </div>
  </div>
</div>








              </div>
          </div>
      </section>


      <div className="container" style={{marginTop:"-50px"}}>
          <div className="mil-divider-lg" />
      </div>



      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened" />

              <div className="mil-mb-90">
                  <h2 className="mil-upper mil-up"> Project Info</h2>
              </div>
              <div className="row mil-mb-30" style={{marginTop:"-60px"}}>
                  <div className="col-lg-6" >

                      <h6 className="mil-upper mil-up mil-mb-30">Project Component</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60" style={{display:'flex',gap:'30px'}}>
                          {/* <li> Branding and Social Media Marketing </li> */}
                           
                          <li> Branding </li> <li>  Social Media Marketing</li> 
                      </ul>

                  </div>
                  <div className="col-lg-6" >

                      <h6 className="mil-upper mil-up mil-mb-30">Client Industry</h6>
                      <ul className="mil-list mil-dark mil-up mil-mb-60" >
                          <li> Automotive (official dealer of Biac, DFM, CFmoto and AsiaStar) </li>
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



      <Suspense fallback={<div>Loading...</div>}>
        <MotorlandSlider  />
        {/* <FullImageSlider  /> */}
      </Suspense>











        <section>
          <div className="container mil-p-120-60">
              <div className="row">
                  <div className="col-md-6 col-lg-6">
                     
                      <div className="mil-prev-project mil-mb-60">
                          {/* <h4 className="mil-upper mil-up mil-mb-30">Previous project</h4> */}
                          <Link href='/Bajaj' className="mil-link mil-left-link mil-upper mil-up">Previous work <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                      
                  </div>
                  <div className="col-md-6 col-lg-6">
                      <div className="mil-next-project mil-mb-60">
                          {/* <h4 className="mil-upper mil-up mil-mb-30">Next project</h4> */}
                          <Link href='/Secondcup' className="mil-link mil-upper mil-up">Next work <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>










      
    </>
  );
};
export default Motorland;
