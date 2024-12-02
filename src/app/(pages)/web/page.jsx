import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import LatestPostsSection from "../../_components/sections/LatestPosts";
import CallToActionTwoSection from "../../_components/sections/CallToActionTwo";
import CallToActionSection from "../../_components/sections/CallToAction";
import ProcessSlider from "../../_components/sliders/Process";
import WebDev from "../../_components/sliders/WebDev";
import ContactInfoSection from "../../_components/sections/ContactInfo";

export const metadata = {
    title: {
        default: "Web Development",
    },
    description: AppData.settings.siteDescription,
}

const Web = () => {
  return (
    <>
        <PageBanner pageTitle={"Web Development"} bgImage={"./img/allimg/all banners/mainbg.webp"} />

        <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    {/* <h3 className="mil-upper mil-up mil-mb-60">WHAT WE DO</h3> */}
                    <div className="mil-text mil-up mil-mb-60">
                        <p>Explore our range of website services designed to enhance your online Visibility. From captivating web design to engaging content creation, we offer tailored solutions to elevate your brand. We offer a full suite of services such as Static, Dynamic, E-Commerce website tailored to meet your unique needs. Let us transform your website into a powerful tool for growth and success in the Digital landscape.</p>
                    </div>




                    <section >
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                      <h3 className="mil-upper mil-up mil-mb-60">Types of Websites  <span class="mil-marker">we provide</span></h3>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/web/Static Dynamic Websites.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div><h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Static & Dynamic Websites</h4></div>
                            </div>
                            <p>They feature dynamic content that can change based on user interactions or data input. hey are typically built using HTML and CSS and are suitable for businesses or Corporates who require a online presence to showcase their products or services.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                            <img src='./img/web/E-commerce.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30 " style={{fontSize:'16px'}}>E-commerce</h4></div>
                            </div>
                            <p>E-commerce websites allow businesses to sell products or services online. They include features such as shopping carts, secure payment gateways, and inventory management systems to facilitate online transactions.</p>
                        </div>

                    </div>
                   
                </div>



                <div className="row">
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/web/cms.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div>
                            <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>CMS</h4></div>
                            </div>
                            <p>Content Management Systems websites are built using platforms like WordPress, Joomla, or Drupal, which allow users to easily create, manage, and update website content without extensive technical knowledge. CMS websites are ideal for blogs, news sites, and small to medium-sized businesses.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src='./img/web/lms.png' alt='img'  style={{height:'30px'}} />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>LMS</h4> </div>
                            </div>
                            <p>Learning Management Systems websites are designed for online learning and education. They provide a platform for instructors to create and deliver courses, manage student enrollments, track progress, and assess learning outcomes. Examples of LMS platforms include Moodle, Canvas, and Blackboard.</p>
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
                    
                    <div className="mil-divider-lg mil-up mil-mb-10"   style={{marginTop:'-30px'}}/>
                </>
            </div>
            <div className="col-lg-5">
                <div className="mil-sidebar-frame mil-mb-60">
                    {/* <h2 className="mil-upper mil-up mil-mb-60">Info Areas</h2> */}

                    <React.Fragment >
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Our Web Development Toolbox</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >HTML & CSS </li>
                                <li >JavaScript</li>
                                <li >React JS</li>
                                <li >Next JS</li>
                            </ul>
                        </>
                        <>
                            {/* <h6 className="mil-upper mil-up mil-mb-30">Stats </h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Average Build Time 2-4 weeks</li>
                                <li >99.9% Uptime Assurance</li>
                                <li >100% Custom-Built Solutions</li>
                                <li >95% Client Satisfaction Rate</li>
                            </ul> */}
                        </>
                        <>
                            <div className="row">
                            <h6 className="mil-upper mil-up mil-mb-30">Stats </h6>
                                <div className="col-12" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                       
                                        <p className="mil-dark" >Average Build Time  <h5 ><span className="mil-counter" data-number="2">2</span>-<span className="mil-counter" data-number="4">4</span></h5> weeks</p>
                                    </div>
                                   
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="100">100</span>%</h5>
                                        <p className="mil-dark" >Custom-Built Solutions</p>
                                    </div>
                                   

                                </div>
                                <div className="col-12" >

                                

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="99.9">99.9</span>%</h5>
                                        <p className="mil-dark" >Uptime Assurance</p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" data-number="95">95</span>%</h5>
                                        <p className="mil-dark" >Client Satisfaction Rate</p>
                                    </div>
                                   

                                </div>
                            </div>
                        </>
                        {/* <div className="mil-divider-lg mil-up mil-mb-130" /> */}
                    </React.Fragment>
                </div>
            </div>
        </div>
    </div>
</section>





<WebDev/>


{/* <ProcessSlider bgStyle={"soft"} /> */}


        {/* map */}
        {/* <LatestPostsSection/> */}
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
                    {/* <CallToActionTwoSection/> */}
                    {/* <CallToActionSection/> */}
                    <ContactInfoSection/>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Web;
