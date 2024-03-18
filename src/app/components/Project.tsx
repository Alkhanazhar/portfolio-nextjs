"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function Projects() {
  return (
    <>
      <h1 className="my-4 text-4xl text-center capitalize font-bold">
        projects
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full  w-fit  text-md font-bold py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="300"
                    width="500"
                    className="overflow-hidden aspect-square rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "Ecommerce",
    description: (
      <div className="tracking-[2px] ">
        <li>
          MongodbCloud, BCRYPT, Concurrently, ExpressFormidable, Jwt, Slugify,
          Morgan, Mongoose, Cors, Nodejs, Express, ReactJs, Axios, Toastify,
        </li>

        <li>Secure e-commerce platform with JWT for enhanced security.</li>
        <li>
          Express middleware for file handling, URL-friendly slugs. Intuitive UI
          using React.js, Context API, React Router Dom
        </li>
      </div>
    ),
    badge: "MERN APPLICATION",
    image:
      "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chat App",
    description: (
      <div className="tracking-[2px] ">
        <li>
          MongodbCloud, BCRYPT, Concurrently, Jwt,           Morgan, Mongoose, Cors, Nodejs, Express, ReactJs, Axios, Toastify,mui
        </li>

        <li>Secure e-commerce platform with JWT for enhanced security.</li>
      </div>
    ),
    badge: "SOCKET .IO",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "BLOG MERN",
    description: (
      <div className="tracking-[2px] ">
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </div>
    ),
    badge: "FULL STACK MERN WITH MATERIAL UI",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "NETFLIX GPT",
    description: (
      <div className="tracking-[2px] ">
        <li>
          Firebase, ReactJs, Auth, Regex, React-Router-Dom, React-redux-toolkit,
          Axios, TMDB API, Tailwindcss, useEffect, Gpt-api • ReactJS web app
          with Firebase authentication.
        </li>
        <li>
          Integration with TMDB API for movie data and Gpt API for a movie
          recommendation system. 
        </li>
      </div>
    ),
    badge: "NETFLIX AND GPT SEARCH",
    image:
      "https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Food ordering web app",
    description: (
      <div className="tracking-[2px] ">
        <li>
          Express, Node.js, MongodbCloud, Mongoose, ReduxToolKit, Axios,
          Tailwindcss, daisyui, Stripe/react-stripe-js, cloudinary,
          jsonwebtoken, cors, ContextApi, UseReducer, useEffect, ReactRouterDom,
        </li>
        stripe
        <li>
          RESTful backend within the MERN stack for a food web application.
        </li>
        <li>Dynamic and responsive UIs using React.js. </li>
        <li>Context API for efficient global state management</li>
      </div>
    ),
    badge: "FOOD DELIVERY APP",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBhcHB8ZW58MHx8MHx8fDA%3D",
  },
];
