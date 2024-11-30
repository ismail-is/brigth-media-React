import Data from "@data/sections/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";

const LatestPostsSection = ( { posts, paddingTop } ) => {
    
    return (
        <>
            {/* blog */}
            <section>
    <div className={paddingTop ? "container mil-p-120-60" : "container mil-p-0-60"}>
        <div className="mil-background-grid mil-softened" />

        <div className="row">
            <div className="col-12">
                <div className="mil-center mil-mb-90">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
                    <h2 className="mil-upper mil-up mil-mb-30" >Some of <span class="mil-marker">our works</span> </h2>
                    <a href={Data.button.link} className="mil-link mil-upper mil-up">
                        {Data.button.label}
                        {/* <span className="mil-arrow"><img src="./img/icons/1.svg" alt="arrow" /></span> */}
                    </a>
                </div>
            </div>

            {/* Static Content */}
            <div className="col-lg-6">
                <Link href="/mainpage" className="mil-blog-card mil-mb-60">
                    <div className="mil-cover mil-up mil-long">
                        <img src="https://ruizarch-react.vercel.app/img/covers/1.jpg" alt="Sample Blog Post 1" />
                        <div className="mil-date"><Date dateString="2024-10-10" /></div>
                    </div>
                    <div className="mil-description">
                        {/* <span className="mil-suptitle mil-upper mil-up mil-mb-30">Category 1</span> */}
                        <h4 className="mil-upper mil-up mil-mb-30">Explore new design in urbanism</h4>
                        <p className="mil-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>
            </div>
          

            <div className="col-lg-6">
                <Link href="/mainpage" className="mil-blog-card mil-mb-60">
                    <div className="mil-cover mil-up mil-long">
                        <img src="https://ruizarch-react.vercel.app/img/covers/3.jpg" alt="Sample Blog Post 2" />
                        <div className="mil-date"><Date dateString="2024-10-11" /></div>
                    </div>
                    <div className="mil-description">
                        {/* <span className="mil-suptitle mil-upper mil-up mil-mb-30">Category 2</span> */}
                        <h4 className="mil-upper mil-up mil-mb-30">DESIGN A PERFECT HOME</h4>
                        <p className="mil-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</section>



            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;