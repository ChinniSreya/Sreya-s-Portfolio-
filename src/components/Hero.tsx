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
        <div className="max-w-6xl mx-auto text-center pt-20">
          <div className="space-y-12">
            {/* Header content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark shadow-neon animate-scale-in">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]"></div>
                <span className="text-base sm:text-lg font-medium text-foreground">Front End Enthusiastic</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Hi, I'm <span className="text-gradient drop-shadow-[0_0_30px_hsl(var(--primary)/0.8)]">Sreya Sri</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A passionate developer focused on crafting modern, user-friendly websites and apps. I enjoy turning ideas into reality.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center items-center animate-fade-in pt-4" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 text-base sm:text-lg rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-neon hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 text-base sm:text-lg rounded-full glass-dark border border-primary/30 hover:border-primary text-foreground font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
