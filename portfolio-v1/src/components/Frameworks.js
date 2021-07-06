import React from 'react';

import reactgif from '../images/frames/reactsvg.svg'
import nodesvg from '../images/frames/nodesvg.svg'
import express from '../images/frames/express-js-logo.png'
import npm from '../images/frames/npm.svg'
import mongo from '../images/frames/mongo.svg'
import graphql from '../images/frames/graphql.svg'
import redux from '../images/frames/redux.svg'
import scikit from '../images/frames/scikit.svg'

export default function Frameworks() {
  return (
    <>
    {/* TODO: Replace them with colored icons */}
    <section class="bg-gray-200 dark:text-coolGray-100">
	<div class="container p-6 lg:px-10 justify-center mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
		<h2 class="text-3xl font-bold">Libraries/Frameworks</h2>
		<div class="flex flex-wrap sm:flex-col lg:flex-row justify-center lg:justify-evenly ">
			<img src={mongo} alt="mongo" />
			<img className="h-6 mt-4" src={express} alt="express" />
			<img src={reactgif} alt="react" />
			<img src={graphql} alt="graphql" />
			<img src={redux} alt="redux" />
			<img src={nodesvg} alt="node" />
			<img src={npm} alt="npm" />
			<img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit" />
		</div>
	</div>
</section>
    </>
  );
}
