import React from "react";

import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <div className="lg:min-w-2xl text-left space-y-8 pt-20 flex flex-col">
      <div className="text-lg text-green-500 font-mono">
      <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, My Name is") 
              .pauseFor(2000000)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
      <div className="text-7xl text-gray-300">
      <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Kaustuv Karan") 
              .pauseFor(2000000)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
      <div className="lg:text-7xl text-gray-400 sm:text-5xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I build things for the web.") 
              .pauseFor(2000000)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
        {/* I build things for the web. */}
      </div>
      <div className="text-lg max-w-md text-gray-500">
        I'm a sophomore at Thapar Institute of Engineering and Technology who
        specializes in building websites using React.js. Currently, I'm looking
        for opportunities to work on large-scale projects.
      </div>
      <div className="px-0 p-4 rounded-lg text-lg w-40 text-center ring-4 ring-green-500  text-green-500">
        Get in touch
      </div>
    </div>
  );
}
