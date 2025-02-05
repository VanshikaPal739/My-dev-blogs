'use client'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <>
          {/* ========== HEADER ========== */}
          <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 max-w-[80%] mx-auto py-7">
            <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">

              {/* Button Group */}
              <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
                <li className="md:mr-12 list-none">
                  <Link className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white"
                    href="/signup">
                    SignUp
                  </Link>
                </li>
              </div>
              {/* End Button Group */}
              {/* Collapse */}
              <div
                id="hs-navbar-hcail"
                className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-8"
                aria-labelledby="hs-navbar-hcail-collapse"
              >
                <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                  <div>
                    <Link
                      className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                      href="#"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </div>


                  <div>
                    <Link
                      className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                      href="create-blog"
                    >
                      Register
                    </Link>
                  </div>


                  <div>
                    <Link
                      className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                      href="About"
                    >
                      About
                    </Link>
                  </div>



                  <div>
                    <Link
                      className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                      href="add-blog"
                    >
                      Blog
                    </Link>
                  </div>



                  <div>
                    <Link
                      className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                      href="contact"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Collapse */}
            </nav>
          </header>
          {/* ========== END HEADER ========== */}
        </>

      </div>
      <div>
        <div className="flex min-h-screen w-screen">
          <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
            {/* Left Column */}
            <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
              <div className="mb-16 lg:my-auto lg:max-w-lg">
                <div className="mb-6 max-w-xl">

                  <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                    The Best Software <br />
                    Developer Blogs to
                    <span className="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                      Read
                    </span>
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    "The Developer’s Hub: Your Source for Knowledge, Inspiration, and Community in Software Development"
                  </p>
                </div>
                <div className="flex items-center">
                  <Link
                    href="create-blog"
                    className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                  >
                    {" "}
                    Get started{" "}
                  </Link>

                </div>
              </div>
            </div>
            {/* /Left Column */}
            {/* Right Column */}
            <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
              {/* Col 2 */}
              <div className="hidden w-56 items-center space-y-3 lg:flex">
                <div className="overflow-hidden rounded-xl bg-yellow-400">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
                <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* /Right Column */}
          </div>
        </div>
      </div>


      <div>

        <div>
          <>
            <main>
              <article>
                <header className="mx-auto max-w-screen-xl pt-18 text-center">

                  <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
                    Code Chronicles: Adventures in Web Development
                  </h1>


                  <img
                    className="sm:h-[34rem] mt-10 w-full object-contain"
                    src="https://huntminds.com/wp-content/uploads/2022/10/Technology-Blog-topics-750x450.jpg"
                    alt="Featured Image"
                  />
                </header>
                <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
                  <strong className="text-2xl font-medium">
                    Developer Blog is the ultimate platform for developers to share knowledge, showcase projects, and engage with a passionate community. Whether you're a seasoned coder or just starting your journey, our platform is designed to help you create, share, and learn from the best minds in tech.
                  </strong>
                  <p>
                    Welcome to Developer Blog, where we dive deep into the world of web development! Whether you're a seasoned developer or just starting out, our blog offers a wealth of resources, tips, and tutorials to help you build better, faster, and more innovative websites. From exploring the latest trends in technology to solving common coding challenges, we're here to empower your journey in the ever-evolving landscape of web development. Join us as we share insights, best practices, and the occasional hack to elevate your skills and projects.
                  </p>

                </div>
              </article>
            </main>
            <div className="w-fit mx-auto mt-10 flex space-x-2">
              <div className="h-0.5 w-2 bg-gray-600" />
              <div className="h-0.5 w-32 bg-gray-600" />
              <div className="h-0.5 w-2 bg-gray-600" />
            </div>
            <aside
              aria-label="Related Articles"
              className="mx-auto mt-18 max-w-screen-xl py-20"
            >
              <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
                More Blogs
              </h2>
              <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
                <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                  <a href="https://blog.codinghorror.com/">
                    <img
                      src="https://c8.alamy.com/comp/2FKBAF4/front-end-web-developer-entering-programming-code-language-for-website-on-laptop-mix-media-background-2FKBAF4.jpg"
                      className="h-56 w-full object-cover"
                      alt=""
                    />
                    <div className="flex-auto px-6 py-5">
                      <span className="mb-2 flex items-center text-sm font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >

                        </svg>

                      </span>
                      <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                        Coding Horror
                      </h3>
                      <p className="mb-4 text-base font-light">
                        programming and human factors <br />
                        I Fight For The Users <br />
                        If you haven't been able to keep up with my blistering pace of one blog post per year, <br /> I don't blame you. <br />
                      </p>
                      <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                        Read Now
                      </span>
                    </div>
                  </a>
                </article>
                <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                  <a href="https://www.linkedin.com/learning/?trk=lynda_redirect_learning">
                    <img
                      src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-100232725.jpg"
                      className="h-56 w-full object-cover"
                      alt=""
                    />
                    <div className="flex-auto px-6 py-5">
                      <span className="mb-2 flex items-center text-sm font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                        </svg>

                      </span>
                      <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                        Keep learning in the moments that matter
                      </h3>
                      <p className="mb-4 text-base font-light">
                        Get guidance to develop the critical skills you need to advance your career from the only learning platform informed by world’s largest marketplace.
                      </p>
                      <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                        Read Now
                      </span>
                    </div>
                  </a>
                </article>
                <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                  <a href="https://learntocodewith.me/blog/">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/022/572/610/non_2x/web-development-coding-programming-internet-technology-business-concept-businessman-hand-holding-web-development-icon-on-virtual-screen-photo.jpg"
                      className="h-56 w-full object-cover"
                      alt=""
                    />
                    <div className="flex-auto px-6 py-5">
                      <span className="mb-2 flex items-center text-sm font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >

                        </svg>

                      </span>
                      <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                        The Learn to Code With Me Blog
                      </h3>
                      <p className="mb-4 text-base font-light">

                        If there’s likely to be a technical interview in your near future, one of the best ways to prepare is by familiarizing yourself with common technical interview questions.
                      </p>
                      <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                        Read Now
                      </span>
                    </div>
                  </a>
                </article>
              </div>
            </aside>
          </>
          <section className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              {/* Heading */}
              <div className="relative mb-10 pt-8 md:mb-16">
                <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-800 md:mb-6 md:text-4xl">
                  Empower Your Voice in the Developer Community
                </h2>
                <span className="absolute left-1/2 top-0 rounded-lg bg-cyan-400 px-2 text-white">
                  Features
                </span>
              </div>
              {/* /Heading */}
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
                {/* Article */}
                <article className="">
                  <a
                    className="block rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-2 transition hover:scale-105"
                    href="#"
                  >
                    <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
                      Create Your Own Blog <br />
                      Share Your Knowledge
                    </h2>
                    <div className="flex items-center rounded-md px-4 py-3">

                      <p className="ml-4 w-56">
                        <strong className="block text-lg font-medium text-white">
                          Developer Blog
                        </strong>
                        <span className="text-xs text-white">
                          {" "}
                          A small hub for tech blogs{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </article>
                {/* /Article */}
                {/* Article */}
                <article className="">
                  <a
                    className="block rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 p-2 transition hover:scale-105"
                    href="#"
                  >
                    <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
                      Discover Inspiring Content
                      Explore Developer Blogs
                    </h2>
                    <div className="flex items-center rounded-md px-4 py-3">

                      <p className="ml-4 w-56">
                        <strong className="block text-lg font-medium text-white">
                          Developer Blog
                        </strong>
                        <span className="text-xs text-white">
                          {" "}
                          A small hub for tech blogs{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </article>
                {/* /Article */}
                {/* Article */}
                <article className="">
                  <a
                    className="block rounded-lg bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-400 p-2 transition hover:scale-105"
                    href="#"
                  >
                    <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
                      Learn and Grow
                      Tutorials and Guides regarding tech
                    </h2>
                    <div className="flex items-center rounded-md px-4 py-3">

                      <p className="ml-4 w-56">
                        <strong className="block text-lg font-medium text-white">
                          Developer Blog
                        </strong>
                        <span className="text-xs text-white">
                          {" "}
                          A small hub for tech blogs{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </article>
                {/* /Article */}
                {/* Article */}
                <article className="">
                  <a
                    className="block rounded-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400 p-2 transition hover:scale-105"
                    href="#"
                  >
                    <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
                      Connect and Collaborate
                      Engage with the Community
                    </h2>
                    <div className="flex items-center rounded-md px-4 py-3">

                      <p className="ml-4 w-56">
                        <strong className="block text-lg font-medium text-white">
                          Developer Blog
                        </strong>
                        <span className="text-xs text-white">
                          {" "}
                          A small hub for tech blogs{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </article>
                {/* /Article */}
              </div>
            </div>
          </section>

        </div>
      </div>
      <div><>
        {/* ========== FOOTER ========== */}
        <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
          <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div className="col-span-full lg:col-span-1">
                <a
                  className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                  href="#"
                  aria-label="Explore"
                >
                  Explore
                </a>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Product</h4>
                <div className="mt-3 grid space-y-3">
                  <p>
                    <Link
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="create-blog"
                    >
                      Register
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="/signup"
                    >
                      Signup
                    </Link>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="#"
                    >
                      Docs
                    </a>
                  </p>
                </div>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Company</h4>
                <div className="mt-3 grid space-y-3">
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="About"
                    >
                      About us
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="blog-listing"
                    >
                      Blog
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="#"
                    >
                      contact
                    </a>{" "}
                    <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                      We're hiring
                    </span>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href="#"
                    >
                      Customers
                    </a>
                  </p>
                </div>
              </div>
              {/* End Col */}
              <div className="col-span-2">
                <h4 className="font-semibold text-gray-100">Stay up to date</h4>
                <form>
                  <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                    <div className="w-full">
                      <label htmlFor="hero-input" className="sr-only">
                        Subscribe
                      </label>
                      <input
                        type="text"
                        id="hero-input"
                        name="hero-input"
                        className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter your email"
                      />
                    </div>
                    <a
                      className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Subscribe
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">
                    New UI kits or big discounts. Never spam.
                  </p>
                </form>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400 dark:text-neutral-400">
                  © 2022 Preline. All rights reserved.
                </p>
              </div>
              {/* End Col */}
              {/* Social Brands */}
              <div>
                <a
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://www.facebook.com/login/"


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
                </a>
                <a
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://www.google.com/"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </a>
                <a
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://x.com/twitt_login"
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
                </a>
                <a
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://github.com/"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>

              </div>
              {/* End Social Brands */}
            </div>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </>
      </div>


    </div>
  )
}

export default Home