import React from 'react';

import {Folder, ExternalLink,GitHub} from 'react-feather';

export default function ProjectCard( { name,content,tech } ) {
  return (
    <div className="px-6 inline w-80 h-80 text-green-400 space-y-6 rounded-lg ring-2 ring-green-400">
        <div className=" pt-6 flex flex-wrap justify-between items-center align-top">
          <Folder size="40" />
          <div className="flex gap-2">
          <GitHub />
          <ExternalLink />
          </div>
        </div>
        <h3 className="font-bold text-xl">
          {name}
        </h3>
        <div className=" text-left">
          {content}
        </div>
        <div className="grid grid-cols-3 gap-2 place-items-start justify-between align-left text-opacity-10">
          {tech.map(
            function nameIterator(item,i){
              return(
                <div>
                  {item}
                </div>
              )
            }
          )}
          {/* <div>
            Algolia
          </div>
          <div>
            React
          </div>
          <div>
            Node.js
          </div> */}
        </div>
    </div>
  );
}
