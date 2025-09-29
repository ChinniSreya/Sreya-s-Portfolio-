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
      className="py-20 px-4 sm:px-6 bg-gradient-section relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-light text-primary-custom mb-6">
            Let's <span className="text-elegant-blue font-medium">Connect</span>
          </h2>
          <div className="w-16 h-px bg-elegant-blue mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-secondary-custom max-w-2xl mx-auto px-4 font-light">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="text-2xl font-medium text-primary-custom mb-6">Get in touch</h3>
              <p className="text-secondary-custom mb-8 font-light">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Drop me a message and let's create something incredible together.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl border border-border/30 hover-lift">
                    <div className="bg-elegant-blue p-3 rounded-xl shadow-soft flex-shrink-0">
                      <method.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-primary-custom mb-1">{method.title}</h4>
                      <p className="text-elegant-blue font-medium break-all">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/50 rounded-xl border border-border/30">
                <h4 className="font-medium text-primary-custom mb-2">Quick Response</h4>
                <p className="text-secondary-custom text-sm font-light">I typically respond within 24 hours!</p>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-card rounded-2xl shadow-soft p-8 border border-border/50 transition-all duration-700 ${
            isVisible ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ animationDelay: '400ms' }}>
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-medium text-primary-custom mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-custom mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-elegant-blue focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-custom mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-elegant-blue focus:border-transparent transition-all duration-300 bg-background"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-custom mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-elegant-blue focus:border-transparent transition-all duration-300 resize-none bg-background"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl font-medium transition-all duration-300 hover-lift shadow-soft flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>

                <div className="mt-6 p-4 bg-accent/30 rounded-xl border border-border/30">
                  <div className="flex items-center justify-center gap-2 text-sm text-secondary-custom">
                    <span>🔒</span>
                    <span>Your information is safe and secure</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 rounded-full p-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-primary-custom mb-4">
                  Thank you for contacting me!
                </h3>
                <p className="text-secondary-custom mb-8 font-light">
                  I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift shadow-soft"
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