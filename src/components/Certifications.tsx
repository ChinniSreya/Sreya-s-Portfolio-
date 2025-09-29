
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-light text-primary-custom mb-6">
            Professional <span className="text-elegant-blue font-medium">Certifications</span>
          </h2>
          <div className="w-16 h-px bg-elegant-blue mx-auto mb-6"></div>
          <p className="text-lg text-secondary-custom max-w-3xl mx-auto font-light">
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
              className={`bg-gradient-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-700 hover-lift border border-border/50 overflow-hidden group ${
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
              <div className="p-8 border-b border-border/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-soft`}>
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-primary-custom group-hover:text-elegant-blue transition-colors">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-secondary-custom mt-1">
                          <div className="flex items-center gap-1">
                            <Building size={14} />
                            <span>{cert.provider}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border/30">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h4 className="font-medium text-primary-custom mb-4">Key Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                      <span className="text-sm text-secondary-custom font-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-8 py-6 bg-accent/30 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-custom">Status</span>
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
          <div className="inline-flex items-center gap-3 bg-accent/50 px-6 py-4 rounded-xl border border-border/30">
            <Award className="text-elegant-blue" size={20} />
            <span className="text-primary-custom font-medium">
              Continuously expanding expertise through professional development and industry certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
