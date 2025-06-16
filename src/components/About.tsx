

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
              As a passionate front-end developer, I specialize in crafting responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React. I enjoy transforming creative ideas into visually appealing digital experiences with clean, maintainable code.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              My focus is on delivering seamless user interactions, optimizing performance, and ensuring cross-browser compatibility. I continuously explore the latest trends in UI/UX design to bring innovation to every project I work on.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              With a strong eye for design and detail, I strive to bridge the gap between aesthetics and functionality, creating engaging interfaces that enhance user satisfaction and support overall business goals.
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

