export default function About() {
  return (
    <article className="bg-gray-800 rounded-lg p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700 text-amber-500 animate-slideInFromLeft">
        About Me
      </h2>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg animate-slideInFromBottom">
          Hello, I am <span className="font-semibold text-amber-500">Aakash Kumar</span>.
        </p>
        <p className="text-lg animate-slideInFromBottom delay-100">
          A passionate Computer Science student specializing in AI and Robotics
          at <span className="font-semibold text-amber-500">Vellore Institute of Technology, Chennai</span>.
        </p>
        <p className="text-lg animate-slideInFromBottom delay-200">
          Skilled in developing innovative and efficient software solutions,
          with expertise in <span className="font-semibold text-amber-500">C++, Java, Python, HTML, CSS, JavaScript, Node.js, MongoDB, Flask</span>, and more.
        </p>
        <p className="text-lg animate-slideInFromBottom delay-300">
          I am eager to leverage my technical skills, problem-solving abilities, and
          creative mindset to contribute to impactful projects and address real-world
          challenges in the tech industry.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6 text-amber-500 animate-slideInFromLeft">
        What I Do
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/60 transition-all duration-300 transform hover:scale-105 animate-fadeIn">
          <h4 className="text-lg font-semibold mb-4 text-amber-500">Software Development</h4>
          <p className="text-gray-300 text-lg">
            Proficient in creating efficient algorithms, developing software,
            and building innovative applications using modern programming languages
            and frameworks. I focus on writing clean, scalable, and maintainable code.
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/60 transition-all duration-300 transform hover:scale-105 animate-fadeIn delay-200">
          <h4 className="text-lg font-semibold mb-4 text-amber-500">Full-Stack Development</h4>
          <p className="text-gray-300 text-lg">
            Crafting dynamic web applications with expertise in front-end and back-end
            technologies like <span className="font-semibold text-amber-500">React, Node.js, Express.js, and MongoDB</span>.
            I build responsive, scalable, and user-friendly web applications with attention to both design and functionality.
          </p>
        </div>
      </div>
    </article>
  );
}
