
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
                A passionate Front-End Developer focused on crafting <span className="text-primary font-semibold">responsive, engaging, and user-friendly</span> web interfaces. Skilled in <span className="text-primary font-semibold">HTML, CSS, JavaScript, and React.js</span>, with a strong eye for clean design and performance optimization.
              </p>
              
              <p>
                Dedicated to transforming creative ideas into seamless digital experiences that enhance usability and aesthetics. Continuously learning modern frameworks and best practices to stay ahead in the evolving tech landscape.
              </p>
              
              <p>
                With a keen interest in <span className="text-primary font-semibold">interactive design and problem-solving</span>, I aim to develop innovative web solutions that deliver both functionality and visual appeal. My goal is to build intuitive applications that create meaningful impact for users and businesses alike.
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

