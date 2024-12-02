import React from 'react'

const About = () => {
  return (
  <div>
    <>
  {/* Blog Article */}
  <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
    <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
      {/* Content */}
      <div className="lg:col-span-2">
        <div className="py-8 lg:pe-8">
          <div className="space-y-5 lg:space-y-8">
            <a
              className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
              href="#"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </a>
            <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
            Why This Blog?
            </h2>
            <div className="flex items-center gap-x-5">
              <a
                className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Company News
              </a>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                January 18, 2023
              </p>
            </div>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
            This blog is a space where I share my insights, knowledge, and experiences in web development. Whether you’re a fellow developer, a beginner just starting out, or someone curious about tech, I hope to make this a place where you can learn, grow, and find inspiration.
            </p>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
            Provide an overview of the kinds of posts you typically write. This could include coding tutorials, frameworks, languages, tools, best practices, personal experiences, and industry news.
            </p>
            <div className="text-center">
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  <figure className="relative w-full h-60">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-xl"
                      src="https://media.licdn.com/dms/image/D4D12AQEVhnRg7DVYjA/article-cover_image-shrink_720_1280/0/1692341195752?e=2147483647&v=beta&t=94Nb1InJxxRq2yrG8mLTqPtsiQ_gPB24GLZG_Wtd8zc"
                      alt="Blog Image"
                    />
                  </figure>
                  <figure className="relative w-full h-60">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-xl"
                      src="https://nextr.in/blog/wp-content/uploads/2023/04/website-2.jpg"
                      alt="Blog Image"
                    />
                  </figure>
                </div>
                <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                  <img
                    className="size-full absolute top-0 start-0 object-cover rounded-xl"
                    src="https://media.licdn.com/dms/image/D5612AQGHQMZ7P5yfBg/article-cover_image-shrink_720_1280/0/1690729694228?e=2147483647&v=beta&t=ouLVASmyYyFmFeYNpg4EIBBMaTNd3-Kzzbmc64M1yzs"
                    alt="Blog Image"
                  />
                </figure>
              </div>
              <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                Working process
              </span>
            </div>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
            I started this blog to document my journey in web development, share helpful resources, and give back to the developer community that has helped me over the years. It’s a way for me to break down complex topics into easy-to-follow tutorials and provide practical tips that developers of all levels can use in their projects.
            </p>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
            The tech world moves fast, and it can be overwhelming to keep up. My goal is to offer clear, concise, and actionable content that makes learning and improving your coding skills a bit easier and more enjoyable.{" "}
            
            </p>
            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
              You can add a personal touch with a few light-hearted facts, such as hobbies, favorite programming languages, or quirky interests outside of coding.
              </p>
              <p className="mt-5 text-gray-800 dark:text-neutral-200">
                Nicole Grazioso
              </p>
            </blockquote>
            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="https://simplybuiltsites.com/wp-content/uploads/web-design.png"
                alt="Blog Image"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-white">
              My Journey
              </h3>
              <p className="text-lg text-gray-800 dark:text-neutral-200">
              I started coding in [2022], driven by a curiosity to understand how websites and apps worked behind the scenes. Over the years, I’ve learned through building projects, breaking things, and continuously pushing myself to get better.

Today, I work on [web development], and I love helping others who are on their own journey into tech. Whether you’re a seasoned developer or just starting out, I believe there’s always something new to learn.
              </p>
            </div>
            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
              <li className="ps-2">
              "I remember the first time I stumbled upon web development. It all started when I wanted to create a personal website for a project in high school. I had no idea what I was doing, but with some Googling and a lot of trial and error, I managed to build a basic HTML page. That simple project sparked my curiosity and led me down the path of learning more about coding and how the web worked."
               
              </li>
            </ul>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
            "The hardest part of my journey has been overcoming imposter syndrome. At times, I felt like I didn’t belong in the developer community, especially when comparing myself to others who seemed so much more advanced. But over time, I realized that everyone faces challenges and that learning is a continuous process. I started embracing my mistakes as part of growth, and now I’m more confident in tackling new challenges." <br />
            <br />

            Thank you for visiting, and I hope you find the content here helpful and inspiring. If you have any questions, ideas, or just want to chat about code, feel free to [contact me here].

Happy coding!
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
              {/* Badges/Tags */}
              <div>
                <a
                  className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Plan
                </a>
                <a
                  className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Web development
                </a>
                <a
                  className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Free
                </a>
                <a
                  className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Team
                </a>
              </div>
              {/* End Badges/Tags */}
              <div className="flex justify-end items-center gap-x-1.5">
                {/* Button */}
                <div className="hs-tooltip inline-block">
                  <button
                    type="button"
                    className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    875
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                      role="tooltip"
                    >
                      Like
                    </span>
                  </button>
                </div>
                {/* Button */}
                <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600" />
                {/* Button */}
                <div className="hs-tooltip inline-block">
                  <button
                    type="button"
                    className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                    </svg>
                    16
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                      role="tooltip"
                    >
                      Comment
                    </span>
                  </button>
                </div>
                {/* Button */}
                <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600" />
                {/* Button */}
                <div className="hs-dropdown relative inline-flex">
                  <button
                    id="hs-blog-article-share-dropdown"
                    type="button"
                    className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1={12} x2={12} y1={2} y2={15} />
                    </svg>
                    Share
                  </button>
                  <div
                    className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-blog-article-share-dropdown"
                  >
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      Copy link
                    </a>
                    <div className="border-t border-gray-600 my-2 dark:border-neutral-800" />
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      Share on Twitter
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      Share on Facebook
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                      Share on LinkedIn
                    </a>
                  </div>
                </div>
                {/* Button */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
      {/* Sidebar */}
      <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
        <div className="sticky top-0 start-0 py-8 lg:ps-8">
          {/* Avatar Media */}
          <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
            
            <a className="group grow block focus:outline-none" href="">
              <h5 className="group-hover:text-gray-600 group-focus:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:group-focus:text-neutral-400 dark:text-neutral-200">
              Facts about Developer blog
              </h5>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
              
              </p>
            </a>
            <div className="grow">
              
             
            </div>
          </div>
          {/* End Avatar Media */}
          <div className="space-y-6">
            {/* Media */}
            <a
              className="group flex items-center gap-x-6 focus:outline-none"
              href="#"
            >
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
                Career Growth: Blogging can establish a developer as an expert in their field, enhancing their online presence and attracting job opportunities, freelance work, or consulting gigs.




                </span>
              </div>
             
            </a>
            {/* End Media */}
            {/* Media */}
            <a
              className="group flex items-center gap-x-6 focus:outline-none"
              href="#"
            >
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
                Community Building: Developer blogs often create a sense of community by fostering engagement through comments, discussions, and feedback, connecting like-minded individuals.
                </span>
              </div>
             
            </a>
            {/* End Media */}
            {/* Media */}
            <a
              className="group flex items-center gap-x-6 focus:outline-none"
              href="#"
            >
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
                Content Variety: Blogs can cover a range of topics, including code tutorials, project case studies, tool reviews, industry trends, and reflections on the software development process.
                </span>
              </div>
            
            </a>
            {/* End Media */}
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </div>
  </div>
  {/* End Blog Article */}
</>

  </div>
  )
}

export default About