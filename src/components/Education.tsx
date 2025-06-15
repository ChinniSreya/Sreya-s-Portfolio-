
const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Technology",
      institution: "Mohan Babu University",
      stream: "Computer Science Engineering",
      score: "CGPA: 9.27",
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
      stream: "General Studies",
      score: "80.4%",
      year: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {edu.level}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 mb-1">
                    {edu.stream}
                  </p>
                  <p className="text-sm text-gray-500">
                    {edu.year}
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
                    <span className="text-blue-700 font-bold text-lg">{edu.score}</span>
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
