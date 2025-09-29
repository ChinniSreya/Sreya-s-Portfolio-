
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={aboutRef}>
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-light text-primary-custom mb-6">
            About Me
          </h2>
          <div className="w-16 h-px bg-elegant-blue mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`order-2 lg:order-1 space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'
          }`}>
            <h3 className="text-xl sm:text-2xl font-medium text-primary-custom mb-6">
              Frontend Developer & UI Enthusiast
            </h3>
            <p className="text-base sm:text-lg text-secondary-custom leading-relaxed font-light">
              As a passionate frontend developer, I specialize in crafting responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React. I enjoy transforming creative ideas into visually appealing digital experiences with clean, maintainable code.
            </p>
            <p className="text-base sm:text-lg text-secondary-custom leading-relaxed font-light">
              My focus is on delivering seamless user interactions, optimizing performance, and ensuring cross-browser compatibility. I continuously explore the latest trends in UI/UX design to bring innovation to every project I work on.
            </p>
            <p className="text-base sm:text-lg text-secondary-custom leading-relaxed font-light">
              With a strong eye for design and detail, I strive to bridge the gap between aesthetics and functionality, creating engaging interfaces that enhance user satisfaction and support overall business goals.
            </p>
          </div>
          
          <div className={`order-1 lg:order-2 relative flex justify-center transition-all duration-700 delay-400 ${
            isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border hover:shadow-soft transition-all duration-300 hover-lift">
                <img 
                  src="/lovable-uploads/b5a29d4e-e8f9-4cc2-9fbd-40f228ca3427.png"
                  alt="Chinni Sreya Sri"
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

