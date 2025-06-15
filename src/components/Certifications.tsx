
const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Coursera",
      category: "Programming",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms"]
    },
    {
      title: "AWS Certified Developer",
      provider: "Infosys SpringBoard",
      category: "Cloud Computing",
      skills: ["AWS Services", "Cloud Architecture", "DevOps"]
    },
    {
      title: "Web Development",
      provider: "Internshala Trainings",
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "ServiceNow Micro Certifications",
      provider: "ServiceNow",
      category: "Platform Development",
      skills: ["Platform Configuration", "Workflow Automation", "ITSM"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wide bg-blue-100 px-3 py-1 rounded-full">
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
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
