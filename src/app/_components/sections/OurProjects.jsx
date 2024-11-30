import Data from "@data/sections/latest-projects.json";
import Link from "next/link";

const OurProjects = ( { projects } ) => {
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

<div className="mil-filter mil-up mil-mb-90">
            <div className="mil-filter-links">
                <Link href="/projects" data-filter="*" className="mil-current">All</Link>
                <Link  href='/SocialMediaMarketing'>Social Media Marketing</Link>
                <Link  href='/'>Paid Ads</Link>
                <Link  href='/WebDevelopment'>Web Development</Link>
                <Link  href='/Brand'>Branding</Link>
                <Link  href='/'>PHOTOGRAPHY & VIDEOGRAPHY</Link>
            </div>
        </div>















                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-lg-3" >
                        {/* <div className= "mil-portfolio-item-2 mil-long-item mil-mb-30" > */}
                            <Link href='/Bajaj'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/bajaj.webp' alt='img' />
                                <div className="mil-project-descr">
                                    {/* <h4 className="mil-upper mil-mb-20" style={{fontSize:'12px'}}>Bajaj</h4> */}
                                    <h4 className="mil-upper  mil-text-sm">Bajaj</h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <div className="mil-link mil-upper"><div className="mil-arrow" ><p style={{fontSize:'12px',display:"flex",textWrap:"wrap",margin:"0"}}>Check it out</p></div></div> */}
                                    {/* <img src="./img/icons/6.svg" alt="icon" style={{height:'30px',width:'30px'}}/> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                    </div>
                               
                                
                                <div className="mil-category">Bike Manufacturers </div>
                            </Link>
                            {/* </div> */}
                            <Link href='/Motorland'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/Mllog.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper  mil-text-sm ">Motorland</h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category" ><span style={{marginLeft:'20px'}}> Automotive Dealer</span> </div>
                            </Link>
                        </div>


                        <div className="col-md-6 col-lg-3" >
                            <Link href='/Secondcup '  className="mil-portfolio-item mil-long-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/lg/secondcup1.webp' alt='img' />
                                <div className="mil-project-descr1">
                                    <h4 className="mil-upper  mil-text-sm">Second Cup  </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Coffee Shop</div>
                            </Link>
                        </div>







                        <div className="col-md-6 col-lg-3" >
                        <Link href='/Metroways  '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/Metrowayslogo.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm">Metroways </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p>Travel Agency</p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Travel Agency</div>
                            </Link>
                            <Link href='/MCM'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30">
                                <img src=' ./img/allimg/logo/mcm.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm">MCM </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p> Construction Materials </p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Construction Materials </div>
                            </Link>
                        </div>



 <div className="col-md-6 col-lg-3" >
                            <Link href='/Tonino'  className="mil-portfolio-item mil-long-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/lg/tonio 1.webp' alt='img' />
                                <div className="mil-project-descr1">
                                    <h4 className="mil-upper mil-text-sm">Tonino </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Restaurant</div>
                            </Link>
                        </div>


                    </div>
                </div>
               











               {/* second */}
               <div className="container-fluid">
                    <div className="row">

                    <div className="col-md-6 col-lg-3" >
                    <Link href='/Tac'  className="mil-portfolio-item mil-long-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/taclogo.webp' alt='img' />
                                <div className="mil-project-descr1">
                                    <h4 className="mil-upper mil-text-sm"> The Architecture Corporation </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p> Battery and Tyre Manufacturers  </p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Architecture </div>
                            </Link>
                        </div>


                        <div className="col-md-2 col-lg-3" >
                        <Link href='/kaiser'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/covers/project/kaiser.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm">kaiser</h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Kitchen Appliances manufacturers</div>
                                {/* <div className="mil-category"><span style={{marginLeft:'10px',marginTop:"20px"}}>Kitchen Appliances manufacturers</span> </div> */}
                            </Link>
                            <Link href='/Azimgroup'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/azimlogo1.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm"> Azim Group </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                {/* <div className="mil-category"> Group of companies</div> */}
                                <div className="mil-category"> Group of companies</div>
                            </Link>
                        </div>


                      



                        <div className="col-md-6 col-lg-3" >
                        <Link href='/Hafil'  className="mil-portfolio-item mil-long-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/hafillogo1.webp' alt='img' />
                                <div className="mil-project-descr1">
                                    <h4 className="mil-upper  mil-text-sm">Hafil Trading & Services</h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Trading</div>
                            </Link>
                        </div>


                        <div className="col-md-6 col-lg-3" >
                        <Link href='/FarhatFreres  '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/farhat .webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper  mil-text-sm"> Farhat Freres </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"><span style={{marginLeft:'20px'}}> Automotive Dealer</span> </div>
                            </Link>
                            <Link href='/GTSW'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/Giti.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm"> GTSW </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p> Battery and Tyre Manufacturers  </p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Battery and Tyre Manufacturers </div>
                            </Link>
                        </div>


                      
                        <div className="col-md-6 col-lg-3" >
                            
                        <Link href='/pulse '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/pulse.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm">Pulse </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category">Pulse </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <Link href='/Amore  '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/amore.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-text-sm">Amore Glacier </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p>Travel Agency</p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category"> Cafe</div>
                            </Link>
                          
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            
                            <Link href='/Istanbul'  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/logo/Istanbul.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper   mil-text-sm"> Istanbul Sofrasi  </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p> Battery and Tyre Manufacturers  </p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category">Restarant</div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            
                            <Link href='/TaurusIvoire '  className="mil-portfolio-item mil-square-item mil-up mil-mb-30" >
                                <img src='./img/allimg/taurusivoire/taurusivoire logo.webp' alt='img' />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper   mil-text-sm"> Taurus Ivoire   </h4>
                                    {/* <div className="mil-divider-sm mil-mb-20"></div> */}
                                    {/* <p> Battery and Tyre Manufacturers  </p> */}
                                    {/* <p style={{fontSize:'12px'}}>Check it out</p> */}
                                </div>
                                <div className="mil-category">Restarant</div>
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

export default OurProjects;