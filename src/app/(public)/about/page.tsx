"use client";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="relative bg-white lg:mt-32 dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <Image
            src="https://images.pexels.com/photos/4339912/pexels-photo-4339912.jpeg" 
            alt="Profile"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right: About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold">Md shakib</span>, a
            passionate <span className="text-blue-600">Full-Stack  Developer</span>{" "}
            with experience in building modern, responsive, and user-friendly
            web applications. I love turning complex problems into simple,
            beautiful, and intuitive designs.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Skills & Expertise:
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
            <li>✅ React / Next.js</li>
            <li>✅ TypeScript</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Node.js / Express</li>
            <li>✅ MongoDB / PostgreSQL</li>
            <li>✅ REST APIs</li>
            <li>✅ Prisma</li>
            <li>✅ SQL</li>
            <li>✅ Figma</li>
          </ul>

          <div className="mt-8">
            <a
              href="/resume.pdf" 
              target="_blank"
              className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-full shadow hover:bg-yellow-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



export default AboutPage;