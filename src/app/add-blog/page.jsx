'use client';   
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';

const AddBlog = () => {
  const [blogList, setBlogList] = useState([]);
  const runOnce = useRef(false);

  // Fetch blog data on client-side only
  useEffect(() => {
    if (!runOnce.current) {
      axios.get('http://localhost:5000/blog/getall')
        .then(res => {
          setBlogList(res.data);
        })
        .catch(err => {
          console.error("Error fetching blogs", err);
        });
      runOnce.current = true;
    }
  }, []);

  const displayBlogs = () => {
    return blogList.map(blog => (
      <div key={blog._id} className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-4 md:text-left">{blog.title}</h1>
              <p className="mb-4 text-gray-500 sm:text-lg md:mb-8">{blog.description}</p>
              <Link
                href={'/viewblog/' + blog._id}
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src={blog.cover} loading="lazy" alt={blog.cover} className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="border-2 border-solid ">
        <h1 className="pb-4 pt-6 text-3xl font-bold leading-9 md:text-4xl md:leading-10 lg:text-4xl lg:leading-10 font-serif text-center"> Publish your passions, your way</h1>
        <p className="mb-4 font-sans text-base font-light leading-7 text-gray-600 md:text-xl md:leading-7 lg:text-xl lg:leading-7 text-center">Enjoy millions of blogs at your fingertips.</p>
      </div>
      {displayBlogs()}
    </div>
  );
};

export default AddBlog;
