
const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Coursera",
      icon: "☕",
      category: "Programming",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "AWS Certified Developer",
      provider: "Infosys SpringBoard",
      icon: "☁️",
      category: "Cloud Computing",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Web Development",
      provider: "Internshala Trainings",
      icon: "🌐",
      category: "Frontend",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "ServiceNow Micro Certifications",
      provider: "ServiceNow",
      icon: "⚙️",
      category: "Platform",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              My <span className="text-blue-600">Certifications</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-bl-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 bg-white rounded-full p-3 shadow-sm">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {cert.provider}
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium">✅ Certified</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-200">
            <span className="text-gray-700 font-medium">Continuously learning and growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
