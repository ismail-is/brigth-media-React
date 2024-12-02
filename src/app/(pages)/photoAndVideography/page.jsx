import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import CallToActionSection from "../../_components/sections/CallToAction";
import ContactInfoSection from "../../_components/sections/ContactInfo";
import SocailPages from "../../_components/sliders/SocailPages";
import PhotoPages from "../../_components/sliders/PhotoPages";

export const metadata = {
    title: {
        default: "PHOTOGRAPHY & VIDEO Production",
    },
    description: AppData.settings.siteDescription,
}

const PhotoAndVideography = () => {
  return (
    <>
        <PageBanner pageTitle={"PHOTOGRAPHY & VIDEO Production"}  bgImage={"./img/allimg/all banners/mainbg.webp"} />
        {/* <PageBanner pageTitle={"PHOTOGRAPHY & VIDEO Production"}  bgImage={"/img/photo/12.jpg"} /> */}

        <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    {/* <h2 className="mil-upper mil-up mil-mb-60">Description</h2> */}
                    <div className="mil-text mil-up mil-mb-60">
                        <p>At Bright Media, we capture the essence of your brand with breathtaking photography and videography. Our tailored approach captures your story, elevates your brand, and creates lasting impressions. let’s make your brand shine in every frame.
                        </p>
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
                            <div><h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>CREATIVE CONCEPT DEVELOPMENT

                            </h4></div>
                            </div>
                            <p>We’ll collaborate with you to develop unique photography and videography concepts that reflect your brand identity and captivate your audience.

                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                            <img src='./img/socialmedia/Content Creation.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30 " style={{fontSize:'16px'}}>HIGH-QUALITY PRODUCTION

                            </h4></div>
                            </div>
                            <p>Our team ensures every shot and frame is crafted with precision and creativity, delivering exceptional visual content tailored to your needs.

                            </p>
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
                            <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>TAILORED BRAND STORYTELLING

                            </h4></div>
                            </div>
                            <p>We bring your brand’s story to life through visuals that evoke emotion, inspire action, and leave a lasting impression on your audience.

                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/socialmedia/optimization.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>POST-PRODUCTION EXCELLENCE
                            </h4> </div>
                            </div>
                            <p>From editing to color grading, we enhance your visuals with professional post-production techniques that make your content truly stand out.
                            </p>
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
                            <h6 className="mil-upper mil-up mil-mb-30">Our Photography and Videography Toolbox</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Adobe After Effects</li>
                                <li >Adobe Premier Pro</li>
                                <li >Adobe Lightroom</li>
                                <li >Sony Alpha Mirrorless Camera</li>
                            </ul>
                        </>
                        <>
                            {/* <h6 className="mil-upper mil-up mil-mb-30">Stats </h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Workplace Consulting</li>
                                <li >3D Modeling Planning</li>
                                <li >Architecture</li>
                            </ul> */}
                        </>
                        <>
                            <div className="row">
                            <h6 className="mil-upper mil-up mil-mb-30">Stats </h6>
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="80">80</span>+</h5>
                                        <p className="mil-dark" >Session done</p>
                                    </div>
                                   
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="1000">1,000</span>+</h5>
                                        <p className="mil-dark" >Photos Taken</p>
                                    </div>
                                   

                                </div>
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="600">600</span>+</h5>
                                        <p className="mil-dark" >Videos Edited </p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="35">35</span>+</h5>
                                        <p className="mil-dark" >Clients Served</p>
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







<PhotoPages/>


        {/* map */}
        {/* <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div> */}
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
                    {/* <CallToActionSection/> */}
                      
      <ContactInfoSection/>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default PhotoAndVideography;
