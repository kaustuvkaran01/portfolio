import React from "react";

import img1 from '../images/img1.JPG';

export default function About() {
  return (
    <div className="lg:w-full flex flex-wrap justify-evenly lg:py-20 lg:flex-row sm:flex-col-reverse">
      <div className="text-left space-y-6 lg:w-1/2">
        <div className="text-3xl text-gray-100">01. About Me</div>
        <div className="text-lg text-justify space-y-6 sm:max-w-xs lg:max-w-xl">
          <div className="text-gray-400 ">
            Hello! My name is Kaustuv and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I met a complete stranger turned very dear friend in my first year of grad-school who had a similar interest in technology.
          </div>
          <div className="text-gray-400">
            Fast-forward to today, and I've had the privilege of winning multiple hackathons, building a project for the Municipal Corporation of the city, building a website for the betterment of society(for a NGO) and conducted multiple workshops on React and Decision Tree Networks for the improvement of the standards of the college.
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
                      Python and Data Science
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
