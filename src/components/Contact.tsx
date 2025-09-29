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
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden"
    >
      {/* Professional Background Design */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Let's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Connect</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Ready to bring your next project to life? Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100/50">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Get in touch</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Drop me a message and let's create something incredible together!
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg sm:rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0">
                      <method.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{method.title}</h4>
                      <p className="text-blue-600 font-medium text-sm sm:text-base break-all">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Quick Response</h4>
                <p className="text-gray-600 text-xs sm:text-sm">I typically respond within 24 hours!</p>
              </div>
            </div>
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100/50 transition-all duration-700 ${
            isVisible ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ animationDelay: '400ms' }}>
            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-300 text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg sm:rounded-xl border border-blue-100">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
                    <span>🔒</span>
                    <span>Your information is safe and secure</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  Thank you for contacting me!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
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