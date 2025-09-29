
const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Technology",
      institution: "Mohan Babu University",
      stream: "Computer Science Engineering",
      score: "CGPA: 9.31",
      year: "2022-2026",
      status: "Pursuing"
    },
    {
      level: "Intermediate Education",
      institution: "Vikram Junior College",
      stream: "Mathematics, Physics, Chemistry",
      score: "93.2%",
      year: "2020-2022",
      status: "Completed"
    },
    {
      level: "Secondary Education",
      institution: "Padmavathi Vidyalaya",
      stream: "Central Board of Secondary Education",
      score: "80.4%",
      year: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-section relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-light text-primary-custom mb-6">
            Education
          </h2>
          <div className="w-16 h-px bg-elegant-blue mx-auto mb-6"></div>
          <p className="text-secondary-custom max-w-xl mx-auto font-light">
            My academic foundation and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl shadow-soft p-8 border border-border/50 hover-lift transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-3 animate-fade-in" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                    <h3 className="text-xl font-medium text-primary-custom">
                      {edu.level}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full animate-fade-in ${
                      edu.status === 'Pursuing' 
                        ? 'bg-elegant-blue/10 text-elegant-blue' 
                        : 'bg-accent text-accent-foreground'
                    }`} style={{ animationDelay: `${index * 200 + 200}ms` }}>
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-elegant-blue mb-2 animate-fade-in" style={{ animationDelay: `${index * 200 + 300}ms` }}>
                    {edu.institution}
                  </h4>
                  <p className="text-secondary-custom mb-2 animate-fade-in" style={{ animationDelay: `${index * 200 + 400}ms` }}>
                    {edu.stream}
                  </p>
                  <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: `${index * 200 + 500}ms` }}>
                    {edu.year}
                  </p>
                </div>
                <div className="text-right animate-fade-in" style={{ animationDelay: `${index * 200 + 600}ms` }}>
                  <div className="bg-accent px-4 py-3 rounded-xl border border-border/30">
                    <span className="text-primary-custom font-medium">{edu.score}</span>
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
