import { useState } from 'react'
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter } from 'lucide-react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-gray-800">
    {
      <main className="min-h-screen bg-gray-900 text-gray-100 py-4 px-4 md:py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar />
        
        <div className="flex-1">
          <nav className="bg-gray-800 rounded-lg mb-6">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 p-4">
              <li>
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`px-4 py-2 rounded transition ${activeTab === 'about' ? 'bg-amber-500 text-gray-900' : 'hover:bg-gray-700'}`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('resume')} 
                  className={`px-4 py-2 rounded transition ${activeTab === 'resume' ? 'bg-amber-500 text-gray-900' : 'hover:bg-gray-700'}`}
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`px-4 py-2 rounded transition ${activeTab === 'portfolio' ? 'bg-amber-500 text-gray-900' : 'hover:bg-gray-700'}`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-4 py-2 rounded transition ${activeTab === 'contact' ? 'bg-amber-500 text-gray-900' : 'hover:bg-gray-700'}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {activeTab === 'about' && <About />}
          {activeTab === 'resume' && <Resume />}
          {activeTab === 'portfolio' && <Portfolio />}
          {activeTab === 'contact' && <Contact />}
        </div>
      </div>
    </main>
    }
  </div>
  )
}

export default App
