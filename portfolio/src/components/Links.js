import React from "react";
import { Instagram, Linkedin, GitHub } from "react-feather";

export default function Links() {
  return (
    <div className="absolute bottom-0 left-0 text-blue-300 sideways-rl p-10 pb-20 space-y-6">
      {/* <Github /> */}
      <a href="https://instagram/">
        <Instagram />
      </a>
      <Linkedin />
      <GitHub />
      <br />
    </div>
  );
}
