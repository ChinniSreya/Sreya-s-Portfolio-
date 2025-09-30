
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
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={aboutRef}>
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate about crafting exceptional digital experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-2 lg:order-1 space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'
          }`}>
            <div className="glass rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Frontend Developer & UI Enthusiast
              </h3>
              
              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I specialize in crafting <span className="text-foreground font-semibold">responsive, user-friendly</span> websites and web applications using modern technologies like <span className="text-foreground font-semibold">React, TypeScript,</span> and <span className="text-foreground font-semibold">Tailwind CSS</span>.
                </p>
                
                <p>
                  My approach combines <span className="text-foreground font-semibold">clean, maintainable code</span> with thoughtful design, ensuring seamless user interactions and optimal performance across all devices.
                </p>
                
                <p>
                  I continuously explore the latest trends in <span className="text-foreground font-semibold">UI/UX design</span> to bring innovation and elegance to every project, bridging the gap between aesthetics and functionality.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 relative flex justify-center transition-all duration-700 delay-400 ${
            isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50 group-hover:ring-primary/30 transition-all duration-500 group-hover:scale-105">
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

