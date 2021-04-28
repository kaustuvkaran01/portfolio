import React from 'react';

export default function Navbar() {
  return (
    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 rounded font-fira-code">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <a
                className="text-sm  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-green"
                href="#pablo"
              >
                A
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
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                    href="#pablo"
                  >
                    01. About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                    href="#pablo"
                  >
                    02. Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                    href="#pablo"
                  >
                    03. Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                    href="#pablo"
                  >
                    04. Contact
                  </a>
                </li>
                <li className="nav-item rounded border-2 border-red-500 border-solid">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                    href="#pablo"
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
