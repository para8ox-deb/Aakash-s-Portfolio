import { Mail, MapPin, Calendar, Github, Linkedin } from 'lucide-react'


export default function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg p-6 lg:w-80">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <img 
            src="src\images\Aakash.jpg" 
            alt="Aakash Kumar"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Aakash Kumar</h1>
        <p className="text-amber-500 mb-6">Computer Science Student | Backend Dev | Machine Learning & Ai</p>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-amber-500" />
            <a href="mailto:ak3183476@gmail.com" className="hover:text-amber-500">
              ak3183476@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-amber-500" />
            <span>Dec 10, 2004</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-amber-500" />
            <span>India</span>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/para8ox-deb" 
            target="_blank"
            className="text-gray-400 hover:text-amber-500 transition"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/para8ox-deb/"
            target="_blank" 
            className="text-gray-400 hover:text-amber-500 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </aside>
  )
}
