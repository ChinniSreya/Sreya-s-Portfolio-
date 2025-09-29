
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-light text-primary-custom mb-6">
            Skills & Expertise
          </h2>
          <div className="w-16 h-px bg-elegant-blue mx-auto mb-6"></div>
          <p className="text-lg text-secondary-custom max-w-2xl mx-auto font-light">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={(el) => (elementRefs.current[index] = el)}
              data-element-index={index}
              className={`bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-700 hover-lift border border-border/50 ${
                visibleElements.includes(index) 
                  ? 'animate-fade-in translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 75}ms`
              }}
            >
              <h3 className="text-xl font-medium text-primary-custom mb-8 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-accent/30 rounded-xl px-4 py-3 text-center border border-border/30">
                    <span className="text-primary-custom font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-light text-primary-custom mb-6">
            Achievements
          </h3>
          <div className="w-16 h-px bg-elegant-blue mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              ref={(el) => (elementRefs.current[skillCategories.length + index] = el)}
              data-element-index={skillCategories.length + index}
              className={`bg-gradient-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-700 hover-lift border border-border/50 ${
                visibleElements.includes(skillCategories.length + index) 
                  ? 'animate-fade-in translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 75}ms`
              }}
            >
              <div className={`bg-gradient-to-r ${achievement.color} text-white px-6 py-2 rounded-full text-sm font-medium mb-6 inline-block`}>
                {achievement.position}
              </div>
              <h4 className="text-lg font-medium text-primary-custom mb-4">{achievement.title}</h4>
              <p className="text-secondary-custom leading-relaxed font-light">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
