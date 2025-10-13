import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-float opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-float opacity-25" style={{ animationDelay: '1s' }}></div>
      
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

            {/* Scroll down arrow */}
            <div className="flex justify-center pt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Scroll down"
              >
                <span className="text-sm font-medium">Scroll Down</span>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ArrowDown 
                    size={28} 
                    className="relative animate-bounce text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]" 
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
