import React from "react";

import contactme from '../images/contact.svg';

function Contact() {
  return (
    <>
      <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div class="flex flex-col justify-between">
          <div class="space-y-2">
            <h2 class="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div class="dark:text-coolGray-400">
              I would love to hear from you!
            </div>
          </div>
          {/* TODO: Replace svg with actual svg(taken from Mamba UI)*/}
          <img
            src={contactme}
            alt="Contact our customer support"
            class="p-6 h-52 md:h-64"
          />
        </div>
        <form novalidate="" class="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label for="name" class="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              class="w-full p-3 rounded dark:bg-coolGray-800 border-2 border-solid border-yellow-300"
            />
          </div>
          <div>
            <label for="email" class="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              class="w-full p-3 rounded dark:bg-coolGray-800 border-2 border-solid border-yellow-300"
            />
          </div>
          <div>
            <label for="message" class="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              class="w-full p-3 rounded dark:bg-coolGray-800 border-2 border-solid border-yellow-300"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-400 text-black-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}


export default Contact;