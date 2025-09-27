
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
    <section id="education" className="py-16 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Academic Learning Background */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        {/* Subtle Academic Grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-white/20 hover:shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2 animate-fade-in" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.level}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full animate-fade-in ${
                      edu.status === 'Pursuing' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' 
                        : 'bg-slate-500/20 text-slate-300 border border-slate-400/30'
                    }`} style={{ animationDelay: `${index * 200 + 200}ms` }}>
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-teal-400 mb-1 animate-fade-in" style={{ animationDelay: `${index * 200 + 300}ms` }}>
                    {edu.institution}
                  </h4>
                  <p className="text-gray-300 mb-1 animate-fade-in" style={{ animationDelay: `${index * 200 + 400}ms` }}>
                    {edu.stream}
                  </p>
                  <p className="text-sm text-gray-400 animate-fade-in" style={{ animationDelay: `${index * 200 + 500}ms` }}>
                    {edu.year}
                  </p>
                </div>
                <div className="text-right animate-fade-in" style={{ animationDelay: `${index * 200 + 600}ms` }}>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-2 rounded-lg border border-emerald-400/30">
                    <span className="text-emerald-300 font-semibold">{edu.score}</span>
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
