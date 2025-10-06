
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
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient relative overflow-hidden">
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
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-2 lg:order-1 space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'
          }`}>
            <div className="glass-dark rounded-3xl p-8 space-y-6 shadow-neon border border-primary/20">
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
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-primary/20 text-primary font-medium text-sm border border-primary/30 hover:bg-primary/30 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-neon ring-4 ring-primary/30 group-hover:ring-primary/50 transition-all duration-500 group-hover:scale-105">
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

