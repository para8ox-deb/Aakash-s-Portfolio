export default function Portfolio() {
  const projects = [
    {
      title: 'Face Recognition-Based Attendance System',
      category: 'AI and Automation',
      tech: 'Python, Flask, dLib',
      image: 'src/images/projects/faceRecognitionSystem.png',
      demo: '#', // Add the demo link if available
      code: 'https://github.com/para8ox-deb/Face-Recognition-Attendance-System',
    },
    {
      title: 'Garbage Collector Robot',
      category: 'IoT and Robotics',
      tech: 'Sensors, Robotics Arm',
      image: 'src/images/projects/garbageCollector.jpg',
      demo: '#', // Add the demo link if available
      code: 'https://github.com/para8ox-deb/GarbageCollectorRobot',
    },
    {
      title: 'Voting App',
      category: 'Backend Development',
      tech: 'Node.js, Express.js, MongoDB',
      image: 'src/images/projects/votingApplication.png',
      demo: '#', // Add the demo link if available
      code: 'https://github.com/para8ox-deb/VotingApp',
    },
    {
      title: 'MemeGenerator Application',
      category: 'Desktop Application',
      tech: 'Python, Tkinter, Reddit API',
      image: 'src/images/projects/memeGenerator.png',
      demo: '#', // Add the demo link if available
      code: 'https://github.com/para8ox-deb/MemeGenerator',
    },
  ];

  return (
    <article className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700 text-amber-500">
        Portfolio
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-amber-500 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">{project.category}</p>
              <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-amber-500 hover:underline"
              >
                Source Code 🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
