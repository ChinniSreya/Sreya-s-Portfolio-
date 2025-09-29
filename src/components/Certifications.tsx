
import { Award, CheckCircle, Calendar, Building } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Certifications = () => {
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-cert-index') || '0');
            setVisibleCerts(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    certRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const certifications = [
    {
      title: "ServiceNow Certified CSA",
      provider: "ServiceNow",
      category: "System Administration",
      color: "from-purple-400 to-pink-500",
      skills: ["System Administration", "User Management", "Instance Configuration"]
    },
    {
      title: "ServiceNow Certified CAD",
      provider: "ServiceNow",
      category: "Application Development",
      color: "from-indigo-400 to-purple-500",
      skills: ["Application Development", "Business Rules", "UI Policies"]
    },
    {
      title: "Pearson MePro Expert Level",
      provider: "Pearson",
      category: "Professional Skills",
      color: "from-emerald-400 to-cyan-500",
      skills: ["Communication", "Critical Thinking", "Problem Solving", "Leadership"]
    },
    {
      title: "Salesforce Intern",
      provider: "Smart Bridge",
      category: "Internship",
      color: "from-blue-400 to-teal-500",
      skills: ["Salesforce Administration", "CRM Management", "Apex Development", "Lightning Components"]
    }
  ];

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Professional Background Design */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-56 h-56 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Award className="text-white" size={28} />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous professional development
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certRefs.current[index] = el)}
              data-cert-index={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-700 transform hover:-translate-y-2 border border-gray-200/50 overflow-hidden group ${
                visibleCerts.includes(index) 
                  ? 'animate-fade-in translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center gap-1">
                            <Building size={14} />
                            <span>{cert.provider}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-3">Key Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-700">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-lg border border-blue-100">
            <Award className="text-blue-600" size={20} />
            <span className="text-blue-800 font-medium">
              Continuously expanding expertise through professional development and industry certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
