"use client";

import Data from "@data/sections/awards.json";

import { useEffect } from "react";
import { HoverImages } from "@common/hoverImages";

const AwardsSection = () => {
  useEffect(() => {
    HoverImages();
  }, []);

  return (
    <>
        {/* awards */}
        <section style={{marginTop:'-80px'}}>
            <div className="container mil-p-120-90" >
                <div className="mil-background-grid mil-softened"></div>

                <div className="row justify-content-between">
                    <div className="col-lg-6 col-sm-3 col-lg-3">

                        {/* <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                            <a href={Data.button.link} className="mil-link mil-upper mil-up">
                                {Data.button.label} 
                                <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span>
                            </a>
                        </div> */}
                          <div className="mil-hover-images mil-up">
                            <div>
                                
                            </div>
                            <ul>
                                {Data.items.map((item, key) => (
                                <li className="mil-up" key={`awards-item-${key}`}>
                                    <a className="mil-hover-item" href="#." onClick={(e) => {e.preventDefault();}} data-src={item.image}>
                                        {/* <p>{item.year}</p> */}
                                        <p  className="mil-up mil-hover ">  <img src="./img/icons/11.svg" alt="icon" /></p>
                                        <span className="mil-h4" style={{color:"black"}}>{item.title}</span>
                                    </a>
                                </li>
                                ))}
                            </ul>
                            {/* <div className="mil-img-wrapper mil-mb-30">
                                <img src={Data.image.url} alt={Data.image.alt} />
                            </div> */}
                        </div>

                    </div>
                    <div className="col-lg-6 col-sm-3 col-lg-3">

                        <div className="mil-hover-images mil-up">
                            <ul>
                                {Data.items2.map((item, key) => (
                                <li className="mil-up mil-hover" key={`awards-item-${key}`}>
                                    <a className="mil-hover-item" href="#." onClick={(e) => {e.preventDefault();}} data-src={item.image}>
                                        <p  className="mil-up mil-hover ">  <img src="./img/icons/11.svg" alt="icon" /></p>
                                        <span className="mil-h4" style={{color:"black"}}>{item.title}</span>
                                    </a>
                                </li>
                                ))}
                            </ul>
                            {/* <div className="mil-img-wrapper mil-mb-30">
                                <img src={Data.image.url} alt={Data.image.alt} />
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </section>
        {/* advantages end */}
    </>
  );
};

export default AwardsSection;