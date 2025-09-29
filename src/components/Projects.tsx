
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
      title: "Rental Marketplace",
      description: "Build a platform connecting owners and renters seamlessly",
      objective: "Build a platform connecting owners and renters seamlessly",
      features: [
        "Smart search & filter for rental items",
        "Secure transactions & wallet integration", 
        "Real-time availability tracking",
        "Analytics dashboard for owners"
      ],
      impact: "Increased accessibility, convenience, and cost savings",
      image: rentalMarketplaceCover,
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/ChinniSreya/Rental-Market-Place",
      featured: false
    }
  ];


  return (
    <section id="projects" className="py-20 px-6 bg-gradient-elegant overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-primary-custom mb-6">
            Featured <span className="text-elegant-blue font-medium">Projects</span>
          </h2>
          <div className="w-16 h-px bg-elegant-blue mx-auto mb-6"></div>
          <p className="text-lg text-secondary-custom max-w-2xl mx-auto font-light">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-project-index={index}
              className={`bg-gradient-card rounded-2xl shadow-soft overflow-hidden hover:shadow-elegant transition-all duration-700 hover-lift border border-border/50 relative ${
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
                <div className="absolute top-4 left-4 z-20 bg-elegant-blue text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} />
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-elegant-blue/80 to-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-elegant"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-medium text-primary-custom mb-4">{project.title}</h3>
                
                {project.id === 3 ? (
                  // Professional Rental Marketplace Layout
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-elegant-blue font-medium mb-2">Objective</h4>
                      <p className="text-secondary-custom text-sm font-light">{project.objective}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-elegant-blue font-medium mb-2">Features</h4>
                      <ul className="space-y-1">
                        {project.features?.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="text-secondary-custom text-sm flex items-start gap-2 animate-fade-in font-light"
                            style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                          >
                            <span className="text-elegant-blue mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-elegant-blue font-medium mb-2">Impact</h4>
                      <p className="text-secondary-custom text-sm font-light">{project.impact}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-secondary-custom mb-4 line-clamp-3 font-light">{project.description}</p>
                )}
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={tech}
                      className="bg-accent/50 text-primary-custom text-sm px-3 py-1 rounded-full border border-border/30 animate-fade-in font-medium"
                      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
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
