
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
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-gradient">
      <div className="max-w-7xl mx-auto relative z-10" ref={aboutRef}>
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about crafting exceptional digital experiences
          </p>
        </div>
        
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left: Intro Text */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Frontend Developer & UI Enthusiast
            </h3>
            
            <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I specialize in crafting <span className="text-primary font-semibold">responsive, user-friendly</span> websites and web applications using modern technologies like <span className="text-primary font-semibold">React, TypeScript,</span> and <span className="text-primary font-semibold">Tailwind CSS</span>.
              </p>
              
              <p>
                My approach combines <span className="text-foreground font-semibold">clean, maintainable code</span> with thoughtful design, ensuring seamless user interactions and optimal performance across all devices.
              </p>
              
              <p>
                I continuously explore the latest trends in <span className="text-primary font-semibold">UI/UX design</span> to bring innovation and elegance to every project, bridging the gap between aesthetics and functionality.
              </p>
            </div>
          </div>
          
          {/* Right: Picture */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-elegant ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 group-hover:scale-105">
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
    </section>
  );
};

export default About;

