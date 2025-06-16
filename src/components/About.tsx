

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
              I'm a passionate Frontend Developer
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Front-End Developer with expertise in creating modern, 
              responsive web applications. I love transforming ideas into beautiful, 
              functional digital experiences that users enjoy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development is driven by curiosity and a commitment 
              to continuous learning. I enjoy working with the latest technologies 
              and best practices to deliver high-quality solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Name:</h4>
                <p className="text-gray-700">Chinni Sreya Sri</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Location:</h4>
                <p className="text-gray-700">Tirupati, AP</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Email:</h4>
                <p className="text-gray-700">sreyasri25@gmail.com</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Phone:</h4>
                <p className="text-gray-700">+91 9700357668</p>
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

