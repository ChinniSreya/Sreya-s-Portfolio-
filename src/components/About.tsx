
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-blue-600">Me</span>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a dedicated Front-End Developer with a passion for creating engaging, 
                  user-centric web experiences. I believe that great design and clean code 
                  go hand in hand to create something truly special.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey in web development started with curiosity and has evolved into 
                  a love for crafting digital experiences that not only look beautiful but 
                  also solve real problems for users.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Core Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Java" },
                  { name: "HTML" },
                  { name: "CSS" },
                  { name: "SQL" },
                  { name: "JavaScript" }
                ].map((skill) => (
                  <span 
                    key={skill.name}
                    className="bg-white border border-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300 shadow-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden relative h-96">
                  <img 
                    src="/lovable-uploads/41653eaf-ad4d-44f5-b7de-774252011e93.png"
                    alt="Chinni Sreya Sri - Front-End Developer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
