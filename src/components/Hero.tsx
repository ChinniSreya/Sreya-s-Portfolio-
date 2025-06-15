
import { ArrowDown, Download } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Navigation />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-blue-400 font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Chinni Sreya Sri
              </h1>
              <div className="text-2xl sm:text-3xl text-gray-300 font-light">
                <span className="text-blue-400">Frontend Developer</span> & 
                <span className="text-purple-400"> UI/UX Designer</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, responsive web applications with modern technologies and clean code. 
              Passionate about creating exceptional user experiences that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
