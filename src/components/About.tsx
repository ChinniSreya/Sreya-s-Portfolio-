
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-[hsl(230,50%,10%)] via-[hsl(250,60%,15%)] to-[hsl(270,50%,12%)]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={aboutRef}>
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-neon">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-purple-500 mx-auto rounded-full shadow-neon"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate about crafting <span className="text-primary font-semibold">exceptional digital experiences</span>
          </p>
        </div>
        
        <div className={`glass-dark rounded-3xl p-8 lg:p-12 shadow-neon border border-primary/20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Intro Text */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Frontend Developer & <span className="text-gradient">UI Enthusiast</span>
              </h3>
              
              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I specialize in crafting <span className="text-primary font-semibold">responsive, user-friendly</span> websites and web applications using modern technologies like <span className="text-accent font-semibold">React, TypeScript,</span> and <span className="text-primary font-semibold">Tailwind CSS</span>.
                </p>
                
                <p>
                  My approach combines <span className="text-foreground font-semibold">clean, maintainable code</span> with thoughtful design, ensuring seamless user interactions and optimal performance across all devices.
                </p>
                
                <p>
                  I continuously explore the latest trends in <span className="text-gradient font-semibold">UI/UX design</span> to bring innovation and elegance to every project, bridging the gap between aesthetics and functionality.
                </p>
              </div>
            </div>
            
            {/* Right: Picture */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-neon ring-4 ring-primary/30 group-hover:ring-primary/50 transition-all duration-500 group-hover:scale-105">
                  <img 
                    src="/lovable-uploads/b5a29d4e-e8f9-4cc2-9fbd-40f228ca3427.png"
                    alt="Chinni Sreya Sri - Frontend Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

