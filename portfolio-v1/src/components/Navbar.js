import React from 'react';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/site-logo.png";
// import Pdf from "../assets/resume-website.pdf";
import Sidebar from "./Sidebar/Sidebar";

export default function Navbar() {
  return (
    <div>
        <header className="px-8 text-basic-blue bg-gray-200 fixed z-50 py-2 w-full shadow-md">
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
                <img src={logo} className="w-12 h-12 text-purple-700" alt="" />
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
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-purple-700 hover:border-purple-700"
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
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-purple-700 hover:border-purple-700"
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
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-purple-700 hover:border-purple-700"
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
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-purple-700 hover:border-purple-700"
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
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-purple-700 hover:border-purple-700"
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
              <button className="px-8 py-3 font-semibold rounded border-2 border-purple-700 text-basic-blue outline-none">
                Resume
              </button>
            </a>
          </motion.div>
          <button className="p-4 lg:hidden">
            <Sidebar />
          </button>
        </div>
      </header>
    </div>
  );
}
