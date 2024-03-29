import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="fixed opcaity-100 bg-black flex flex-wrap py-4 top-0 min-w-full">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 rounded font-fira-code">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-green-400 ">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <a
                className="text-sm  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-green"
                href="https://kaustuvkaran01.netlify.app"
              >
                K
              </a>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div
              className="flex lg:flex-grow items-center"
              id="example-navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none ml-auto space-x-6">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75"
                    to="/"
                  >
                    01. About
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75"
                    href="#pablo"
                  >
                    02. Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75"
                    href="#pablo"
                  >
                    03. Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75"
                    href="#pablo"
                  >
                    04. Contact
                  </a>
                </li>
                <li className="nav-item rounded-sm ring-2 ring-green-400 ring-opcaity-25 ring-offset-2">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-400 hover:opacity-75"
                    href="https://drive.google.com/file/d/1BYWd-gU83wiL67icmYeN1knLlDM04YtZ/view?usp=sharing"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
