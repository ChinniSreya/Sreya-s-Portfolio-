
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Coursera",
      category: "Programming",
      color: "from-orange-400 to-red-500",
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
      color: "from-green-400 to-teal-500",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "ServiceNow Micro Certifications",
      provider: "ServiceNow",
      category: "Platform Development",
      color: "from-purple-400 to-pink-500",
      skills: ["Platform Configuration", "Workflow Automation", "ITSM"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Certifications
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that showcase my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-8">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {cert.category}
                  </span>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color}`}>
                    <CheckCircle className="text-white" size={20} />
                  </div>
                </div>

                {/* Title and Provider */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">
                    {cert.provider}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                        <span className="text-sm text-gray-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex justify-end">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${cert.color} text-white text-sm font-medium shadow-sm`}>
                    <CheckCircle size={16} />
                    Certified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-md border border-gray-100">
            <Award className="text-blue-600" size={24} />
            <span className="text-gray-700 font-medium text-lg">
              Continuously expanding expertise through professional development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
