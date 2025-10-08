
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-element-index') || '0');
            setVisibleElements(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C" },
        { name: "Java" },
        { name: "Python" },
        { name: "SQL" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub" },
        { name: "VS Code" },
        { name: "Responsive Design" },
        { name: "Database Management" }
      ]
    }
  ];

  const achievements = [
    {
      title: "VR Siddartha College Hackathon",
      position: "3rd Place",
      description: "Secured 3rd position in competitive programming hackathon",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "VIT AP Cyber Security Hackathon", 
      position: "Participant",
      description: "Participated in cyber security focused competition",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "IIIT Sricity Hackathon",
      position: "4th Place", 
      description: "Achieved 4th place in prestigious coding competition",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Java Kingdom Workshop",
      position: "Mentor",
      description: "Successfully mentored 700+ students in Java programming",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "36-Hour Hackathon",
      position: "Organizer",
      description: "Successfully organized and managed a 36-hour hackathon event",
      color: "from-red-400 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-gradient-to-br from-[hsl(230,50%,10%)] via-[hsl(250,60%,15%)] to-[hsl(270,50%,12%)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools that power my development workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={(el) => (elementRefs.current[index] = el)}
              data-element-index={index}
              className={`glass-dark rounded-3xl p-8 shadow-elegant transition-all duration-700 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/40 relative overflow-hidden ${
                visibleElements.includes(index) 
                  ? 'animate-fade-in translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
              
              <div className="mb-8 text-center relative z-10">
                <h3 className="text-xl font-bold text-neon">{category.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full animate-glow"></div>
              </div>
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group relative overflow-hidden rounded-xl bg-card/60 hover:bg-primary/20 px-4 py-3 text-center transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105">
                    <span className="text-foreground font-medium group-hover:text-neon transition-colors">{skill.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Achievements</span> & Recognition
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase my journey and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              ref={(el) => (elementRefs.current[skillCategories.length + index] = el)}
              data-element-index={skillCategories.length + index}
              className={`glass-dark rounded-3xl p-8 text-center shadow-elegant transition-all duration-700 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/40 relative overflow-hidden ${
                visibleElements.includes(skillCategories.length + index) 
                  ? 'animate-fade-in translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-full"></div>
              
              <div className={`bg-gradient-to-r ${achievement.color} text-white px-5 py-2.5 rounded-2xl text-sm font-bold mb-6 inline-block shadow-neon relative z-10 animate-glow`}>
                {achievement.position}
              </div>
              <h4 className="text-lg font-bold text-neon mb-3 relative z-10">{achievement.title}</h4>
              <p className="text-muted-foreground leading-relaxed relative z-10">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
