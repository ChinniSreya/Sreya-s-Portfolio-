
const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Coursera",
      icon: "☕"
    },
    {
      title: "AWS Certified Developer",
      provider: "Infosys SpringBoard",
      icon: "☁️"
    },
    {
      title: "Web Development",
      provider: "Internshala Trainings",
      icon: "🌐"
    },
    {
      title: "ServiceNow Micro Certifications",
      provider: "ServiceNow",
      icon: "⚙️"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{cert.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {cert.provider}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">✓ Certified</span>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Verified
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

export default Certifications;
