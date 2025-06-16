import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Text Summarizer",
      description: "An intelligent text summarization tool powered by advanced AI algorithms that can condense long articles, documents, and content into concise, meaningful summaries while preserving key information.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "AI API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Powered Interview Assistant",
      description: "A comprehensive interview preparation platform that uses AI to conduct mock interviews, provide real-time feedback, and help candidates improve their interview performance with personalized insights.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      tech: ["React", "AI Integration", "WebRTC", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Chrome Extension for Phishing Detection",
      description: "A browser security extension that uses machine learning to detect and prevent phishing attacks in real-time, protecting users from malicious websites and suspicious links.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tech: ["JavaScript", "Chrome API", "Machine Learning", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star size={14} />
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
