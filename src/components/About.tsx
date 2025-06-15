
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              I'm a passionate <span className="text-blue-600">Frontend Developer</span>
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-1">Name:</h4>
                <p className="text-gray-700">Chinni Sreya Sri</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-1">Location:</h4>
                <p className="text-gray-700">Tirupati, AP</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-1">Email:</h4>
                <p className="text-gray-700">sreyasri25@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-1">Phone:</h4>
                <p className="text-gray-700">+91 9700357668</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/lovable-uploads/41653eaf-ad4d-44f5-b7de-774252011e93.png"
                alt="Chinni Sreya Sri"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
