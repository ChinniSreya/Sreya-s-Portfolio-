import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://zshxjnprtwkkoqmmwiwh.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting me. I'll get back to you soon.",
        });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sreyasri25@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9700357668"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tirupati, Andhra Pradesh"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[hsl(230,50%,10%)] via-[hsl(250,60%,15%)] to-[hsl(270,50%,12%)]"
    >
      {/* Professional Background Design */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Let's <span className="text-neon">Connect</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to bring your next project to life? Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-neon border border-primary/20">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-neon">Get in touch</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Drop me a message and let's create something incredible together!
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass rounded-lg sm:rounded-xl border border-primary/20 hover:shadow-neon transition-all duration-300 card-hover">
                    <div className="bg-gradient-to-r from-primary to-accent p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-neon flex-shrink-0">
                      <method.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{method.title}</h4>
                      <p className="text-primary font-medium text-sm sm:text-base break-all">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 glass rounded-lg sm:rounded-xl border border-primary/20">
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">Quick Response</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">I typically respond within 24 hours!</p>
              </div>
            </div>
          </div>

          <div className={`glass-dark rounded-xl sm:rounded-2xl shadow-neon p-4 sm:p-6 lg:p-8 border border-primary/20 transition-all duration-700 ${
            isVisible ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ animationDelay: '400ms' }}>
            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-neon">Send Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-card/60 border border-primary/20 text-foreground rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/40 text-sm sm:text-base placeholder:text-muted-foreground"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-card/60 border border-primary/20 text-foreground rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/40 text-sm sm:text-base placeholder:text-muted-foreground"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-card/60 border border-primary/20 text-foreground rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none hover:border-primary/40 text-sm sm:text-base placeholder:text-muted-foreground"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 glass rounded-lg sm:rounded-xl border border-primary/20">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span>🔒</span>
                    <span>Your information is safe and secure</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="bg-green-500/20 rounded-full p-3 sm:p-4 border border-green-500/30 shadow-[0_0_20px_rgb(34,197,94,0.3)]">
                    <CheckCircle className="text-green-400" size={32} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                  Thank you for contacting me!
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-neon text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;