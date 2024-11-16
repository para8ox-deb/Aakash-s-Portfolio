import { Mail, MapPin, Calendar, Github, Linkedin } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg p-6 lg:w-80 transition-all duration-500 transform hover:scale-100 hover:bg-gray-700">
      <div className="text-center animate__animated animate__fadeIn">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
          <img 
            src="/images/logo/Aakash.jpg" 
            alt="Aakash Kumar"
            className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
          />
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-amber-500 transition-all duration-300 transform hover:scale-105">
          Aakash Kumar
        </h1>
        <p className="text-amber-500 mb-6 animate__animated animate__fadeIn animate__delay-1.5s">
          Computer Science Student | Backend Dev | Machine Learning & AI
        </p>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-2 animate__animated animate__fadeIn animate__delay-2s">
            <Mail size={16} className="text-amber-500" />
            <a href="mailto:ak3183476@gmail.com" className="hover:text-amber-500 transition-all duration-300">
              ak3183476@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 animate__animated animate__fadeIn animate__delay-2.5s">
            <Calendar size={16} className="text-amber-500" />
            <span>Dec 10, 2004</span>
          </div>

          <div className="flex items-center gap-2 animate__animated animate__fadeIn animate__delay-3s">
            <MapPin size={16} className="text-amber-500" />
            <span>India</span>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6 animate__animated animate__fadeIn animate__delay-3.5s"></div>

        <div className="flex justify-center gap-4 animate__animated animate__fadeIn animate__delay-4s">
          <a 
            href="https://github.com/para8ox-deb" 
            target="_blank"
            className="text-gray-400 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/para8ox-deb/"
            target="_blank" 
            className="text-gray-400 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
}
