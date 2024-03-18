"use client";

import { FaLock, FaCode, FaServer, FaSearch } from "react-icons/fa";
const About = () => {
  return (
    <div className=" h-auto w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] pb-8 bg-grid-small-black/[0.2] relative ">
      <h1 className="py-8  text-4xl  text-center uppercase font-bold relative">
        About me
      </h1>
      <div className="container mx-auto">
        <div className="h-[30rem] flex   items-center justify-center ">
          {/* about me paragraph left */}
          <div className="w-10/12  tracking-[2px] leading-9 text-neutral-600 dark:text-neutral-200 md:text-xl sm:text-base  ">
            <span className="text-orange-500">{"<p>"}</span>
            <br />
            Hello there! I m Azhar Khan, i am from Bhopal Madhya pradesh i am a
            dedicated web developer specializing in the MERN stack. With a
            passion for crafting seamless digital experiences, I leverage the
            power of MongoDB, Express.js, React.js,Next.js and Node.js to build
            innovative and scalable web applications.
            <br />
            <span className="text-orange-500">{"</p>"}</span>
          </div>
        </div>
        {/* content services */}
        <h1 className="py-8  text-4xl  text-center uppercase font-bold relative">
          Services
        </h1>
        <div className=" grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 grid-cols-1 content-center place-content-center mx-auto w-10/12">
          <section className="section">
            <FaServer size={28} className="text-orange-500" />
            <h2>Server Management</h2>
            <p>
              Efficient server management is crucial for maintaining uptime and
              performance. We employ containerization tools like Docker for
              deployment and orchestration, alongside cloud platforms such as
              AWS and Azure for scalable infrastructure solutions.
            </p>
          </section>
          <section className="section">
            <FaLock size={28} className="text-orange-500" />
            <h2>Web Security</h2>
            <p>
              Web security is essential in today{"'"}s digital landscape. We
              utilize industry-standard security protocols and encryption
              methods to safeguard user data, employing technologies such as
              JSON Web Tokens (JWT) for authentication and authorization.
            </p>
          </section>
          <section className="section">
            <FaCode size={28} className="text-orange-500" />
            <h2>Web Development</h2>
            <p>
              Our web development expertise spans the MERN stack (MongoDB,
              Express.js, React.js, Node.js), enabling us to build powerful and
              scalable applications. Additionally, we leverage technologies like
              Next.js for server-side rendering and optimized performance.
            </p>
          </section>
          <section className="section">
            <FaSearch size={28} className="text-orange-500" />
            <h2>SEO</h2>
            <p>
              Search Engine Optimization (SEO) is integral to maximizing online
              visibility. Through strategic keyword research, content
              optimization, and link-building techniques, we ensure that your
              website ranks high in search engine results, driving organic
              traffic and engagement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
