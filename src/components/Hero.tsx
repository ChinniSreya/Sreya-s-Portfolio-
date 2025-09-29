import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-elegant">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center pt-20 animate-fade-in">
          <div className="space-y-8">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-sm text-secondary-custom font-medium tracking-wide uppercase">Frontend Developer</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary-custom leading-tight">
                Hi, I'm{" "}
                <span className="font-medium text-elegant-blue">
                  Chinni Sreya Sri
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-secondary-custom max-w-2xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
              A passionate frontend developer specializing in crafting beautiful, responsive, and user-friendly web interfaces. 
              Dedicated to creating exceptional digital experiences with clean, modern design.
            </p>

            <div className="flex justify-center gap-8 pt-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://www.linkedin.com/in/chinni-sreya-sri-779514249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-custom hover:text-elegant-blue transition-all duration-300 hover-lift"
              >
                <Linkedin size={22} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ChinniSreya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-custom hover:text-primary-custom transition-all duration-300 hover-lift"
              >
                <Github size={22} />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium transition-all duration-300 hover-lift shadow-soft"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-border text-primary-custom hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover-lift"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={20} className="text-secondary-custom opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
