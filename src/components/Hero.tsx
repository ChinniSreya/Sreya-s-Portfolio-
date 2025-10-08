import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(230,50%,10%)] via-[hsl(250,60%,15%)] to-[hsl(270,50%,12%)]"></div>
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-60" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      {/* Neon glow effects with enhanced colors */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/40 via-purple-500/30 to-transparent rounded-full blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/35 via-fuchsia-500/25 to-transparent rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/25 to-purple-500/25 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      
      {/* Accent neon streaks */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[3px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-[250px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <Navigation />
      
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center pt-20">
          <div className="space-y-10">
            {/* Header content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark shadow-neon animate-scale-in">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]"></div>
                <span className="text-sm font-medium text-foreground">Front End Enthusiastic</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-neon drop-shadow-[0_0_30px_hsl(var(--primary)/0.8)]">Hi, I'm Sreya Sri</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
              Crafting <span className="text-primary font-semibold">beautiful</span>, <span className="text-accent font-semibold">responsive</span>, and user-friendly web interfaces with modern technologies. 
              Passionate about creating <span className="text-gradient font-semibold">exceptional digital experiences</span> that make a difference.
            </p>

            {/* Social links */}
            <div className="flex justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://www.linkedin.com/in/chinni-sreya-sri-779514249"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-dark hover:border-primary hover:shadow-neon transition-all duration-300"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ChinniSreya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-dark hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] transition-all duration-300"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-medium text-muted-foreground group-hover:text-accent transition-colors">GitHub</span>
              </a>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 rounded-2xl bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-neon hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 rounded-2xl glass-dark border-2 border-primary/30 hover:border-primary text-foreground hover:text-primary font-semibold transition-all duration-300 hover:shadow-neon hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} className="transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-8 mb-10 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ArrowDown size={20} className="text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
