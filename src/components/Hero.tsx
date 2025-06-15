
import { ArrowDown, MessageCircle } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Chinni Sreya Sri</span>
              </h1>
            </div>
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Front-End Developer & UI/UX Enthusiast
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              I create beautiful, responsive web applications with modern technologies and clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
