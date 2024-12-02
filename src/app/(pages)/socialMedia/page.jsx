import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import LatestPostsSection from "../../_components/sections/LatestPosts";
import CallToActionSection from "../../_components/sections/CallToAction";
import ProcessSlider from "../../_components/sliders/Process";
import Webslider from "../../_components/sliders/Webslider";
import AwardsSection from "../../_components/sections/Awards";
import SocialSlider from "../../_components/sliders/SocialSlider";
import SocailPages from "../../_components/sliders/SocailPages";
import ContactInfoSection from "../../_components/sections/ContactInfo";

export const metadata = {
    title: {
        default: "social media ",
    },
    description: AppData.settings.siteDescription,
}

const SocialMedia = () => {
  return (
    <>
        <PageBanner pageTitle={"Social Media Marketing"}  bgImage={"./img/allimg/all banners/mainbg.webp"} />

      <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    {/* <h2 className="mil-upper mil-up mil-mb-60">Description</h2> */}
                    <div className="mil-text mil-up mil-mb-60">
                        <p>At Bright Media, we're dedicated to giving your brand a powerful online presence. Our tailored solutions are all about making genuine connections, boosting visibility, engaging contents and bringing your brand to life in the digital world. Let's make your brand shine brighter than ever!</p>
                    </div>




                    <section >
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                      <h4 className="mil-upper mil-up mil-mb-60">How we can help you?</h4>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60" >
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                                <img src='./img/socialmedia/Strategic Planning.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div><h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Strategic Planning</h4></div>
                            </div>
                            <p>We'll work closely with you to develop a tailored social media strategy that aligns with your brand objectives and resonates with your target audience</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                            <img src='./img/socialmedia/Content Creation.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30 " style={{fontSize:'16px'}}>Content Creation</h4></div>
                            </div>
                            <p>Our team of creatives will craft engaging content that captivates your audience, from eye-catching visuals to compelling copywriting</p>
                        </div>

                    </div>
                   
                </div>



                <div className="row">
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/socialmedia/Platform.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div>
                            <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Platform Management</h4></div>
                            </div>
                            <p>Leave your social media management to us—from content scheduling to community engagement, we ensure seamless brand presence across all channels.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/socialmedia/optimization.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Analytics and Optimization</h4> </div>
                            </div>
                            <p>We'll track key metrics and analyze performance to continuously refine and optimize your social media strategy, ensuring maximum impact and ROI.</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </section>






                    {/* <h3 className="mil-upper mil-up mil-mb-60">Outcome of the Services</h3>
                    <div className="row justify-content-between">
                    <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up mil-hover mil-up"><img src="./img/icons/11.svg" alt="icon" />Increased Brand Awareness</li>
                                <li className="mil-hover mil-up"><img src="./img/icons/11.svg" alt="icon" />Enhanced Audience Engagement</li>
                                <li className="mil-hover mil-up"><img src="./img/icons/11.svg" alt="icon" />Growth in Followership</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-hover mil-up"><img src="./img/icons/11.svg" alt="icon" />Higher Website Traffic</li>
                                <li className="mil-hover mil-up"><img src="./img/icons/11.svg" alt="icon" />Measurable Results</li>
                                <li className="mil-hover mil-up"><img src="./img/icons/11.svg" alt="icon" />Improved Brand Reputation</li>
                            </ul>
                        </div>
                    </div> */}
                    
                    {/* <div className="mil-divider-lg mil-up mil-mb-60" /> */}
                </>
            </div>
            <div className="col-lg-5">
                <div className="mil-sidebar-frame mil-mb-60">
                    {/* <h2 className="mil-upper mil-up mil-mb-60">Info Areas</h2> */}

                    <React.Fragment >
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Our Social Media Toolbox</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Meta Business Suite</li>
                                <li >SemRush </li>
                                <li >Hootsuite</li>
                                <li >Adobe Photoshop</li>
                            </ul>
                        </>
                        <>
                            {/* <h6 className="mil-upper mil-up mil-mb-30">Stats</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Workplace Consulting</li>
                                <li >3D Modeling Planning</li>
                                <li >Architecture</li>
                            </ul> */}
                        </>
                        <>
                            <div className="row">
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="10" >10</span>K+</h5>
                                        <p className="mil-dark" style={{textWrap:"balance"}} >Average Engagement Rate</p>
                                    </div>
                                   
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="99" >99</span>%</h5>
                                        <p className="mil-dark" >Timely Posting Accuracy</p>
                                    </div>
                                   

                                </div>
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="100">100</span>% </h5>
                                        <p className="mil-dark" >Tailored Content Strategy</p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="92">92</span>%</h5>
                                        <p className="mil-dark" >Client Retention Rate</p>
                                    </div>
                                   

                                </div>
                            </div>
                        </>
                        <div className="mil-divider-lg mil-up mil-mb-30" />
                    </React.Fragment>
                </div>
            </div>
        </div>
    </div>
</section>


<AwardsSection />







        {/* map */}
        {/* <Webslider/> */}


<SocailPages/>
        {/* <SocialSlider/> */}



        {/* <LatestPostsSection/> */}
        {/* <ProcessSlider bgStyle={"soft"} /> */}
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                            <p className="mil-up mil-mb-30">Got something on your mind? Reach out to us today, and let’s start a meaningful conversation and explore solutions.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            {/* <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span></Link>
                            </div> */}
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                    {/* <CallToActionSection /> */}
                    <ContactInfoSection />
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default SocialMedia;
