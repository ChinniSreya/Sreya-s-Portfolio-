
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              I'm an enthusiastic Frontend Developer
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I'm a passionate and dedicated Frontend Developer with a strong foundation in modern web technologies. 
              I specialize in creating responsive, user-friendly interfaces using React, TypeScript, and cutting-edge CSS frameworks.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              My expertise extends to building AI-powered applications, browser extensions, and innovative web solutions. 
              I'm constantly exploring new technologies and methodologies to deliver exceptional user experiences and scalable applications.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with the latest industry trends. 
              My goal is to bridge the gap between design and functionality, creating digital solutions that are both beautiful and performant.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-blue-100 hover:ring-blue-200 transition-all duration-300 transform hover:scale-105">
                <img 
                  src="/lovable-uploads/b5a29d4e-e8f9-4cc2-9fbd-40f228ca3427.png"
                  alt="Chinni Sreya Sri"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
