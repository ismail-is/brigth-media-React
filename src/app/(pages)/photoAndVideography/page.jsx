import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import CallToActionSection from "../../_components/sections/CallToAction";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const PhotoAndVideography = () => {
  return (
    <>
        <PageBanner pageTitle={"PHOTOGRAPHY & VIDEOGRAPHY"}  bgImage={"/img/photo/12.jpg"} />

      <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    <h2 className="mil-upper mil-up mil-mb-60">Description</h2>
                    <div className="mil-text mil-up mil-mb-60">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>

                    <h2 className="mil-upper mil-up mil-mb-60">Benefits</h2>
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="mil-text mil-up mil-mb-30">
                                <p>Our architectural work improves people's lives. We work closely with clients to create functional solutions that creatively respond to the needs of individuals and organizations. From corporate facility innovation to commercial developments, we create beautiful, balanced designs fueled by big ideas.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Lorem ipsum dolor sit amet</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Consectetur adipiscing elit</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Proin nec scelerisque quam</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Proin nec scelerisque quam</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mil-divider-lg mil-up mil-mb-60" />
                </>
            </div>
            <div className="col-lg-5">
                <div className="mil-sidebar-frame mil-mb-60">
                    <h2 className="mil-upper mil-up mil-mb-60">Info Areas</h2>

                    <React.Fragment >
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Master Planning</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Workplace Consulting</li>
                                <li >3D Modeling Planning</li>
                                <li >Architecture</li>
                            </ul>
                        </>
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Master Planning</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Workplace Consulting</li>
                                <li >3D Modeling Planning</li>
                                <li >Architecture</li>
                            </ul>
                        </>
                        <>
                            <div className="row">
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                   
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                   

                                </div>
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
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










        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua" 
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
                            <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                    <CallToActionSection/>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default PhotoAndVideography;
