"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { GridBackgroundDemo } from "./GridBackground";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="my-4 text-4xl text-center capitalize font-bold mb-24">
        What people say about our work
      </h1>
      <GridBackgroundDemo />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Incredible expertise in MERN stack development. Delivered outstanding results within tight deadlines. Highly recommended for any project requiring React.js, Node.js, MongoDB, and Express.js proficiency.",
    name: "John Doe",
    title: "CEO, Tech Solutions Inc.",
  },
  {
    quote:
      "Exceptional skills in React.js and Node.js. Highly recommend for any MERN stack projects. Demonstrated the ability to create seamless user experiences and handle complex database operations effectively.",
    name: "Jane Smith",
    title: "CTO, Digital Innovations Co.",
  },
  {
    quote:
      "MERN stack master! Created a seamless user experience and handled complex database operations effortlessly. Highly impressed with their React.js and Node.js proficiency.",
    name: "David Johnson",
    title: "Lead Developer, WebWorks Ltd.",
  },
  {
    quote:
      "Impressive MongoDB and Express.js proficiency. Transformed our project with efficient backend solutions. Demonstrated excellent problem-solving skills and attention to detail.",
    name: "Emily Brown",
    title: "Product Manager, CloudTech Corp.",
  },
  {
    quote:
      "Outstanding MERN stack developer! Always goes the extra mile to ensure project success. Demonstrated proficiency in React.js, Node.js, MongoDB, and Express.js.",
    name: "Michael Wilson",
    title: "Founder, Innovate Solutions LLC",
  },
];

