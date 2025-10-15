
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
    <section id="education" className="py-20 sm:py-28 px-6 relative overflow-hidden section-gradient">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.level}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-foreground mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {edu.stream}
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-end min-w-[120px]">
                  <span className="text-base font-medium text-muted-foreground">
                    {edu.year}
                  </span>
                  <span className="px-4 py-1.5 rounded bg-primary/10 text-primary font-semibold text-base">
                    {edu.score}
                  </span>
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
