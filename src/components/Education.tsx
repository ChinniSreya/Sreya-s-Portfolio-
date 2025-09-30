
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
    <section id="education" className="py-20 sm:py-28 px-6 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span> Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative glass rounded-3xl p-8 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg hidden md:block"></div>
                
                <div className="md:ml-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-foreground">
                          {edu.level}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'Pursuing' 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-primary">
                        {edu.institution}
                      </h4>
                      
                      <p className="text-muted-foreground text-base">
                        {edu.stream}
                      </p>
                      
                      <p className="text-sm text-muted-foreground font-medium">
                        📅 {edu.year}
                      </p>
                    </div>
                    
                    <div className="lg:text-right">
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20">
                        <span className="text-2xl font-bold text-primary">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
