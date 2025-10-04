import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl lg:mt-28 md:mt-14 mt-10 mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
          👋 Hi, I’m
        </h2>
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl mb-4">
          <span className="text-[#344c36]">John Doe</span>
        </h1>
        <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-400 mb-6">
          Full Stack Web Developer
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8">
          I specialize in building modern, scalable, and high-performance web
          applications using{" "}
          <span className="font-semibold text-yellow-500">MERN Stack</span> and{" "}
          <span className="font-semibold text-yellow-500">Next.js</span>. From
          crafting beautiful UI/UX with React & Tailwind to developing secure
          APIs and databases with Node.js & MongoDB, I love delivering
          end-to-end solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-lg  transition"
          >
             Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-black text-black hover:bg-violet-50 rounded-full dark:hover:bg-gray-800 transition"
          >
             View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <a
            href="https://github.com/"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-violet-600 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-violet-600 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 dark:text-gray-300 hover:text-violet-600 transition"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="https://images.pexels.com/photos/23885853/pexels-photo-23885853.jpeg"
          alt="Profile"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover border-4 border-yellow-500"
        />
      </div>
    </section>
  );
}
