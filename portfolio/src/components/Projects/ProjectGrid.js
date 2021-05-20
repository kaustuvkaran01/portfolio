import React from "react";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const projects = [
    {
      name: "Social Media App (Backend)",
      content:
        "This is the backend of a social media app with support for posts, likes and comments",
      tech1: "MERN ",
      tech2: "Apollo GraphQL",
      tech3: "MongoDB",
      github: "https://github.com/kush-daga/SIH-2019",
    },
    {
      name: "STP Monitoring Web Portal",
      content:
        "A MERN full-stack solution for monitoring Sewage Treatment Plants made as a part of the Smart India Hackathon submission for the Ministry of Water Resources, Govt. of India",
      tech1: "MERN",
      tech2: "Leaflet",
      tech3: "Tachyons",
      github: "https://github.com/kaustuvkaran01/social-media-app-graphql",
    },
    {
      name: "Kadam website",
      content:
        "Website for the NGO Kadam that creates awareness about social issues like treatment of the elderly and menstrual hygiene awareness. Uses Razorpay for donations",
      tech1: "React.js",
      tech2: "Express",
      tech3: "MongoDB",
      github: "https://github.com/kaustuvkaran01/Kadam",
    },
    {
      name: "Equicode website",
      content:
        "Equicode is an active tech community for budding programmers to connect with the mainstream tech community having connections with multiple DSCs across the world.",
      tech1: "React.js",
      tech2: "TailwindCSS",
      tech3: "SheetsAPI",
      github: "https://github.com/EquiCode/Official-Website",
    },
    {
      name: "ML A-Z",
      content:
        "This is my course repository for ML A-Z that I used to conduct a workshop in DSC TIET",
      tech1: "Python",
      tech2: "Jupyter Notebook",
      tech3: "R",
      github: "https://github.com/kaustuvkaran01/ML_A-Z",
    },
    {
      name: "Productivity Tracker",
      content:
        "Submission for the Software Engineering Course of my college. Uses Firebase for authentication and storing user data",
      tech1: "React.js",
      tech2: "Firebase",
      github: "https://github.com/kaustuvkaran01/prod_tracker",
    },
    {
      name: "KTOPSIS",
      content:
        "Tool made in Python for calculating TOPSIS(Technique for Order of Preference by Similarity to Ideal Solution) score for target  in a dataset.",
      tech1: "Python",
      tech2: "Jupyter Notebook",
      github: "https://github.com/kaustuvkaran01/ktopsis",
    },
    {
      name: "Encrypter",
      content:
        "This is an encryption tool built using python which uses XOR cipher, Caesar and Vigenere Cipher for encrypting and decrypting text material.",
      tech1: "Python",
      github: "https://github.com/pulkitgupta2k/cyber-sec-project",
    },
    {
      name: "Tic-Tac-Toe",
      content:
        "A simple game of tic tac toe with an unbeatable AI(Minimax Algorithm)",
      tech1: "Vanilla JavaScript",
      github: "https://github.com/kaustuvkaran01/tic-tac-toe-js-ai",
    },
  ];
  return (
    <div className="text-left grid sm:flex sm:flex-wrap space-y-6 lg:py-6 lg:px-6 w-1/2 lg:w-full">
      <div className="px-6 text-green-400 font-bold text-xl">
        Some noteworthy projects:
      </div>
      <div
        className=" px-6 sm:grid gap-9 place-items-start lg:flex lg:flex-wrap lg:flex-row"
        // className="px-6 flex flex-wrap"
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              name={project.name}
              content={project.content}
              tech1={project.tech1}
              tech2={project.tech2}
              tech3={project.tech3}
            />
          );
        })}
        {/* <ProjectCard />
          <ProjectCard /> */}
      </div>
    </div>
  );
}
