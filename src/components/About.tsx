
const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a dedicated Front-End Developer with a passion for creating engaging, 
              user-centric web experiences. I believe that great design and clean code 
              go hand in hand to create something truly special.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started with curiosity and has evolved into 
              a love for crafting digital experiences that not only look beautiful but 
              also solve real problems for users.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "JavaScript", "TypeScript", "CSS", "HTML", "Tailwind"].map((skill) => (
                <span 
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/41653eaf-ad4d-44f5-b7de-774252011e93.png"
                    alt="Chinni Sreya Sri - Front-End Developer"
                    className="w-full h-full object-cover object-center"
                  />
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
