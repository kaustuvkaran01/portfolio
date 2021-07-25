import React from "react";
import heroimg from '../images/heroimg.JPG';
import Typewriter from "typewriter-effect";
import {Link} from 'react-router-dom'
// import {FaGithub} from 'react-icons/fa';
import githubgif from '../images/frames/git.svg'

export default function Hero() {
  return (
    <div>
      <section class="bg-gray-200 dark:text-coolGray-100">
        <div class="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
          <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 class="text-5xl font-bold leading-none sm:text-6xl">Hi!<br /> I am Kaustuv!<br />
              <span class="dark:text-yellow-400">I write</span>
              <Typewriter
                options={{loop:true}}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<strong><span class="text-yellow-500">JavaScript</span></strong>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<strong><span class="text-blue-400">C++</span></strong>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<strong><span class="text-blue-500">React.js</span></strong>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<strong><span class="text-green-700">Python</span></strong>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<strong><span class="text-blue-900">R</span></strong>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<strong><span class="text-yellow-400">HTML</span></strong>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<strong><span class="text-red-500">CSS</span></strong>')
                    .pauseFor(500)
                    .start();
                }}
              />
            </h1>
            <p class="mt-6 mb-8 text-lg sm:mb-12">Been doing magic with code since 2017
              <br class="hidden md:inline lg:no-hidden" />Love to do stuff
            </p>
            <div class="flex flex-col space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start sm:justify-center">
              <Link class="px-8 py-3 text-lg font-semibold rounded bg-purple-700 text-black sm:justify-center">Let's Connect</Link>
              <Link class="px-8 py-3 text-lg font-semibold border rounded border-8 border-purple-700 flex flex-row justify-center">Github <img className="h-8 bg-opacity-0" src={githubgif} alt="github"/></Link>
            </div>
          </div>
          <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={heroimg} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
