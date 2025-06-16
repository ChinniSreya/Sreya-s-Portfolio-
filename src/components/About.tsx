
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Frontend Developer & Tech Innovator
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated Frontend Developer with expertise in React, TypeScript, and modern web technologies. 
              My passion lies in creating intuitive, responsive user interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in AI-powered applications and browser extensions, I enjoy tackling complex challenges 
              and transforming ideas into innovative digital solutions. I'm constantly learning and adapting to new technologies 
              to stay at the forefront of web development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring that every project I work on 
              is not only functional but also visually appealing and user-friendly. I believe in writing clean, scalable code 
              that stands the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-blue-100 hover:ring-blue-200 transition-all duration-300 transform hover:scale-105">
                <img 
                  src="/lovable-uploads/b5a29d4e-e8f9-4cc2-9fbd-40f228ca3427.png"
                  alt="Chinni Sreya Sri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
