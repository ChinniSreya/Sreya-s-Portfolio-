
const Skills = () => {
  const skillCategories = [
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
      title: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub" },
        { name: "Database Management" },
        { name: "Problem Solving" }
      ]
    }
  ];

  const achievements = [
    {
      title: "VR Siddartha College of Engineering Hackathon",
      position: "3rd Place",
      description: "Secured 3rd position in the hackathon competition",
      emoji: "🥉",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "VIT AP Cyber Security Hackathon", 
      position: "Participant",
      description: "Participated in cyber security focused hackathon",
      emoji: "🔐",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "IIIT Sricity Hackathon",
      position: "4th Place", 
      description: "Won 4th place in the prestigious hackathon",
      emoji: "🏆",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-gray-200 rounded-bl-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{category.title}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-center">
                      <span className="inline-block text-gray-700 font-medium bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:scale-105 w-full">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and accomplishments in competitive programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${achievement.color} rounded-bl-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4">{achievement.emoji}</div>
                <div className={`bg-gradient-to-r ${achievement.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg`}>
                  {achievement.position}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
