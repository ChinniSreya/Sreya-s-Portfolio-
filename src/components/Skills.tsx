
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      emoji: "💻",
      skills: [
        { name: "C", emoji: "⚡" },
        { name: "Java", emoji: "☕" },
        { name: "Python", emoji: "🐍" },
        { name: "SQL", emoji: "🗄️" }
      ]
    },
    {
      title: "Frontend",
      emoji: "🎨",
      skills: [
        { name: "HTML", emoji: "🌐" },
        { name: "CSS", emoji: "🎭" },
        { name: "JavaScript", emoji: "⚡" }
      ]
    },
    {
      title: "Tools & Others",
      emoji: "🛠️",
      skills: [
        { name: "Git/GitHub", emoji: "📝" },
        { name: "Database Management", emoji: "💾" },
        { name: "Problem Solving", emoji: "🧩" }
      ]
    }
  ];

  const achievements = [
    {
      title: "VR Siddartha College of Engineering Hackathon",
      position: "3rd Place",
      description: "Secured 3rd position in the hackathon competition",
      emoji: "🥉",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "VIT AP Cyber Security Hackathon", 
      position: "Participant",
      description: "Participated in cyber security focused hackathon",
      emoji: "🔐",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "IIIT Sricity Hackathon",
      position: "4th Place", 
      description: "Won 4th place in the prestigious hackathon",
      emoji: "🏆",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Skills Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl">🚀</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              My <span className="text-blue-600">Skills</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-bl-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 text-center">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-center">
                      <span className="text-gray-700 font-medium bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 flex items-center gap-2 hover:scale-105">
                        <span>{skill.emoji}</span>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl">🎯</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              My <span className="text-blue-600">Achievements</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and accomplishments in competitive programming 🏅
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 relative overflow-hidden group">
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
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            <span>📄</span>
            Download Resume
            <span>⬇️</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
