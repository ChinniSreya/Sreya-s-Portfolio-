import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <Navigation />
      
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center pt-20">
          <div className="space-y-10">
            {/* Header content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm animate-scale-in">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-foreground">Hi, I'm </span>
                <br className="hidden sm:block" />
                <span className="text-gradient">Chinni Sreya Sri</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Frontend Developer
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Crafting beautiful, responsive, and user-friendly web interfaces with modern technologies. 
              Passionate about creating exceptional digital experiences that make a difference.
            </p>

            {/* Social links */}
            <div className="flex justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://www.linkedin.com/in/chinni-sreya-sri-779514249"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ChinniSreya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-foreground hover:shadow-md transition-all duration-300"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
              </a>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 rounded-2xl bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-primary text-foreground hover:text-primary font-semibold transition-all duration-300 hover:shadow-md flex items-center gap-2"
              >
                <Download size={20} className="transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-8 mb-10 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ArrowDown size={20} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
