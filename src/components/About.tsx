
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Front-End Developer with expertise in creating modern, 
              responsive web applications. I love transforming ideas into beautiful, 
              functional digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development is driven by curiosity and a commitment 
              to continuous learning. I enjoy working with the latest technologies 
              and best practices to deliver high-quality solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Name:</h4>
                <p className="text-gray-700">Chinni Sreya Sri</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location:</h4>
                <p className="text-gray-700">Tirupati, AP</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email:</h4>
                <p className="text-gray-700">sreyasri25@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone:</h4>
                <p className="text-gray-700">+91 9700357668</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-lg p-1">
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
                  <img 
                    src="/lovable-uploads/41653eaf-ad4d-44f5-b7de-774252011e93.png"
                    alt="Chinni Sreya Sri"
                    className="w-full h-full object-cover"
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
