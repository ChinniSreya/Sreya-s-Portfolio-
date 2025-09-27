
const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Technology",
      institution: "Mohan Babu University",
      stream: "Computer Science Engineering",
      score: "CGPA: 9.31",
      year: "2022-2026",
      status: "Pursuing"
    },
    {
      level: "Intermediate Education",
      institution: "Vikram Junior College",
      stream: "Mathematics, Physics, Chemistry",
      score: "93.2%",
      year: "2020-2022",
      status: "Completed"
    },
    {
      level: "Secondary Education",
      institution: "Padmavathi Vidyalaya",
      stream: "Central Board of Secondary Education",
      score: "80.4%",
      year: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* Professional Background Design */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-16 w-44 h-44 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-52 h-52 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-36 h-36 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2 animate-fade-in" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.level}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full animate-fade-in ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-slate-100 text-slate-700'
                    }`} style={{ animationDelay: `${index * 200 + 200}ms` }}>
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-blue-600 mb-1 animate-fade-in" style={{ animationDelay: `${index * 200 + 300}ms` }}>
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 mb-1 animate-fade-in" style={{ animationDelay: `${index * 200 + 400}ms` }}>
                    {edu.stream}
                  </p>
                  <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: `${index * 200 + 500}ms` }}>
                    {edu.year}
                  </p>
                </div>
                <div className="text-right animate-fade-in" style={{ animationDelay: `${index * 200 + 600}ms` }}>
                  <div className="bg-blue-50 px-4 py-2 rounded-lg">
                    <span className="text-blue-700 font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
