
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
    <section id="education" className="py-20 sm:py-28 px-6 section-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-10 w-16 h-16 border border-accent/20 rotate-45 animate-pulse-slow"></div>
      
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
          {/* Animated Timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden md:block animate-glow"></div>
          <div className="absolute left-8 top-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent rounded-full hidden md:block animate-pulse-slow"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative glass-dark rounded-3xl p-8 shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in border-2 border-primary/20 hover:border-primary/40 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                
                {/* Animated Timeline dot with pulse */}
                <div className="absolute left-6 top-10 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background shadow-neon hidden md:block animate-pulse-slow"></div>
                
                <div className="md:ml-12 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-neon">
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
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 shadow-elegant animate-glow">
                        <span className="text-2xl font-bold text-neon">{edu.score}</span>
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
