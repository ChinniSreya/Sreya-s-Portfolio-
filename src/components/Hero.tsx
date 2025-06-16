
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <Navigation />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center pt-20">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-lg text-cyan-400 font-medium tracking-wider mb-4 animate-fade-in">
                  Welcome to my digital space
                </p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Sreya Sri
                  </span>
                </h1>
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light space-y-2">
                <div className="overflow-hidden">
                  <span className="inline-block animate-fade-in delay-300">
                    Creative <span className="text-cyan-400 font-semibold">Frontend Developer</span>
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block animate-fade-in delay-500">
                    & <span className="text-purple-400 font-semibold">UI/UX Enthusiast</span>
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-700">
              Transforming innovative ideas into stunning digital experiences with cutting-edge 
              technologies and pixel-perfect design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in delay-1000">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Explore My Work
                  <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:sreyasri25@gmail.com"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-cyan-400 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-cyan-400 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-cyan-400 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-500 text-sm">Scroll to explore</span>
              <ArrowDown size={24} className="text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
