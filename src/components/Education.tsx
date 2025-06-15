
const Education = () => {
  const educationData = [
    {
      level: "Undergraduate",
      institution: "Mohan Babu University",
      stream: "Computer Science",
      score: "CGPA: 9.27",
      type: "cgpa",
      emoji: "🎓",
      year: "2021-2025"
    },
    {
      level: "Intermediate",
      institution: "Vikram Junior College",
      stream: "",
      score: "93.2%",
      type: "percentage",
      emoji: "📚",
      year: "2019-2021"
    },
    {
      level: "Primary School",
      institution: "Padmavathi Vidyalaya",
      stream: "",
      score: "80.4%",
      type: "percentage",
      emoji: "🏫",
      year: "2018-2019"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl">📖</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              My <span className="text-blue-600">Education</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and achievements that shaped my foundation in technology 🌱
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{edu.emoji}</span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {edu.level}
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-2 flex items-center gap-2">
                      <span>🏛️</span>
                      {edu.institution}
                    </h4>
                    {edu.stream && (
                      <p className="text-lg text-gray-600 mb-2 flex items-center gap-2">
                        <span>💻</span>
                        Stream: {edu.stream}
                      </p>
                    )}
                    {edu.year && (
                      <p className="text-gray-500 flex items-center gap-2">
                        <span>📅</span>
                        {edu.year}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-center shadow-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span>🏆</span>
                        <span className="text-sm font-medium uppercase tracking-wide">Score</span>
                      </div>
                      <span className="font-bold text-xl">{edu.score}</span>
                    </div>
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
