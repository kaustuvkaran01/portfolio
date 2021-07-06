import React from 'react';

import pythonsvg from '../images/python-svg.svg'
import jssvg from '../images/js-svg.svg'
import cpp from '../images/cpp.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'
import r from '../images/r.png'

export default function Languages() {
  return (
    <>
    {/* TODO: Replace with the proper colored icons */}
    <section class="p-6 bg-gray-200 dark:text-coolGray-100">
	<div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 lg:flex lg:flex-row lg:flex-wrap lg:justify-center">
		<div class="flex justify-center p-4  rounded-lg  bg-gray-50 lg:w-1/8">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-yellow-400">
				<img src={cpp} alt="cpp svg" />
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-3xl font-semibold leading-none ml-0">C++</p>
				{/* <p class="capitalize">Orders</p> */}
			</div>
		</div>
		<div class="flex p-4 rounded-lg  dark:bg-coolGray-900 dark:text-coolGray-100 bg-gray-50 lg:w-1/8">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-yellow-400">
				<img src={jssvg} alt="js svg"/>
			</div>
			<div class="flex flex-col justify-center align-middle ml-0">
				<p class="text-3xl font-semibold leading-none">JavaScript</p>
				{/* <p class="capitalize">New customers</p> */}
			</div>
		</div>
		<div class="flex p-4  rounded-lg  dark:bg-coolGray-900 dark:text-coolGray-100 bg-gray-50 lg:w-1/8">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-yellow-400">
				<img src={pythonsvg} alt="python svg"/>
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-3xl font-semibold leading-none">Python</p>
				{/* <p class="capitalize">Growth</p> */}
			</div>
		</div>
		<div class="flex p-4  rounded-lg  dark:bg-coolGray-900 dark:text-coolGray-100 bg-gray-50 lg:w-1/8">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-yellow-400">
			<img src={r} alt="r language"/>
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-3xl font-semibold leading-none">R</p>
				{/* <p class="capitalize">Bounce rate</p> */}
			</div>
		</div>
		<div class="flex p-4  rounded-lg  dark:bg-coolGray-900 dark:text-coolGray-100 bg-gray-50 lg:w-1/8">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-yellow-400">
			<img src={html} alt="html svg"/>
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-3xl font-semibold leading-none">HTML</p>
				{/* <p class="capitalize">Bounce rate</p> */}
			</div>
		</div>
		<div class="flex p-4  rounded-lg  dark:bg-coolGray-900 dark:text-coolGray-100 bg-gray-50 lg:w-1/8">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-yellow-400">
			<img src={css} alt="css svg"/>
			</div>
			<div class="flex flex-col justify-center align-middle">
				<p class="text-3xl font-semibold leading-none">CSS</p>
				{/* <p class="capitalize">Bounce rate</p> */}
			</div>
		</div>
	</div>
</section>
    </>
  );
}
