import React from "react";

export default function Intro() {
  return (
    <div className="min-w-2xl text-left space-y-8 pt-20">
      <div className="text-lg text-green-500 font-mono">Hi, My name is </div>
      <div className="text-7xl text-gray-300">Kaustuv Karan.</div>
      <div className="text-7xl text-gray-400 ">I build things for the web.</div>
      <div className="text-lg max-w-md text-gray-500">
        I'm a Boston-based software engineer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I'm
        an engineer at Upstatement focused on building accessible,
        human-centered products.
      </div>
      <div className="px-0 p-4 rounded-lg text-lg w-40 text-center ring-4 ring-green-500  text-green-500">Get in touch</div>
    </div>
  );
}
