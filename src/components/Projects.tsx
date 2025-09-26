
import { useState, useEffect, useRef } from "react";
import { Github, Star } from "lucide-react";
import aiSummarizerCover from "@/assets/ai-text-summarizer-cover.jpg";
import aiInterviewCover from "@/assets/ai-interview-assistant-cover.jpg";
import rentalMarketplaceCover from "@/assets/rental-marketplace-cover.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI Text Summarizer",
      description: "An intelligent text summarization tool powered by advanced AI algorithms that can condense long articles, documents, and content into concise, meaningful summaries while preserving key information.",
      image: aiSummarizerCover,
      tech: ["React", "TypeScript", "AI API", "Tailwind CSS"],
      githubUrl: "https://github.com/ChinniSreya/AI-Text-Summariser",
      featured: true
    },
    {
      id: 2,
      title: "AI Powered Interview Assistant",
      description: "A comprehensive interview preparation platform that uses AI to conduct mock interviews, provide real-time feedback, and help candidates improve their interview performance with personalized insights.",
      image: aiInterviewCover,
      tech: ["React", "AI Integration", "WebRTC", "Node.js"],
      githubUrl: "https://github.com/ChinniSreya/AI-Powered-Interview-Assistant-",
      featured: true
    },
    {
      id: 3,
      title: "Rental Market Place",
      description: "A comprehensive online platform connecting property owners with potential tenants, featuring advanced search filters, virtual tours, secure payment processing, and integrated communication tools for seamless rental transactions.",
      image: rentalMarketplaceCover,
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/ChinniSreya/Rental-Market-Place",
      featured: false
    }
  ];


  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-project-index={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 relative ${
                visibleProjects.includes(index) 
                  ? 'animate-fade-in translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star size={14} />
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
      </div>
    </section>
  );
};

export default Projects;
