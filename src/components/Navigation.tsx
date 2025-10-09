
import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Code2 } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark shadow-neon border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with creative icon */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-lg blur-lg group-hover:bg-primary/50 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent p-2 rounded-lg shadow-neon">
                <Code2 size={20} className="text-primary-foreground" />
              </div>
            </div>
            <span className="font-bold text-xl text-gradient">
              Sreya Sri
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-muted-foreground hover:text-primary font-medium transition-all duration-300 relative group rounded-lg hover:bg-primary/5"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 transition-transform duration-300 group-hover:scale-x-100 shadow-[0_0_10px_hsl(var(--primary)/0.6)]"></span>
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                onClick={(e) => {
                  if (social.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(social.href);
                  }
                }}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group relative"
                aria-label={social.label}
              >
                <social.icon size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20 glass-dark animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary font-medium transition-all duration-300 text-left py-2 px-4 rounded-lg hover:bg-primary/10"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-3 pt-4 px-4 border-t border-primary/10 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={(e) => {
                      if (social.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(social.href);
                      }
                    }}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
