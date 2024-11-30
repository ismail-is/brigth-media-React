import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const contact = () => {
  return (
    <>
        <PageBanner pageTitle={"Contact us"} breadTitle={"Contact"} bgImage={"./img/allimg/all banners/mainbg.webp"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Info Contact</h2>
                            <p className="mil-up mil-mb-40">Let’s collaborate! Contact us today to begin your brand's digital transformation and achieve outstanding results with our expert team.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <img src="./img/allimg/all banners/contact page.webp" alt="img" style={{"width": "100%", "height": "200px", "objectFit": "cover", "objectPosition": "0 -60px"}} className="mil-mb-30" />

                            {/* <div className="mil-sidebar-info">

                                <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>USA</li>
                                    <li>New York - 1800 Wazee Street</li>
                                    <li>Suite 300 NY, NY 80202</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>+7 (200) 600-30-30</li>
                                    <li>+7 (200) 200 - 80 - 02</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>info@ruizarch.com</li>
                                    <li>hello@ruizarch.com</li>
                                </ul>
                                
                            </div> */}
                            <div className="mil-sidebar-info" style={{height:"230px"}}>

{/* <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
<ul className="mil-list mil-dark mil-up mil-mb-30">
    <li>USA</li>
    <li>New York - 1800 Wazee Street</li>
    <li>Suite 300 NY, NY 80202</li>
</ul> */}
<h6 className="mil-upper mil-up mil-mb-20">Phone</h6>
<ul className="mil-list mil-dark mil-up mil-mb-20">
<li> <a href="https://wa.me/22597979387" target="_blank">+225 97 97 93 87</a></li>
<li> <a href="https://wa.me/910797979387" target="_blank">+91 0797 979 387</a></li>

</ul>
<h6 className="mil-upper mil-up mil-mb-20">Email</h6>
<ul className="mil-list mil-dark mil-up">
    <li><a href="mailto:info@brightmedia.tech">info@brightmedia.tech</a></li>
    <li><a href="mailto:hello@brightmedia.tech">hello@brightmedia.tech</a></li>
  
</ul>

</div>

                        </div>

                    </div>
                    {/* <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Wills Point</span>
                                    <p className="mil-up">10233 Gaillard Lake Est <br/>Suite 420 <br/>Houston, TX 75169 <br/>(903) 560 - 9830</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Chicago</span>
                                    <p className="mil-up">10233 Gaillard Lake Est <br/>Suite 420 <br/>Houston, TX 75169 <br/>(903) 560 - 9830</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Harriman</span>
                                    <p className="mil-up">10233 Gaillard Lake Est <br/>Suite 420 <br/>Houston, TX 75169 <br/>(903) 560 - 9830</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">INDIA</span>
                                    <p className="mil-up">2nd floor, Regal Park, Mission Street, State Bank, Mangalore 575001</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">IVORY COAST</span>
                                    <p className="mil-up">11 BP 2498- 11, 4th Floor, Waimea Bldg, Marcory Boulevard VGE, Abidjan, Côte d'Ivoire</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">UAE</span>
                                    <p className="mil-up">Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">QATAR</span>
                                    <p className="mil-up">Doha-Qatar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6823645248483!2d74.83292137358698!3d12.863780617236023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b02ed20aa87%3A0xace36fe47660c423!2sBright%20Media%20Tech!5e0!3m2!1sen!2sin!4v1732536150662!5m2!1sen!2sin" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                            <p className="mil-up mil-mb-30">Got something on your mind? Reach out to us today, and let’s start a meaningful conversation and explore solutions.
                            </p>
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
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default contact;

