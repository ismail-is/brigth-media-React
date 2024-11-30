"use client";

import { useState } from "react";
import Link from "next/link";

const Map = ({ categories }) => {
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
            {/* projects row */}
            <div className="row">
                <div className="col-lg-12" style={{ marginBottom: "230px", marginTop: '60px' }}>
                    <div className="mil-portfolio-grid mil-up">
                        <div className="grid-sizer" />

                        {/* Static content */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px' }}>
                            <div style={{ flex: '1 1 calc(25% - 10px)', marginBottom: '20px' }}>
                                <Link href="/" className="mil-portfolio-item-2 mil-long-item mil-mb-30">
                                    <img src="https://via.placeholder.com/300x600" alt="Project India" style={{ maxWidth: '100%', height: 'auto' }} />
                                    <div className="mil-project-descr">
                                        <div className="mil-link mil-upper">
                                            Start A Project
                                            <div className="mil-arrow mil-light">
                                                <img src="./img/icons/1.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mil-category">INDIA</div>
                                </Link>
                            </div>
                            <div style={{ flex: '1 1 calc(25% - 10px)', marginBottom: '20px' }}>
                                <Link href="/" className="mil-portfolio-item-2 mil-long-item mil-mb-30">
                                    <img src="https://via.placeholder.com/300x600" alt="Project Ivory Coast" style={{ maxWidth: '100%', height: 'auto' }} />
                                    <div className="mil-project-descr">
                                        <div className="mil-link mil-upper">
                                            Start A Project
                                            <div className="mil-arrow mil-light">
                                                <img src="./img/icons/1.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mil-category">IVORY COAST</div>
                                </Link>
                            </div>
                            <div style={{ flex: '1 1 calc(25% - 10px)', marginBottom: '20px' }}>
                                <Link href="/" className="mil-portfolio-item-2 mil-long-item mil-mb-10">
                                    <img src="https://via.placeholder.com/300x600" alt="Project UAE" style={{ maxWidth: '100%', height: 'auto' }} />
                                    <div className="mil-project-descr">
                                        <div className="mil-link mil-upper">
                                            Start A Project
                                            <div className="mil-arrow mil-light">
                                                <img src="./img/icons/1.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mil-category">UAE</div>
                                </Link>
                            </div>
                            <div style={{ flex: '1 1 calc(25% - 10px)', marginBottom: '20px' }}>
                                <Link href="/" className="mil-portfolio-item-2 mil-long-item mil-mb-10">
                                    <img src="https://via.placeholder.com/300x600" alt="Project Qatar" style={{ maxWidth: '100%', height: 'auto' }} />
                                    <div className="mil-project-descr">
                                        <div className="mil-link mil-upper">
                                            Start A Project
                                            <div className="mil-arrow mil-light">
                                                <img src="./img/icons/1.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mil-category">QATAR</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* projects row end */}
        </>
    );
};

export default Map;
