
import { useState } from "react";
import { ExternalLink, Github, Star, Code, Palette, Zap, Eye } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Marketplace",
      description: "A comprehensive e-commerce platform built with modern React ecosystem, featuring advanced product filtering, real-time inventory management, secure payment integration, and responsive design.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      category: "fullstack",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-blue-500 to-purple-600",
      stats: { views: "2.5k", stars: 127, forks: 45 }
    },
    {
      id: 2,
      title: "AI Weather Intelligence",
      description: "An intelligent weather dashboard with machine learning predictions, beautiful data visualizations, location-based forecasts, and interactive weather maps with real-time updates.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      category: "frontend",
      tech: ["React", "Chart.js", "Weather API", "AI/ML", "CSS3", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-cyan-500 to-blue-500",
      stats: { views: "1.8k", stars: 89, forks: 23 }
    },
    {
      id: 3,
      title: "Collaborative Task Hub",
      description: "A powerful project management application with real-time collaboration, drag-and-drop functionality, team messaging, file sharing, and advanced project analytics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      category: "fullstack",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-green-500 to-teal-500",
      stats: { views: "3.2k", stars: 156, forks: 67 }
    },
    {
      id: 4,
      title: "Portfolio Designer",
      description: "A modern portfolio website builder with customizable templates, dark/light themes, responsive design, and SEO optimization for creative professionals.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      category: "frontend",
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-purple-500 to-pink-500",
      stats: { views: "1.4k", stars: 78, forks: 19 }
    },
    {
      id: 5,
      title: "Smart Analytics Dashboard",
      description: "An enterprise-grade analytics platform with real-time data processing, interactive charts, custom reporting, and machine learning insights for business intelligence.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      category: "fullstack",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-orange-500 to-red-500",
      stats: { views: "4.1k", stars: 203, forks: 89 }
    },
    {
      id: 6,
      title: "Mobile Banking UI",
      description: "A sleek and secure mobile banking interface design with intuitive UX, biometric authentication, transaction tracking, and modern financial management features.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
      category: "design",
      tech: ["Figma", "Prototyping", "UI/UX Design", "User Research", "Design Systems"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-indigo-500 to-purple-500",
      stats: { views: "892", stars: 34, forks: 8 }
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Code },
    { id: "fullstack", label: "Full Stack", icon: Zap },
    { id: "frontend", label: "Frontend", icon: Palette },
    { id: "design", label: "UI/UX Design", icon: Eye }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-l from-purple-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my latest work in web development, UI/UX design, and innovative digital solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <category.icon size={18} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star size={14} />
                  Featured
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {project.stats.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {project.stats.stars}
                    </span>
                  </div>
                  <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold text-xs uppercase`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                10k+
              </div>
              <div className="text-gray-600 font-medium">Lines of Code</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-600 font-medium">Technologies Used</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
