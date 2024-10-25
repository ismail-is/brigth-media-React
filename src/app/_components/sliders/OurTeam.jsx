"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const OurTeam = ({ categories }) => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        isotope.current = new Isotope(".mil-team-grid", {
            itemSelector: ".mil-grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: '.mil-grid-item'
            },
            transitionDuration: '0.5s',
        });
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == key) {
                filter.classList.add("mil-current");
            } else {
                filter.classList.remove("mil-current");
            }
        });
    };

    return (
      <>
        {/* filter */}
        <div className="mil-filter mil-up mil-mb-90">
            <div className="mil-filter-links">
                {/* <a href="#" data-filter="*" className="mil-current" onClick={(e) => handleFilterKeyChange("*", e)}>All</a> */}
                {/* {categories.map((item, key) => (
                <a href="#" data-filter={`${item.slug}`} key={`team-filter-item-${key}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>{item.name}</a>
                ))} */}
            </div>
            
        </div>
        {/* filter end */}

        {/* static content with Lorem Ipsum */}
       
        <div className="row mil-team-grid" style={{marginBottom:'40px'}} >
            <div className="col-sm-6 col-lg-3 mil-grid-item mil-up">
                <Link href="#" className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src="https://ruizarch-react.vercel.app/img/faces/2.jpg" alt="Placeholder Image" />
                    </div>
                    <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
                    <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
                </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-grid-item mil-up">
                <Link href="#" className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src="https://ruizarch-react.vercel.app/img/faces/3.jpg" alt="Placeholder Image" />
                    </div>
                    <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
                    <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
                </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-grid-item mil-up">
                <Link href="#" className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src="https://ruizarch-react.vercel.app/img/faces/8.jpg" alt="Placeholder Image" />
                    </div>
                    <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
                    <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
                </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-grid-item mil-up">
                <Link href="#" className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src="https://ruizarch-react.vercel.app/img/faces/10.jpg" alt="Placeholder Image" />
                    </div>
                    <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
                    <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
                </Link>
            </div>
        </div>
        {/* static content end */}
      </>
    );
};

export default OurTeam;
