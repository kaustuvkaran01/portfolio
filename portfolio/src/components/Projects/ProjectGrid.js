import React from "react";

import ProjectCard from "./ProjectCard";


export default function ProjectGrid() {
  const projects=[{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  },{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  },{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  },{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  },{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  },{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  },{
    name:"Something1",
    content:"Some things about the project",
    tech:["React","Node","Graphql"]
  }]
  return (
    <div className="text-left grid sm:flex sm:flex-wrap space-y-6 lg:py-6 lg:px-6 w-1/2 lg:w-full">
      <div className="px-6 text-green-400 font-bold text-xl">Some noteworthy projects:</div>
      <div
       className=" px-6 sm:grid gap-9 place-items-start lg:flex lg:flex-wrap lg:flex-row"
      // className="px-6 flex flex-wrap"
       >
         {projects.map(project => {
           return (
             <ProjectCard name={project.name} content={project.content} tech={project.tech}/>
           )
         })}
          <ProjectCard />
          <ProjectCard />
      </div>
    </div>
  );
}
