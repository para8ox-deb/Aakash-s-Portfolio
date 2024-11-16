import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <article className="bg-gray-800 rounded-lg p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700 text-amber-500 animate-slideInFromTop">
        Contact Me
      </h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slideInFromLeft">
          <Mail className="text-amber-500 w-6 h-6" />
          <a
            href="mailto:ak3183476@gmail.com"
            className="text-gray-300 text-lg font-medium hover:text-amber-500 transition"
          >
            ak3183476@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slideInFromRight delay-100">
          <Linkedin className="text-amber-500 w-6 h-6" />
          <a
            href="https://www.linkedin.com/in/para8ox-deb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-lg font-medium hover:text-amber-500 transition"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slideInFromLeft delay-200">
          <Github className="text-amber-500 w-6 h-6" />
          <a
            href="https://github.com/para8ox-deb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-lg font-medium hover:text-amber-500 transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Call-to-Action */}
      <h4 className="text-2xl font-bold text-center mt-12 text-gray-300 animate-fadeIn delay-300">
        Let’s Connect!
      </h4>
      <p className="text-center text-gray-400 mt-2 animate-fadeIn delay-400">
        Feel free to reach out for collaborations or just a friendly chat.
      </p>
    </article>
  );
}
