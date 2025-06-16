
const Education = () => {
  const educationData = [
    {
      level: "Undergraduate",
      institution: "Mohan Babu University",
      stream: "Computer Science",
      score: "CGPA: 9.27",
      type: "cgpa"
    },
    {
      level: "Intermediate",
      institution: "Vikram Junior College",
      stream: "",
      score: "93.2%",
      type: "percentage"
    },
    {
      level: "Primary School",
      institution: "Padmavathi Vidyalaya",
      stream: "",
      score: "80.4%",
      type: "percentage"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and achievements that shaped my foundation in technology
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.level}
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">
                    {edu.institution}
                  </h4>
                  {edu.stream && (
                    <p className="text-lg text-gray-600 mb-2">
                      Stream: {edu.stream}
                    </p>
                  )}
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center">
                    <span className="font-bold text-lg">{edu.score}</span>
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
