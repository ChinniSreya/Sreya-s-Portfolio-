
import { Award, CheckCircle, Star, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Coursera",
      category: "Programming",
      year: "2023",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms"],
      featured: true
    },
    {
      title: "AWS Certified Developer",
      provider: "Infosys SpringBoard",
      category: "Cloud Computing",
      year: "2023",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      skills: ["AWS Services", "Cloud Architecture", "DevOps"],
      featured: true
    },
    {
      title: "Web Development",
      provider: "Internshala Trainings",
      category: "Frontend Development",
      year: "2022",
      color: "from-green-400 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      featured: false
    },
    {
      title: "ServiceNow Micro Certification",
      provider: "ServiceNow",
      category: "Platform Development",
      year: "2023",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      skills: ["Platform Configuration", "Workflow Automation", "ITSM"],
      featured: false
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Award className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Certifications
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that showcase my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${cert.bgColor} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden group`}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Gradient Header */}
              <div className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-6 flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white/90 text-sm font-medium">{cert.category}</div>
                    <div className="text-white/70 text-xs flex items-center gap-1">
                      <Calendar size={12} />
                      {cert.year}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                {/* Title and Provider */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                    {cert.provider}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">
                    Key Skills Acquired
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color} flex-shrink-0`}></div>
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex justify-center">
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${cert.color} text-white font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-105`}>
                    <CheckCircle size={18} />
                    <span>Verified Certification</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-700 font-medium">Active Certifications</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-700 font-medium">Technology Domains</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="text-3xl font-bold text-green-600 mb-2">2023</div>
            <div className="text-gray-700 font-medium">Latest Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
