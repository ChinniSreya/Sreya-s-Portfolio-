
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", emoji: "🐙" },
    { icon: Linkedin, href: "#", label: "LinkedIn", emoji: "💼" },
    { icon: Mail, href: "mailto:sreyasri25@gmail.com", label: "Email", emoji: "📧" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-3xl">👩‍💻</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Chinni Sreya Sri
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Front-End Developer passionate about creating beautiful and functional web experiences ✨
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
              <span>🏠</span>
              <span>Based in Tirupati, Andhra Pradesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🔗</span>
              <h4 className="text-lg font-semibold">Quick Links</h4>
            </div>
            <nav className="space-y-2">
              {["About", "Education", "Certifications", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-gray-300 hover:text-white transition-colors duration-300 py-1 hover:scale-105"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
              <span className="text-2xl">🌐</span>
              <h4 className="text-lg font-semibold">Connect With Me</h4>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                  title={social.label}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current animate-pulse" size={16} />
              <span>by Chinni Sreya Sri</span>
              <span>✨</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © 2024 All rights reserved. 📝
              </p>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
