import { useState } from "react";
import { Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import aiSummarizerCover from "@/assets/ai-text-summarizer-cover.jpg";
import aiInterviewCover from "@/assets/ai-interview-assistant-cover.jpg";
import rentalMarketplaceCover from "@/assets/rental-marketplace-cover.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 } as any,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1] as any,
        staggerChildren: 0.2
      }
    } as any
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 } as any,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as any }
    } as any
  };

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
      description: "A smart platform connecting owners and renters with secure transactions, real-time availability tracking, and an integrated analytics dashboard for seamless rental management.",
      image: rentalMarketplaceCover,
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/ChinniSreya/Rental-Market-Place",
      featured: false
    }
  ];


  return (
    <motion.section 
      id="projects" 
      className="py-20 sm:py-28 px-6 overflow-hidden relative section-gradient"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16 sm:mb-20" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions crafted with modern technologies and thoughtful design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group glass-dark rounded-3xl overflow-hidden shadow-elegant transition-all duration-300 hover:-translate-y-3 relative border-2 border-primary/20 hover:border-primary/40"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Star size={12} className="fill-white" />
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.title} - Project showcase`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95 flex items-center justify-center transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
                }`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:scale-110 group/btn"
                    title="View Source Code"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={24} className="group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="p-7">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-5 line-clamp-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-medium border border-primary/20 animate-fade-in hover:bg-primary/20 transition-colors"
                      style={{ animationDelay: `${(idx + 1) * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
