import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful, user-centered digital experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Loving every moment of the development journey"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Sreya</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A dedicated Frontend Developer with a passion for creating exceptional digital experiences. 
                I specialize in modern web technologies and have a keen eye for design details that matter.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science Engineering at Mohan Babu University, 
                I'm constantly learning and evolving with the ever-changing technology landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, participating in hackathons, 
                or mentoring fellow developers in their journey.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-700">2+ Years</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Projects</h4>
                <p className="text-gray-700">15+ Completed</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Technologies</h4>
                <p className="text-gray-700">10+ Mastered</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-gray-900 mb-2">Hackathons</h4>
                <p className="text-gray-700">5+ Participated</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500 w-96 h-96">
              <img 
                src="/lovable-uploads/f929749c-dcad-4503-9d6d-a1ea12358485.png"
                alt="Chinni Sreya Sri"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h4>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
