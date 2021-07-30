import React from 'react';

export default function WorkEx() {

  const jobs = [
    {
      "title":"UG Researcher",
      "date":"8 June 2021",
      "org":"Samsung PRISM Program",
      "desc":"Face unmasking using GANs and LSTMs"
    },
    {
      "title":"Researcher Assisstant",
      "date":"27 July 2021",
      "org":"Charles University, Prague, Czech Republic",
      "desc":"Mutli modal Neural Machine Translation"
    },
    {
      "title":"Web Development Intern",
      "date":"11 June 2020",
      "org":"Kadam",
      "desc":"Face unmasking using GANs and LSTMs"
    },
    {
      "title":"Web Development Intern",
      "date":"11 June 2020",
      "org":"Patiala Municipal Corporation",
      "desc":"Built a cloud based slum survey app and admin portal to gather and organize census data of slums in the city in React.js, Firebase, Firestore and Android"
    },
  ]
  return (
    <div className="lg:mx-28">
    {/* TODO: Make tabs for this section, tabs according to organizations */}
    {/* TODO: Correct the timeline and fill in the content */}
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-8 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      {/* <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">CATEGORY</span>
          <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a href="https://www.kaustuvkaran01.netlify.app"  class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div> */}
      {jobs.map(job => {
        return(

      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{job.title}</span>
          <span class="mt-1 text-gray-500 text-sm">{job.date}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{job.org}</h2>
          <p class="leading-relaxed truncate">{job.desc}</p>
          <a href="https://www.kaustuvkaran01.netlify.app"  class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
        )
      })}
      {/* <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">CATEGORY</span>
          <span class="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a href="https://www.kaustuvkaran01.netlify.app"  class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div> */}
    </div>
  </div>
</section>
    </div>
  );
}
