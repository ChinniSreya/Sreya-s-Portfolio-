import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 } as any,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1] as any,
        staggerChildren: 0.2
      }
    } as any
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 } as any,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as any }
    } as any
  };
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
    },
    {
      title: "Paper Presentation Leadership",
      position: "Team Lead",
      description: "Successfully led a team in paper presentation at a conference",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden relative section-gradient"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16 sm:mb-20" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools that power my development workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-dark rounded-3xl p-8 shadow-elegant transition-all duration-300 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/40 relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
              
              <div className="mb-8 text-center relative z-10">
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group relative overflow-hidden rounded-xl bg-card/60 hover:bg-primary/20 px-4 py-3 text-center transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105">
                    <span className="text-foreground font-medium group-hover:text-neon transition-colors">{skill.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Achievements & Recognition
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase my journey and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-dark rounded-3xl p-8 text-center shadow-elegant transition-all duration-300 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/40 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-full"></div>
              
              <div className={`bg-gradient-to-r ${achievement.color} text-white px-5 py-2.5 rounded-lg text-sm font-bold mb-6 inline-block relative z-10`}>
                {achievement.position}
              </div>
              <h4 className="text-lg font-bold text-primary mb-3 relative z-10">{achievement.title}</h4>
              <p className="text-muted-foreground leading-relaxed relative z-10">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
