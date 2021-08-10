import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

export default function SideProjects() {
  const projects = [
    {
      title: "KTOPSIS",
      desc: "A tool to perform TOPSIS Analysis on a dataset made in python",
      github: "https://github.com/kaustuvkaran01/ktopsis",
      live: "https://pypi.org/project/ktopsis/",
    },
    {
      title: "Hangman",
      desc: "A fun hangman game for programmers to test their knowledge of programming languages",
      github: "https://github.com/kaustuvkaran01/Hangman",
      live: "https://kaustuvkaran01-hangman.netlify.app/",
    },
    {
      title: "Tic Tac Toe",
      desc: "The fun game of tic tac toe with an unbeatable AI",
      github: "https://github.com/kaustuvkaran01/tic-tac-toe-js-ai",
      live: "https://kaustuvkaran01-tic-tac-toe.netlify.app/",
    },
    {
      title: "Netflix Clone Frontend",
      desc: "A frontend clone of the popular OTT service platform, Netflix using React.js and styled-components",
      github: "https://github.com/kaustuvkaran01/netflix-look-alike",
      live: "https://netflix-look-alike-frontend.netlify.app/",
    },
    {
      title: "Wildfire Tracker",
      desc: "Tracker based on NASA's Wildfire API created using React.js",
      github: "https://github.com/kaustuvkaran01/wildfire-tracker",
      live: "https://track-wildfire-nasa.netlify.app",
    },
    {
      title: "Currency App",
      desc: "App to insert bill and amount given by the customer which returns the number of bills of every denomination to be returned created using React.js",
      github: "https://github.com/kaustuvkaran01/currency-app",
      live: "https://denomination-breakdown.netlify.app/",
    }
  ];

  return (
    <>
      {/* TODO: Add the side projects and the videos for the side projects */}
      <section class="text-gray-600 body-font lg:mx-28">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Other Notable Projects
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Some of my other notable projects that are equal in significance
              </p>
            </div>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4 justify-evenly">
                {projects.map(project => {
                  return (
                    <div class="p-4 lg:w-1/3">
                      <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg lg:shadow-2xl">
                        {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                          {project.title}
                        </h1>
                        <p class="leading-relaxed mb-3 text-center line-clamp-3">
                          {project.desc}
                        </p>
                        <a
                          href={project.github}
                          class="text-indigo-500 inline-flex items-center"
                        >
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                          <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-400">
                            <a href={project.github}>
                              <VscGithubAlt size={20} />
                            </a>
                          </span>
                          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <a href={project.live}>
                              <FaExternalLinkAlt />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
