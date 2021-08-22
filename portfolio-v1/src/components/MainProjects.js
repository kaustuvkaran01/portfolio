import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MainProjects() {
	const projects = [
		{
			cat: "",
			title: "First project",
			desc: "This is something something something something something something something something something something something",
			github: "https://github.com",
			live: "https://github.com",
		},
		{
			cat: "",
			title: "CodeRED",
			desc: "Locates the nearest clean washrooms and medical supply stores to help you in times of need on the go.",
			github: "https://github.com/kaustuvkaran01/CodeRED",
			live: "https://fathomless-anchorage-82136.herokuapp.com/",
		},
		{
			cat: "",
			title: "Expense Tracker",
			desc: "Web app to track your daily transactions. Built using React.js, ContextAPI, MongoDB, Express.js and Node.js",
			github: "https://github.com/kaustuvkaran01/Expense-tracker",
			live: "https://github.com",
		},
	];
	return (
		<>
			<section class=" bg-gray-200 text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					{/* <h2 className="py-6 justify-self-auto">Main Projects</h2> */}
					<div class="flex flex-wrap -m-4 justify-evenly">
						{projects.map((project) => {
							return (
								<div class="p-4 md:w-1/4">
									<div class="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
										<img
											class="lg:h-48 md:h-36 w-full object-cover object-center"
											src="https://dummyimage.com/720x400"
											alt="blog"
										/>
										<div class="p-6">
											<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
												{project.cat}
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												{project.title}
											</h1>
											<p class="leading-relaxed mb-3 line-clamp-4">
												{project.desc}
											</p>
											<div class="flex items-center flex-wrap ">
												<a
													href={project.github}
													class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
												>
													Learn More
													<svg
														class="w-4 h-4 ml-2"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
														fill="none"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path d="M5 12h14"></path>
														<path d="M12 5l7 7-7 7"></path>
													</svg>
												</a>
												<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400">
													<a href={project.github}>
														<VscGithubAlt size={25} />
													</a>
												</span>
												<span class="text-gray-400 inline-flex items-center leading-none text-sm">
													<a href={project.live}>
														<FaExternalLinkAlt size={20} />
													</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
