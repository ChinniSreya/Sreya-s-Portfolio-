
import { ArrowDown, Download } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Chinni Sreya Sri
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                Enthusiastic Front-End Developer
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A passionate Front-End Developer who loves crafting beautiful, responsive, and user-friendly web interfaces. 
              Dedicated to creating exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
