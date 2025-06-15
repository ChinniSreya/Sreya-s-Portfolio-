
import { useState } from "react";
import { Code, Database, Palette, Zap, Trophy, Star } from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React.js", level: 90, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-500 to-purple-500" },
        { name: "JavaScript", level: 92, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
        { name: "HTML5 & CSS3", level: 95, color: "bg-gradient-to-r from-orange-500 to-red-500" }
      ]
    },
    {
      icon: Palette,
      title: "Design & Styling",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Tailwind CSS", level: 88, color: "bg-gradient-to-r from-teal-400 to-cyan-500" },
        { name: "Responsive Design", level: 90, color: "bg-gradient-to-r from-green-400 to-teal-500" },
        { name: "UI/UX Design", level: 82, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "Figma", level: 78, color: "bg-gradient-to-r from-pink-500 to-rose-500" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 75, color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "Python", level: 80, color: "bg-gradient-to-r from-blue-600 to-yellow-500" },
        { name: "SQL", level: 85, color: "bg-gradient-to-r from-indigo-500 to-blue-600" },
        { name: "MongoDB", level: 70, color: "bg-gradient-to-r from-green-600 to-green-700" }
      ]
    },
    {
      icon: Zap,
      title: "Tools & Technologies",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 90, color: "bg-gradient-to-r from-gray-700 to-gray-900" },
        { name: "VS Code", level: 95, color: "bg-gradient-to-r from-blue-600 to-blue-700" },
        { name: "Vite", level: 85, color: "bg-gradient-to-r from-purple-600 to-blue-600" },
        { name: "AWS", level: 72, color: "bg-gradient-to-r from-orange-500 to-yellow-500" }
      ]
    }
  ];

  const achievements = [
    {
      title: "VR Siddartha College Hackathon",
      position: "3rd Place 🥉",
      description: "Secured third position in a competitive programming hackathon with innovative problem-solving",
      gradient: "from-yellow-400 to-orange-500",
      icon: Trophy
    },
    {
      title: "VIT AP Cyber Security Challenge",
      position: "Top Participant 🛡️",
      description: "Demonstrated expertise in cybersecurity fundamentals and ethical hacking techniques",
      gradient: "from-blue-500 to-purple-600",
      icon: Star
    },
    {
      title: "IIIT Sricity Innovation Contest",
      position: "4th Place 🏆",
      description: "Achieved fourth place in prestigious coding competition with creative technical solutions",
      gradient: "from-purple-500 to-pink-500",
      icon: Trophy
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-cyan-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring creative ideas to life
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <category.icon size={20} />
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {skillCategories[activeTab].title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeTab].skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.gradient}`}></div>
              
              <div className={`bg-gradient-to-r ${achievement.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="text-white" size={24} />
              </div>
              
              <div className={`inline-block bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent text-lg font-bold mb-3`}>
                {achievement.position}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {achievement.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
