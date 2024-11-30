import Data from "@data/sections/latest-projects.json";
import Link from "next/link";

const Socialmediasun = ( { projects } ) => {
    const projectRows0 = [];

    for (var i = 0; i < Data.numOfItems; i += 3 ) {
        projectRows0.push(projects.slice(i, 3 + i));
    }

    const projectRows = [];

    projectRows0.map((row, row_key) => {
        var row1_items = [];
        var row2_items = [];
        row.map((item, row2_key) => {
            if ( row2_key < 2 ) {
                row1_items.push(item);
            } else {
                row2_items.push(item);
            }
        });
        projectRows.push(row1_items);
        projectRows.push(row2_items);
    });

    return (
        <>
         <div className="mil-filter mil-up mil-mb-90">
            <div className="mil-filter-links">
            <Link href="/projects"  >All</Link>
                <Link href="/Socialmedia"  className="mil-current">Social Media Marketing</Link>
                <Link href="/paidAds"  >Paid Ads</Link>
                <Link href="/web"  >Web Development</Link>
                <Link href="/branding"  > Branding</Link>
                <Link href="/Tonino"  >PHOTOGRAPHY & VIDEOGRAPHY</Link>
                {/* <a href="#" data-filter={`${item.slug}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>{item.name}</a> */}
            </div>
        </div>
            {/* portfolio */}
            <section>
                {/* <div className="container-fluid">
                    <div className="row">
                        {projectRows.map((row, row_key) => (
                        <div className="col-md-6 col-lg-3" key={`projects-row-${row_key}`}>
                            {row.map((item, key) => (
                            <Link href={`/projects/${item.id}`} key={`projects-item-${key}`} className={row.length == 2 ? "mil-portfolio-item mil-square-item mil-up mil-mb-30" : "mil-portfolio-item mil-long-item mil-up mil-mb-30"}>
                                <img src={item.image} alt={item.title} />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p>{item.short}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                        ))}
                    </div>
                </div> */}



              
               











               {/* second */}
               <div className="container-fluid">
                    <div className="row">

                    <div className="col-md-6 col-lg-3" >
                            <Link href='/pulse '  className="mil-portfolio-item mil-long-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/lg/secondcup1.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">Pulse </h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p> pulse</p>
                                </div>
                            </Link>
                        </div>


                        <div className="col-md-2 col-lg-3" >
                            <Link href='/Hafil'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/hafil.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">Hafil Trading & Services</h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p>Trading </p>
                                </div>
                            </Link>
                            <Link href='/Azimgroup'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/Azimlogo.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20"> Azim Group </h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p>Group of companies </p>
                                </div>
                            </Link>
                        </div>


                      



                        <div className="col-md-6 col-lg-3" >
                            <Link href='/MCM'  className="mil-portfolio-item mil-long-item mil-up mil-mb-30" >
                                <img src=' ./img/covers/project/mcm.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">MCM </h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p> Construction Materials </p>
                                </div>
                            </Link>
                        </div>


                        <div className="col-md-6 col-lg-3" >
                            <Link href='/Metroways  '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/Metroways.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">Metroways </h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p>Travel Agency</p>
                                </div>
                            </Link>
                            <Link href='/'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/giti.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20"> GTSW </h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p> Battery and Tyre Manufacturers  </p>
                                </div>
                            </Link>
                        </div>



                    </div>
                </div>
               
               {/* second */}
            </section>
            {/* blog end */}
        </>
    );
};

export default Socialmediasun;