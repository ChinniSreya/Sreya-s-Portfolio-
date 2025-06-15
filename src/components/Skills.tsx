
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "Database Management", level: 70 }
      ]
    }
  ];

  const achievements = [
    {
      title: "VR Siddartha College Hackathon",
      position: "3rd Place",
      description: "Secured 3rd position in competitive programming hackathon",
      color: "bg-yellow-500"
    },
    {
      title: "VIT AP Cyber Security Hackathon", 
      position: "Participant",
      description: "Participated in cyber security focused competition",
      color: "bg-blue-500"
    },
    {
      title: "IIIT Sricity Hackathon",
      position: "4th Place", 
      description: "Achieved 4th place in prestigious coding competition",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Achievements</span>
          </h3>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <div className={`${achievement.color} text-white px-6 py-3 rounded-full text-sm font-bold mb-6 inline-block`}>
                {achievement.position}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">{achievement.title}</h4>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
