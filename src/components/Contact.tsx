
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sreyasri25@gmail.com",
      description: "Drop me a line anytime!",
      gradient: "from-red-500 to-pink-500",
      action: "mailto:sreyasri25@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9700357668",
      description: "Let's have a conversation",
      gradient: "from-green-500 to-emerald-500",
      action: "tel:+919700357668"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tirupati, AP, India",
      description: "Open to remote opportunities",
      gradient: "from-blue-500 to-cyan-500",
      action: "#"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Monday - Friday",
      description: "9 AM - 6 PM IST",
      gradient: "from-purple-500 to-violet-500",
      action: "#"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { name: "GitHub", url: "#", color: "hover:text-gray-900" },
    { name: "Twitter", url: "#", color: "hover:text-blue-400" },
    { name: "Instagram", url: "#", color: "hover:text-pink-600" }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="text-blue-600" size={28} />
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className={`bg-gradient-to-r ${method.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                      <p className="text-gray-800 font-medium">{method.value}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`text-gray-600 ${social.color} transition-colors duration-300`}
                    >
                      <Globe size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Send className="text-purple-600" size={28} />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="full-stack">Full Stack Application</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-blue-500/25'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold">Quick Response Guarantee:</span> I typically respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
