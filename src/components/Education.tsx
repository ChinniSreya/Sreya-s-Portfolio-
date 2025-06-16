
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Technology",
      institution: "Mohan Babu University",
      location: "Tirupati, Andhra Pradesh",
      stream: "Computer Science & Engineering",
      score: "CGPA: 9.27",
      year: "2022 - 2026",
      status: "Pursuing",
      statusColor: "from-blue-500 to-cyan-500",
      description: "Specializing in Software Engineering with focus on Full-Stack Development and AI/ML",
      highlights: [
        "Dean's List for Academic Excellence",
        "Active member of Coding Club",
        "Participated in multiple tech symposiums"
      ]
    },
    {
      level: "Intermediate Education",
      institution: "Vikram Junior College",
      location: "Tirupati, Andhra Pradesh", 
      stream: "Mathematics, Physics, Chemistry (MPC)",
      score: "93.2%",
      year: "2020 - 2022",
      status: "Completed",
      statusColor: "from-green-500 to-emerald-500",
      description: "Focused on Science stream with exceptional performance in Mathematics and Physics",
      highlights: [
        "Top 5% in state board examinations",
        "Mathematics Olympiad participant",
        "Science exhibition winner"
      ]
    },
    {
      level: "Secondary Education",
      institution: "Padmavathi Vidyalaya",
      location: "Tirupati, Andhra Pradesh",
      stream: "General Studies with Computer Science",
      score: "80.4%",
      year: "2020",
      status: "Completed", 
      statusColor: "from-purple-500 to-violet-500",
      description: "Strong foundation in core subjects with early introduction to programming concepts",
      highlights: [
        "Computer Science topper",
        "Cultural activities coordinator",
        "Academic scholarship recipient"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and the foundation that shapes my technical expertise
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.statusColor}`}></div>
              
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Timeline & Status */}
                  <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-4">
                    <div className={`bg-gradient-to-r ${edu.statusColor} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <GraduationCap className="text-white" size={32} />
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <div className={`inline-block bg-gradient-to-r ${edu.statusColor} bg-clip-text text-transparent text-sm font-bold uppercase tracking-wide mb-2`}>
                        {edu.status}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Calendar size={16} />
                        <span className="font-medium">{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {edu.level}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-2">
                        {edu.institution}
                      </h4>
                      <p className="text-gray-700 font-medium mb-3">
                        {edu.stream}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Award size={16} className="text-yellow-500" />
                        Key Highlights
                      </h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-end">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {edu.score}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Academic Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-700 font-medium">Years of Study</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">9.27</div>
            <div className="text-gray-700 font-medium">Current CGPA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Courses Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-gray-700 font-medium">Academic Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
