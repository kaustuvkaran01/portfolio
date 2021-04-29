import React from "react";

import ProjectCard from "./ProjectCard";


export default function ProjectGrid() {
  return (
    <div className="text-left grid sm:flex sm:flex-wrap space-y-6 py-6">
      <div className="px-6 text-green-400 font-bold text-xl">Some noteworthy projects:</div>
      <div className=" px-6 grid grid-cols-3 grid-rows-3 gap-9 place-items-start">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
      </div>
    </div>
  );
}
