import React from "react";

import img1 from '../images/img1.JPG';

export default function About() {
  return (
    <div className="w-full flex flex-wrap justify-evenly py-20">
      <div className="text-left space-y-6 w-1/2">
        <div className="text-3xl text-gray-100">01. About Me</div>
        <div className="text-lg text-justify space-y-6">
          <div className="text-gray-400">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </div>
          <div className="text-gray-400">
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </div>
          <div className="text-gray-400">
              Here are a few things I've been working with recently:
              <ul className="list-disc text-green-400">
                  <li>
                      JavaScript (ES6+) 
                  </li>
                  <li>
                        React
                  </li>
                  <li>
                      Node.js
                  </li>
                  <li>
                      GraphQl
                  </li>
                  <li>
                      Pytorch
                  </li>
              </ul>
          </div>
        </div>
      </div>
      <div className="w-1/3 text-center items-center pt-10 align-middle filter backdrop-blur-sm hover:filter-none hover:backdrop-blur-0 rounded-lg">
        <img className="rounded-lg" src={img1} alt="profile" />
      </div>
    </div>
  );
}
