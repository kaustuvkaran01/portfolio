import React from "react";

import Intro from "../components/Intro";
import About from '../components/About';
import ProjectGrid from '../components/Projects/ProjectGrid';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="grid justify-center text-center object-center overscroll-auto md:overscroll-contain lg:overscroll-none">
      <div className="lg:max-w-6xl space-y-40 py-10 w-full flex flex-col">
        <Intro />
        <About />
        <ProjectGrid />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
