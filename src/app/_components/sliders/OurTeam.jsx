"use client";

import { useState } from "react";
import Link from "next/link";

const OurTeam = ({ categories }) => {
    const [filterKey, setFilterKey] = useState("*");

    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);

        // Filter Links Active State Update
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue === key) {
                filter.classList.add("mil-current");
            } else {
                filter.classList.remove("mil-current");
            }
        });
    };

    return (
      <>
        {/* filter */}
        <div className="mil-filter mil-up mil-mb-30">
            <div className="mil-filter-links">
                {/* Uncomment and edit the categories map to enable filtering */}
                {/* <a href="#" data-filter="*" className="mil-current" onClick={(e) => handleFilterKeyChange("*", e)}>All</a> */}
                {/* {categories.map((item, key) => (
                    <a href="#" data-filter={item.slug} key={`team-filter-item-${key}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>
                        {item.name}
                    </a>
                ))} */}
            </div>
        </div>
        {/* filter end */}

        {/* static content */}

        <div className="row mil-team-grid" style={{ marginBottom: '40px' ,display:"flex",justifyContent:"center"}}>
            <div className="col-sm-6 col-lg-3 mil-grid-item mil-up">
                <div className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src="https://ruizarch-react.vercel.app/img/faces/2.jpg" alt="Placeholder Image" />
                    </div>
                    <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
                    <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
                </div>
            </div>
           
            
            
        </div>



        <div className="row mil-team-grid" style={{ marginBottom: '40px' }}>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/2.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/3.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/8.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/10.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
</div>


<div className="row mil-team-grid" style={{ marginBottom: '40px' }}>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/2.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/3.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/8.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="https://ruizarch-react.vercel.app/img/faces/10.jpg" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Lorem Ipsum</h6>
      <p className="mil-dark-soft">Lorem Ipsum Dolor</p>
    </div>
  </div>
</div>
<div className="mil-filter mil-up mil-mb-80">
            <div className="mil-filter-links" ></div>
            </div>
            
        
        {/* static content end */}
      </>
    );
};

export default OurTeam;
