import React from 'react';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import logo from "../assets/logo.svg";
// import Pdf from "../assets/resume-website.pdf";
// import Sidebar from "./sidebar/sidebar";

export default function Navbar() {
  return (
    <div>
        <header className="px-4 text-basic-blue bg-gray-100 fixed z-50 pt-2 w-full">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <Link to="/" className="flex items-center p-2">
              <motion.span
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <img src="https://source.unsplash.com/collection/190727/1600x900" className="w-8 h-8 text-yellow-300" alt="" />
              </motion.span>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-yellow-300 hover:border-yellow-300"
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
                className="flex"
              >
                <Link
                  to="/"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-yellow-300 hover:border-yellow-300"
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-yellow-300 hover:border-yellow-300"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-yellow-300 hover:border-yellow-300"
                >
                  Experience
                </Link>
              </motion.li>
              <motion.li
                className="flex "
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-yellow-300 hover:border-yellow-300"
                >
                  Contact Me
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              ></motion.li>
            </ul>
          </div>
          <motion.div
            className="items-center flex-shrink-0 hidden lg:flex"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 25,
            }}
          >
            <a href="https://kaustuvkaran01.netlify.app" target="_blank" rel="noreferrer">
              <button className="px-8 py-3 font-semibold rounded border-2 border-basic-blue text-basic-blue outline-none">
                Resume
              </button>
            </a>
          </motion.div>
          {/* <button className="p-4 lg:hidden">
            <Sidebar />
          </button> */}
        </div>
      </header>
    </div>
  );
}
