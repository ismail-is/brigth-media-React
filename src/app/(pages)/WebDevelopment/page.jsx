import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";

const ProjectsMasonry = dynamic( () => import("@components/ProjectsMasonry"), { ssr: false } );

import { getSortedProjectsData } from "@library/projects";
import LatestProjectsSection from "../../_components/sections/LatestProjects";
import OurProjects from "../../_components/sections/OurProjects";
import WebProjects from "../../_components/sections/WebProjects";

export const metadata = {
  title: {
		default: "WebDevelopment",
	},
  description: AppData.settings.siteDescription,
}

async function WebDevelopment() {
  const projects = await getAllProjects();

  return (
    <>
      <PageBanner pageTitle={"Projects"} breadTitle={"Projects"} bgImage={"/img/photo/12.jpg"} />

      {/* portfolio */}
      <section>
        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />
          
          <div className="mil-center">
            <p className="mil-text-lg mil-up mil-mb-90">Our Projects harness design and technology to create places where <br/> people live, work, and heal.</p>
          </div>

          {/* <Suspense fallback={<div>Loading...</div>}>
            <ProjectsMasonry projects={projects} categories={AppData.projects.categories} />
          </Suspense>
 */}



          <Suspense fallback={<div>Loading...</div>}>
        <WebProjects/>
      </Suspense>

        </div>
      </section>
      {/* portfolio end */}
      
    </>
  );
};
export default WebDevelopment;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}