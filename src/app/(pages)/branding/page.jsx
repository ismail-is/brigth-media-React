import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import LatestPostsSection from "../../_components/sections/LatestPosts";
import CallToActionSection from "../../_components/sections/CallToAction";
import SocialSlider from "../../_components/sliders/SocialSlider";
import Brandpages from "../../_components/sliders/Brandpages";
import ContactInfoSection from "../../_components/sections/ContactInfo";

export const metadata = {
    title: {
        default: "Branding",
    },
    description: AppData.settings.siteDescription,
}

const Branding = () => {
  return (
    <>
        <PageBanner pageTitle={"Branding"}  bgImage={"./img/allimg/all banners/mainbg.webp"} />

        <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    <h3 className="mil-upper mil-up mil-mb-60">What can <span class="mil-marker">we do</span></h3>
                    <div className="mil-text mil-up mil-mb-60">
                        <p>Make your brand stand out from the rest, Let us redefine your brand by utilizing the right approach. we specialize in crafting quality brand identities that resonate with your audience and set you apart from the competition. Our strategic approach, creative expertise, and attention to detail ensure that your brand leaves a lasting impression and drives meaningful connections with your target market.</p>
                    </div>




                    <section >
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                      <h3 className="mil-upper mil-up mil-mb-60">How We    <span class="mil-marker">Work</span></h3>
                      <div className="mil-text mil-up mil-mb-60">
                        <p>At Bright Media, we believe that successful branding begins with a deep understanding of your business, audience, and objectives. Our process is collaborative and tailored to your unique needs</p>
                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/Branding/discovery.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div><h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Discovery</h4></div>
                            </div>
                            <p> We start by conducting thorough research to gain insights into your industry, competitors, and target audience.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                            <img src='./img/Branding/strategy.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30 " style={{fontSize:'16px'}}>Strategy</h4></div>
                            </div>
                            <p>Based on our findings, we develop a comprehensive branding strategy that outlines key messaging, positioning, and visual elements to guide the creation of your brand identity.</p>
                        </div>

                    </div>
                   
                </div>



                <div className="row">
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/Branding/Concept Development.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div>
                            <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Concept Development</h4></div>
                            </div>
                            <p>Our creative team brings your brand to life through innovative concept development, exploring various design options and visual elements to capture the essence of your brand.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/Branding/Design Implementation.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Design Implementation</h4> </div>
                            </div>
                            <p>Once the concept is finalized, we meticulously craft your brand identity, including logos, color palettes, typography, and brand guidelines, ensuring consistency across all touchpoints.</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </section>






                    {/* <h3 className="mil-upper mil-up mil-mb-60">SERVICE OUTCOME</h3>
                    <div className="row justify-content-between">
                    <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Increased online presence</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Enhanced Audience Engagement</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Higher engagement and interactions</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Boosted website traffic</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Enhanced lead generation</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Increased sales and conversions</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Maximized return on investment (ROI)</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Data-driven insights and reporting</li>
                            </ul>
                        </div>
                    </div> */}
                    
                    <div className="mil-divider-lg mil-up mil-mb-60" style={{marginTop:'-70px'}}  />
                </>
            </div>
            <div className="col-lg-5">
                <div className="mil-sidebar-frame mil-mb-60">
                    {/* <h2 className="mil-upper mil-up mil-mb-60">Info Areas</h2> */}

                    <React.Fragment >
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Our Branding Toolbox</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Adobe Illustrator</li>
                                <li >Adobe InDesign</li>
                                <li >CorelDRAW</li>
                                <li >PhotoShop</li>
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
                            <h6 className="mil-upper mil-up mil-mb-30">Stats</h6>
                                <div className="col-12" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5" style={{textAlign:"center"}}><span className="mil-counter" data-number="100"  >100</span>+</h5>
                                        <p className="mil-dark" style={{textAlign:"center"}}>Unique Identities Created</p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                    <h5 className="mil-mb-5" style={{textAlign:"center"}}><span className="mil-counter" data-number=" 95"  > 95</span>%</h5>
                                        <p className="mil-dark" style={{textAlign:"center"}}>Client Satisfaction</p>
                                    </div>
                                 
                                   

                                </div>
                                <div className="col-12" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                    <h5 className="mil-mb-5" style={{textAlign:"center"}}><span className="mil-counter" data-number="85"  >85</span>%</h5>
                                        <p className="mil-dark" style={{textAlign:"center"}}>Growth Impact</p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5" style={{textAlign:"center"}}><span className="mil-counter" data-number="85"  >85</span>%</h5>
                                        <p className="mil-dark" style={{textAlign:"center"}}>Brand Recognition</p>
                                    </div>
                                   

                                </div>
                            </div>
                        </>
                        {/* <div className="mil-divider-lg mil-up mil-mb-30" /> */}
                    </React.Fragment>
                </div>
            </div>
        </div>
    </div>
</section>










        {/* map */}
        {/* <SocialSlider/> */}
        {/* <LatestPostsSection/> */}
        {/* map end */}
        <Brandpages/>

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We'd love to talk</h2>
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
                    {/* <CallToActionSection/> */}
                    <ContactInfoSection/>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Branding;
