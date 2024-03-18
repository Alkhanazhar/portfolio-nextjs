import Image from "next/image";
import { MovingBorderDemo } from "./MovingBorderBtn";
import { MovingBorder } from "./ui/moving-border";
import { GridBackgroundDemo } from "./GridBackground";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const linkedInId = "https://www.linkedin.com/in/azhar-khan-628a4416b/";
  const githubId = "https://github.com/Alkhanazhar";
  const twitterId = "your-twitter-id";
  return (
    <section className="h-auto md:h-[46rem] flex  justify-center items-center relative overflow-hidden py-10 md:py-0 container mx-auto px-12 flex-col md:flex-row gap-24">
      <div className="fixed top-2 right-4 gap-4 items-center z-[999] hidden md:flex">
        <ul className="flex gap-4 text-xl">
          <li className="hover:text-slate-500 duration-200">
            <Link href={`https://www.linkedin.com/in/${linkedInId}`}>
              <FaLinkedin />
            </Link>
          </li>
          <li className="hover:text-slate-500 duration-200">
            <Link href={`https://github.com/${githubId}`}>
              <FaGithub />
            </Link>
          </li>
          <li className="hover:text-slate-500 duration-200">
            <Link href={`https://twitter.com/${twitterId}`}>
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:flex-1 md:mt-24 mt-36 space-y-8 md:space-y-4 gap-24">
        <h2 className="text-4xl font-bold bg-gradient-to-t from-[#ffffff] to-neutral-400 text-transparent bg-clip-text mb-4 tracking-[4px]">
          Hi i am Azhar khan
        </h2>
        <h1 className="text-6xl  font-bold bg-clip-text bg-gradient-to-t from-[#ffffff] bg-yellow-50 to-neutral-400  text-transparent mb-4">
          I am a Web Developer
        </h1>
        <p className="text-neutral-400 mb-4">
          I{"'"}m a MERN stack developer specializing in Next.js. With expertise
          in MongoDB, Express.js, React.js, and Node.js, I craft SEO-friendly
          websites for optimal visibility. Explore my latest projects and let
          {"'"}s collaborate to elevate your online presence. Contact me to
          discuss how I can bring your vision to life.
        </p>
        <MovingBorderDemo />
      </div>
      <div className="flex-1 flex items-center justify-center px-12">
        <Image
          src={"/hero.jpg"}
          alt="hero-img"
          width={400}
          height={400}
          className="rounded-full overflow-hidden aspect-square object-cover grayscale"
        />
      </div>
    </section>
  );
};

export default Hero;
