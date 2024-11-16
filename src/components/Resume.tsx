import { useState } from 'react';
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter } from 'lucide-react';

export default function Resume() {
  return (
    <article className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700 text-amber-500 transition-transform duration-300 transform hover:scale-105">
        Resume
      </h2>

      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-amber-500 mb-6 animate__animated animate__fadeIn">
          Education
        </h3>

        <div className="space-y-8">
          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">Vellore Institute of Technology, Chennai</h4>
            <p className="text-amber-500">2021 - 2025</p>
            <p className="text-gray-300">Bachelor of Technology in Computer Science Engineering with AI and Robotics</p>
            <p className="text-gray-300">CGPA: 8.98</p>
          </div>

          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">St. Anselm’s Sr. Sec. School, Alwar</h4>
            <p className="text-amber-500">2021</p>
            <p className="text-gray-300">Class XII (CBSE) - 91%</p>
          </div>

          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">St. Anselm’s Sr. Sec. School, Alwar</h4>
            <p className="text-amber-500">2019</p>
            <p className="text-gray-300">Class X (CBSE) - 92%</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12 animate__animated animate__fadeIn">
        <h3 className="text-2xl font-semibold text-amber-500 mb-6">
          Skills
        </h3>

        {/* First row of skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h5 className="font-semibold text-amber-500 mb-4">Programming Languages</h5>
            <ul className="space-y-2 text-gray-300">
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h5 className="font-semibold text-amber-500 mb-4">Web Development</h5>
            <ul className="space-y-2 text-gray-300">
              <li>HTML, CSS, JS</li>
              <li>MERN Stack</li>
              <li>Flask</li>
              <li>Deployment</li>
            </ul>
          </div>
        </div>

        {/* Second row of skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h5 className="font-semibold text-amber-500 mb-4">Tools and Platforms</h5>
            <ul className="space-y-2 text-gray-300">
              <li>Git</li>
              <li>GitHub</li>
              <li>Linux</li>
              <li>WordPress</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h5 className="font-semibold text-amber-500 mb-4">Other Skills</h5>
            <ul className="space-y-2 text-gray-300">
              <li>Data Structures & Algorithms</li>
              <li>Networking</li>
              <li>UI/UX Design</li>
              <li>MySQL</li>
              <li>Ethical Hacking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Positions of Responsibility Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-amber-500 mb-6 animate__animated animate__fadeIn">
          Positions of Responsibility
        </h3>

        <div className="space-y-8">
          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">DAC (Data Analytics Club)</h4>
            <p className="text-amber-500">Tech Member (2021 - 2022)</p>
            <p className="text-gray-300">
              ● Contributed to the website creation of the club. Worked on the frontend using React JS.
            </p>
          </div>

          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">Linux Club</h4>
            <p className="text-amber-500">Tech Member (2022 - 2023)</p>
            <p className="text-gray-300">
              ● Hosted the club event website on Amazon AWS.<br />
              ● Installed Linux on students' systems, Managed events such as Password, HackersHorizon, etc.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-amber-500 mb-6 animate__animated animate__fadeIn">
          Certifications & Achievements
        </h3>

        <div className="space-y-8">
          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">Certifications</h4>
            <ul className="space-y-2 text-gray-300">
              <li>CDL (Cloud Digital Leader)</li>
              <li>GCCF (Google Cloud Computing Foundations Program)</li>
            </ul>
          </div>

          <div className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">Extracurricular Achievements</h4>
            <ul className="space-y-2 text-gray-300">
              <li>5 stars in C++, Java, and Python on HackerRank.</li>
              <li>Currently practicing LeetCode for Data Structures and Algorithms.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-8 text-center animate__animated animate__fadeIn">
        <a
          href="/src/resume/resume.pdf"
          download="Aakash_Kumar_Resume"
          className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </article>
  );
}
