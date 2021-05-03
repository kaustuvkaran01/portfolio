import React from "react";

import img1 from '../images/img1.JPG';

export default function About() {
  return (
    <div className="lg:w-full flex flex-wrap justify-evenly lg:py-20 lg:flex-row sm:flex-col-reverse">
      <div className="text-left space-y-6 lg:w-1/2">
        <div className="text-3xl text-gray-100">01. About Me</div>
        <div className="text-lg text-justify space-y-6 sm:max-w-xs lg:max-w-xl">
          <div className="text-gray-400 ">
            Hello! My name is Kaustuv and I enjoy creating things that live on the internet. My interest in web development started back in my first year of college(2018), when one of my friends showed me a highly interactive site that he built using simple HTML and CSS. I did not even know CSS existed back then. We participated in a hackathon together and somehow won. This was such a major boost for me that I thought why not keep doing this? So we kept building things and here I am.
          </div>
          <div className="text-gray-400">
            Fast-forward to today. I've had the priviledge of helping the local municipal corporation gather data for slum areas using a web app that I built and also an NGO to setup their fully functioning website. My main focus these days is learning to scale projects. I would love to work at Microsoft one day.
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
