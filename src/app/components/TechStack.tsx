"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";

export function TechStack() {
  return (
    <div className="mx-auto py-4 px-8 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <h1 className="my-4 text-4xl text-center capitalize font-bold relative">
        tech stack
      </h1>
      {/* <GridBackgroundDemo /> */}
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "front-end",
    description: "JS,React,NEXT.JS",
    link: "",
  },
  {
    title: "Backend",
    description: "NODE.JS,JAVA",
    link: "",
  },
  {
    title: "database",
    description: "MongoDB,MYSQL",
    link: "",
  },
  {
    title: "Server",
    description: "NEXT.JS,EXPRESS",
    link: "",
  },
];
