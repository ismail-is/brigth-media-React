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
        <div className="col-12">

<div className="mil-center mil-mb-10">
    <span className="mil-suptitle mil-upper mil-up mil-mb-30" >Our Team</span>
    <h2 className="mil-upper mil-up mil-mb-30">Meet the Team Behind  <span class="mil-marker">Our Success</span></h2>
    {/* <p className="mil-up" ></p> */}
</div>

</div>
        <div className="row mil-team-grid" style={{ marginBottom: '40px' ,display:"flex",justifyContent:"center"}}>
            <div className="col-sm-6 col-lg-3 mil-grid-item mil-up">
                <div className="mil-team-member">
                    <div className="mil-avatar mil-mb-30">
                        <img src="./img/allimg/Team/shahil.webp" alt="Placeholder Image" />
                    </div>
                    <h6 className="mil-upper mil-mb-10">Moideen Shahil</h6>
                    <p className="mil-dark-soft">Founder & CEO</p>
                </div>
            </div>
           
            
            
        </div>



        <div className="row mil-team-grid" style={{ marginBottom: '40px' }}>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/shamal.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Shamal Hussain Manager

</h6>
      <p className="mil-dark-soft">Manager</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/bmZafar.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Shoaib Zafar</h6>
      <p className="mil-dark-soft">COO</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/sajeel.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Sajeel</h6>
      <p className="mil-dark-soft">GRAPHIC DESIGNER</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/shakeeb.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Ismail Shakeeb</h6>
      <p className="mil-dark-soft">VIDEO EDITOR</p>
    </div>
  </div>
</div>


<div className="row mil-team-grid" style={{ marginBottom: '40px' }}>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/suraj.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Suraj Poojari</h6>
      <p className="mil-dark-soft">SOCIAL MEDIA MANAGER</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/ismail.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Ismail</h6>
      <p className="mil-dark-soft">WEB DEVELOPER</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/raif.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Raif</h6>
      <p className="mil-dark-soft">Intern</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/abid.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Abid</h6>
      <p className="mil-dark-soft">GRAPHIC DESIGNER</p>
    </div>
  </div>
</div>


<div className="row mil-team-grid" style={{ marginBottom: '40px' }}>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/bmakshay.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Akshay D’Silva</h6>
      <p className="mil-dark-soft">VIDEO EDITOR</p>
    </div>
  </div>
  <div className="col-6 col-sm-6 col-lg-3 mil-grid-item mil-up">
    <div className="mil-team-member">
      <div className="mil-avatar mil-mb-30">
        <img src="./img/allimg/Team/bmsouleymane.webp" alt="Placeholder Image" />
      </div>
      <h6 className="mil-upper mil-mb-10">Souleymane</h6>
      <p className="mil-dark-soft">Photographer/Videographer</p>
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
