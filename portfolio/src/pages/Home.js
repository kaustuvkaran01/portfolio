import React from "react";

import Intro from "../components/Intro";
import About from '../components/About';
import ProjectGrid from '../components/Projects/ProjectGrid';

export default function Home() {
  return (
    <div className="grid justify-center text-center object-center">
      <div className="max-w-6xl space-y-40 py-10">
        <Intro />
        <About />
        <ProjectGrid />
      </div>
    </div>
  );
}
