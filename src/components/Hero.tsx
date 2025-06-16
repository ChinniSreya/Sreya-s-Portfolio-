
import { ArrowDown, MessageCircle } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Chinni Sreya Sri
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">Front-End Developer</span> & <span className="font-semibold text-purple-600">UI/UX Enthusiast</span>
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Crafting beautiful, interactive web experiences with creativity and precision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-blue-600" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
