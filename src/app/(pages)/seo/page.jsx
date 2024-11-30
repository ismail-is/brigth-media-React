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
        default: "SEO ",
    },
    description: AppData.settings.siteDescription,
}

const seo = () => {
  return (
    <>
        <PageBanner pageTitle={"Search engine optimization"}  bgImage={"./img/allimg/all banners/mainbg.webp"} />

      <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    {/* <h2 className="mil-upper mil-up mil-mb-60">Description</h2> */}
                    <div className="mil-text mil-up mil-mb-40">
                        <p>At Bright Media, we’re committed to elevating your brand through expert SEO services. Our tailored strategies focus on driving organic traffic, boosting search rankings, optimizing performance, and connecting you with the right audience. Let’s make your brand stand out in the digital world!
                        </p>
                    </div>




                






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
                            <h6 className="mil-upper mil-up mil-mb-30">Our SEO Toolbox</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Google Analytics
                                </li>
                                <li >Google Search Console
                                </li>
                                <li >SEMRUSH
                                </li>
                                {/* <li >Adobe Photoshop</li> */}
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
                       
                        {/* <div className="mil-divider-lg mil-up mil-mb-30" /> */}
                    </React.Fragment>
                </div>
            </div>
            <section >
            <div className="container mil-p-120-60" style={{marginTop:"-50px"}}>
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                      <h4 className="mil-upper mil-up mil-mb-60">How we can help you?</h4>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60" >
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                                <img src='./img/socialmedia/Strategic Planning.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div><h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Customized Strategies</h4></div>
                            </div>
                            <p>Tailored SEO solutions designed to meet your unique business needs, ensuring long-term growth and targeted audience engagement</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                            <img src='./img/socialmedia/Content Creation.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30 " style={{fontSize:'16px'}}>
 	
     Improved Visibility</h4></div>
                            </div>
                            <p>Boosting search engine rankings with optimized keywords and content to help your brand reach the right audience effectively.</p>
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
                            <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Performance Optimization</h4></div>
                            </div>
                            <p>Enhancing website speed, mobile responsiveness, and user experience to increase engagement and improve conversion rates across devices.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/socialmedia/optimization.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}> 
 	
     Link Building</h4> </div>
                            </div>
                            <p>Acquiring high-quality backlinks from reputable sources to improve your website's authority, search rankings, and online visibility.</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </section>
        </div>
    </div>
</section>


{/* <AwardsSection /> */}







        {/* map */}
        {/* <Webslider/> */}


{/* <SocailPages/> */}
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
                            <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span></Link>
                            </div>
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
export default seo;
