import React from "react";
import { Instagram, Linkedin, GitHub } from "react-feather";

export default function Links() {
  return (
    <div className="fixed bottom-0 left-0 text-blue-300 sideways-rl p-10 grid grid-rows-3 gap-9">
      {/* <Github /> */}
      <a href="https://www.instagram.com/karankaustuv/">
        <Instagram />
      </a>
      <a href="https://www.linkedin.com/in/kaustuvkaran/">
        <Linkedin />
      </a>
      <a href="https://github.com/kaustuvkaran01">
        <GitHub />
      </a>
      <br />
    </div>
  );
}
