import React from "react";
import Intro from "../components/Intro";
import About from '../components/About';


export default function Home() {
  return (
    <div className="grid bg-blue-900 justify-center text-center object-center">
      <div className="max-w-4xl space-y-40">
        <Intro />
        <About />
      </div>
    </div>
  );
}
