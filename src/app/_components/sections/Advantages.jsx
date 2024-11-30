import Data from "@data/sections/advantages.json";

const AdvantagesSection = () => {
  return (
    <>
        {/* advantages */}
        <section id="flowchart">
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    <div className="col-12">

                        <div className="mil-center mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>

                    </div>


                    <div  style={{display:"flex",justifyContent:"center", gap:"10px"}}>

                    {Data.items.map((item, key) => (
                    <div key={`advantages-item-${key}`} className="col-md-6 col-lg-2">

                        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60" >
                            {/* <h4 className="mil-upper mil-mb-30">{item.title}</h4> */}
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="./img/icons/6.svg" alt="icon" />
                            </div>
                            <h6 className="mil-upper mil-mb-30">{item.title}</h6>
                            {/* <p>{item.text}</p> */}
                        </div>

                    </div>
                    ))}
                    </div>






{/* try */}
{/* first */}
{/* <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
    <div className="col-md-6 col-lg-2" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60">
            <div className="mil-icon mil-icon-border mil-mb-30">
                <img src="./img/icons/6.svg" alt="icon" />
            </div>
            <h6 className="mil-upper mil-mb-30">Consultation</h6>
        </div>
        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60">
            <div className="mil-icon mil-icon-border mil-mb-30">
                <img src="./img/icons/6.svg" alt="icon" />
            </div>
            <h6 className="mil-upper mil-mb-30">Strategy Development</h6>
        </div>
        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60">
            <div className="mil-icon mil-icon-border mil-mb-30">
                <img src="./img/icons/6.svg" alt="icon" />
            </div>
            <h6 className="mil-upper mil-mb-30">Execution</h6>
        </div>
    </div>
</div> */}

{/* <div className="mil-divider-lg1 mil-up mil-mb-30"/> */}

{/* second */}
{/* <div style={{ display: "flex", justifyContent: "center", gap: "60px",marginTop:"-59px"}}>
    <div className="col-md-6 col-lg-2" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60">
            <div className="mil-icon mil-icon-border mil-mb-30">
                <img src="./img/icons/6.svg" alt="icon" />
            </div>
            <h6 className="mil-upper mil-mb-30">Monitoring & Optimization</h6>
        </div>
        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60">
            <div className="mil-icon mil-icon-border mil-mb-30">
                <img src="./img/icons/6.svg" alt="icon" />
            </div>
            <h6 className="mil-upper mil-mb-30">Strategy Development</h6>
        </div>
    </div>
</div> */}

{/* try */}







                </div>
            </div>
        </section>
        {/* advantages end */}
    </>
  );
};

export default AdvantagesSection;