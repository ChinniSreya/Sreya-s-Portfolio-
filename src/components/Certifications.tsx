
const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Coursera",
      category: "Programming",
      color: "from-slate-400 to-gray-500",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms"]
    },
    {
      title: "AWS Certified Developer",
      provider: "Infosys SpringBoard",
      category: "Cloud Computing",
      color: "from-blue-400 to-indigo-500",
      skills: ["AWS Services", "Cloud Architecture", "DevOps"]
    },
    {
      title: "Web Development",
      provider: "Internshala Trainings",
      category: "Frontend Development",
      color: "from-indigo-400 to-blue-500",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "ServiceNow Micro Certifications",
      provider: "ServiceNow",
      category: "Platform Development",
      color: "from-slate-400 to-gray-500",
      skills: ["Platform Configuration", "Workflow Automation", "ITSM"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-bl-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {cert.provider}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-medium">Certified</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-slate-50 px-6 py-3 rounded-full border border-blue-200">
            <span className="text-gray-700 font-medium">Continuously expanding my skillset through professional development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
