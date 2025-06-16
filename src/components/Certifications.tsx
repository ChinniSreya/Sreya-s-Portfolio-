
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals Certification",
      provider: "Coursera",
      issuer: "Duke University",
      date: "March 2024",
      category: "Programming",
      level: "Intermediate",
      gradient: "from-orange-500 to-red-500",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Exception Handling"],
      description: "Comprehensive certification covering core Java concepts, OOP principles, and advanced programming techniques.",
      credentialId: "JF2024-CS-891",
      verified: true
    },
    {
      title: "AWS Certified Developer Associate",
      provider: "Infosys SpringBoard",
      issuer: "Amazon Web Services",
      date: "January 2024",
      category: "Cloud Computing",
      level: "Associate",
      gradient: "from-yellow-400 to-orange-500",
      skills: ["AWS Services", "Cloud Architecture", "DevOps", "Serverless Computing"],
      description: "Industry-recognized certification demonstrating expertise in developing and maintaining AWS applications.",
      credentialId: "AWS-DA-2024-156",
      verified: true
    },
    {
      title: "Complete Web Development Bootcamp",
      provider: "Internshala Trainings",
      issuer: "Internshala",
      date: "November 2023",
      category: "Full-Stack Development",
      level: "Advanced",
      gradient: "from-blue-500 to-purple-600",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB"],
      description: "Intensive bootcamp covering full-stack web development with hands-on projects and real-world applications.",
      credentialId: "WD2023-INT-445",
      verified: true
    },
    {
      title: "ServiceNow Platform Developer",
      provider: "ServiceNow",
      issuer: "ServiceNow Inc.",
      date: "August 2023",
      category: "Platform Development",
      level: "Professional",
      gradient: "from-green-500 to-teal-500",
      skills: ["Platform Configuration", "Workflow Automation", "ITSM", "Business Rules"],
      description: "Specialized certification in ServiceNow platform development and enterprise service management.",
      credentialId: "SN-PD-2023-722",
      verified: true
    }
  ];

  const stats = [
    { number: "4+", label: "Certifications", icon: Award },
    { number: "100%", label: "Verified", icon: CheckCircle },
    { number: "2024", label: "Latest", icon: Calendar },
    { number: "4", label: "Providers", icon: ExternalLink }
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-100 to-transparent rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-green-100 to-transparent rounded-full blur-3xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my technical expertise and continuous learning
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`bg-gradient-to-r ${cert.gradient} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Award className="text-white" size={20} />
                      </div>
                      {cert.verified && (
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <CheckCircle size={12} />
                          Verified
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="space-y-1 mb-4">
                      <p className="text-blue-600 font-semibold">{cert.provider}</p>
                      <p className="text-gray-600 text-sm">Issued by {cert.issuer}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {cert.date}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">{cert.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent text-xs font-bold uppercase tracking-wide`}>
                    {cert.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors">
                    Verify
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 mb-6">
              I'm constantly upgrading my skills with new certifications and staying updated with the latest industry trends.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              View All Credentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
