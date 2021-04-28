import React from "react";
import { Instagram, Linkedin } from "react-feather";

export default function Links() {
  return (
    <div className="bg-blue-900 absolute bottom-0 left-0 text-blue-300 sideways-rl p-10 pb-20 space-y-6">
      {/* <Github /> */}
      <button>
        <Instagram />
      </button>
      <Linkedin />
      <br />
    </div>
  );
}
