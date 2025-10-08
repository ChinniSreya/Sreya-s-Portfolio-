
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
    <section id="education" className="py-20 sm:py-28 px-6 relative overflow-hidden bg-gradient-to-br from-[hsl(230,50%,10%)] via-[hsl(250,60%,15%)] to-[hsl(270,50%,12%)]">
      {/* Soft background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Modern vertical timeline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden sm:block"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start animate-fade-in ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))] hidden sm:block"></div>
                
                {/* Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : ''}`}>
                  <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
                    <div className="space-y-3">
                      <div className={`flex items-center gap-3 flex-wrap ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {edu.level}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'Pursuing' 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'bg-muted/50 text-muted-foreground border border-muted'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-primary">
                        {edu.institution}
                      </h4>
                      
                      <p className="text-muted-foreground">
                        {edu.stream}
                      </p>
                      
                      <div className={`flex items-center gap-4 flex-wrap text-sm ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        <span className="text-muted-foreground">📅 {edu.year}</span>
                        <span className="px-4 py-1.5 rounded-xl bg-primary/10 text-primary font-semibold border border-primary/20">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden sm:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
