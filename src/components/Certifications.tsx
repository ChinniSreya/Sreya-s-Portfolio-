import { Award, CheckCircle, Calendar, Building } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 } as any,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1] as any,
        staggerChildren: 0.2
      }
    } as any
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 } as any,
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as any }
    } as any
  };
  
  const certifications = [
    {
      title: "ServiceNow Certified CSA",
      provider: "ServiceNow",
      category: "System Administration",
      skills: ["System Administration", "User Management", "Instance Configuration"]
    },
    {
      title: "ServiceNow Certified CAD",
      provider: "ServiceNow",
      category: "Application Development",
      skills: ["Application Development", "Business Rules", "UI Policies"]
    },
    {
      title: "Pearson MePro Expert Level",
      provider: "Pearson",
      category: "Professional Skills",
      skills: ["Communication", "Critical Thinking", "Problem Solving", "Leadership"]
    },
    {
      title: "Salesforce Intern",
      provider: "Smart Bridge",
      category: "Internship",
      skills: ["Salesforce Administration", "CRM Management", "Apex Development", "Lightning Components"]
    }
  ];

  return (
    <motion.section 
      id="certifications" 
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-gradient"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-dark rounded-xl card-hover transition-all duration-300 transform border border-border overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <CheckCircle className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Building size={14} />
                          <span>{cert.provider}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h4 className="font-medium text-foreground mb-3 text-sm">Key Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-card/60 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-400">Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
