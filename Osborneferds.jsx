import React, { useState, useRef, useEffect } from 'react';
import { 
  Code, Cpu, Brain, Globe, Phone, Rocket, Star, CheckCircle, ArrowRight, MessageCircle, ExternalLink,
  FileCode, Database, Server, Terminal, Smartphone, Cloud, Shield, Zap, GitBranch, Layers, Wifi, Settings, Bot, Send, X
} from 'lucide-react';

const App = () => {
  const expertiseData = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Hardware Troubleshooting",
      years: "8+",
      description: "Expert diagnosis and resolution of hardware issues, system optimization, component replacement, and performance tuning for computers, servers, and embedded systems."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Networking",
      years: "7+",
      description: "Design, implementation, and management of network infrastructure including LAN/WAN setup, wireless networks, network security, and connectivity solutions."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      years: "10+",
      description: "Full-stack development with proficiency in modern frameworks, cloud architecture, and scalable application design across multiple programming languages and platforms."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      years: "6+",
      description: "Machine learning model development, natural language processing, computer vision, and AI-powered solutions for business automation and intelligent decision-making."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      years: "12+",
      description: "End-to-end web solutions including responsive design, progressive web apps, e-commerce platforms, and high-performance web applications with modern frameworks."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Voice Call AI Agent",
      years: "4+",
      description: "Development of intelligent voice agents capable of natural conversation, call handling, customer service automation, and real-time speech processing."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Automated Call Systems",
      years: "5+",
      description: "Complete automation solutions for outbound calling, follow-up sequences, appointment reminders, and intelligent call routing with analytics and reporting."
    }
  ];

  const skills = [
    { name: "Python", icon: <Terminal className="w-5 h-5" /> },
    { name: "JavaScript", icon: <FileCode className="w-5 h-5" /> },
    { name: "HTML", icon: <Code className="w-5 h-5" /> },
    { name: "CSS", icon: <Layers className="w-5 h-5" /> },
    { name: "React", icon: <Globe className="w-5 h-5" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5" /> },
    { name: "Django", icon: <Shield className="w-5 h-5" /> },
    { name: "Flask", icon: <Zap className="w-5 h-5" /> },
    { name: "FastAPI", icon: <Zap className="w-5 h-5" /> },
    { name: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
    { name: "PyTorch", icon: <Brain className="w-5 h-5" /> },
    { name: "Personal Server", icon: <Server className="w-5 h-5" /> },
    { name: "Embedded C", icon: <Cpu className="w-5 h-5" /> },
    { name: "Raspberry Pi", icon: <Cpu className="w-5 h-5" /> },
    { name: "Arduino", icon: <Cpu className="w-5 h-5" /> },
    { name: "Docker", icon: <Layers className="w-5 h-5" /> },
    { name: "Kubernetes", icon: <Cloud className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
    { name: "MySQL", icon: <Database className="w-5 h-5" /> },
    { name: "REST APIs", icon: <GitBranch className="w-5 h-5" /> },
    { name: "GraphQL", icon: <GitBranch className="w-5 h-5" /> },
    { name: "WebRTC", icon: <Phone className="w-5 h-5" /> },
    { name: "Network Security", icon: <Shield className="w-5 h-5" /> },
    { name: "LAN/WAN", icon: <Wifi className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "AI Voice Assistant Platform",
      description: "Intelligent voice agent system with natural language processing and automated follow-ups",
      tech: ["Python", "TensorFlow", "WebRTC", "Node.js"]
    },
    {
      title: "IoT Smart Home System",
      description: "Custom hardware and software solution for home automation with mobile app control",
      tech: ["Raspberry Pi", "Arduino", "React", "Personal Server"]
    },
    {
      title: "E-commerce Web Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MySQL", "Docker"]
    },
    {
      title: "Automated Call Center",
      description: "AI-powered call automation system with analytics and reporting dashboard",
      tech: ["Python", "PyTorch", "WebRTC", "PostgreSQL"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // AI Chatbot Component
  const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const getAIResponse = (userMessage) => {
      const message = userMessage.toLowerCase();
      
      // Greeting responses
      if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! 👋 I'm osborneferds' AI assistant. How can I help you today? You can ask me about his services, projects, skills, or how to get in touch!";
      }
      
      // About services
      if (message.includes('service') || message.includes('offer') || message.includes('do you do')) {
        return "osborneferds offers a wide range of services including:\n\n• Hardware Troubleshooting & Networking\n• Full-stack Software Development\n• AI & Machine Learning Solutions\n• Web Development\n• Voice Call AI Agents\n• Automated Call Systems\n\nWhich area interests you most?";
      }
      
      // About AI expertise
      if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
        return "osborneferds has 6+ years of AI expertise including:\n\n• Natural Language Processing (NLP)\n• Computer Vision\n• Voice Call AI Agents\n• Automated Follow-up Systems\n• TensorFlow & PyTorch\n• Real-time Speech Processing\n\nHe specializes in creating practical AI solutions for business automation!";
      }
      
      // About voice/automation
      if (message.includes('voice') || message.includes('call') || message.includes('automation')) {
        return "osborneferds specializes in Voice Call AI Agents and Automated Call Systems! His solutions include:\n\n• Intelligent voice agents for customer service\n• Automated follow-up sequences\n• Appointment reminders\n• Call analytics & reporting\n• Real-time speech processing\n\nThese systems help businesses automate their communication workflows efficiently.";
      }
      
      // About contact
      if (message.includes('contact') || message.includes('reach') || message.includes('talk')) {
        return "You can contact osborneferds through:\n\n📞 Call: +63 997 584 9230\n💬 WhatsApp: +971 50 528 0169\n📧 Email: osbornefernds@gmail.com\n📍 Location: Angat, Bulacan\n\nWould you like me to help you with anything specific?";
      }
      
      // About projects
      if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
        return "osborneferds has worked on amazing projects including:\n\n• AI Voice Assistant Platform\n• IoT Smart Home System\n• E-commerce Web Platform\n• Automated Call Center\n\nYou can view more details in the Projects section above!";
      }
      
      // About skills
      if (message.includes('skill') || message.includes('technology') || message.includes('framework')) {
        return "osborneferds is proficient in many technologies including Python, JavaScript, React, Django, Flask, FastAPI, TensorFlow, PyTorch, and more! He also has expertise in hardware (Raspberry Pi, Arduino) and networking.\n\nCheck out the Skills section for the complete list!";
      }
      
      // Default response
      return "I'm osborneferds' AI assistant! 🤖\n\nI can help you with information about his:\n• Services & Expertise\n• AI & Voice Automation Solutions\n• Technical Skills\n• Projects\n• Contact Information\n\nJust ask me anything specific, or type 'help' to see what I can assist with!";
    };

    const handleSendMessage = () => {
      if (inputValue.trim() === '') return;
      
      const userMessage = inputValue.trim();
      setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
      setInputValue('');
      
      // Simulate AI thinking delay
      setTimeout(() => {
        const aiResponse = getAIResponse(userMessage);
        setMessages(prev => [...prev, { type: 'ai', text: aiResponse }]);
      }, 500);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    return (
      <>
        {/* Chatbot Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <Bot className="w-6 h-6" />
        </button>

        {/* Chatbot Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4 md:p-6">
            <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md h-[500px] flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Assistant</h3>
                    <p className="text-gray-400 text-sm">osborneferds' Portfolio Bot</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-400 mt-8">
                    <Bot className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <p>Hello! I'm osborneferds' AI assistant. Ask me about his services, projects, or how to get in touch!</p>
                  </div>
                )}
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about osborneferds' services..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-purple-500"
                    rows="1"
                    style={{ minHeight: '40px', maxHeight: '100px' }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputValue.trim() === ''}
                    className="bg-purple-600 text-white p-2 rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  This is a demo AI assistant showcasing osborneferds' capabilities
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              osborneferds<span className="text-purple-400"> portfolio</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('expertise')} className="text-gray-300 hover:text-white transition-colors">Expertise</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Senior Full-Stack Developer & AI Specialist
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building the Future with
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligent Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert in hardware troubleshooting, networking, software engineering, AI solutions, and voice automation systems. 
              Delivering cutting-edge technology solutions that drive innovation and business growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ExternalLink className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over a decade of experience delivering innovative solutions across multiple technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseData.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {item.years} Years
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across the full technology stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="text-purple-400 mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my latest work showcasing expertise in AI, hardware, and full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice AI Specialization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 border border-purple-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6">
                  <Phone className="w-5 h-5" />
                  <span>AI Voice Solutions</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Advanced Voice Call AI Agent & Automation
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Specialized expertise in developing intelligent voice agents that can handle complex conversations, 
                  automate customer service workflows, and provide seamless automated follow-up systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-white">Natural Language Understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-white">Real-time Speech Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-white">Automated Follow-up Sequences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-white">Call Analytics & Reporting</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">AI Agent Active</span>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <p className="text-gray-300 text-sm">
                        "Hello! This is your AI assistant. I'm calling to confirm your appointment tomorrow at 2 PM. 
                        Would you like to reschedule or confirm this booking?"
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss how I can help you achieve your technology goals.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Me</h3>
                <p className="text-gray-400">+63 997 584 9230</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-400">+971 50 528 0169</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400">osbornefernds@gmail.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Angat, Bulacan</p>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 osborneferds portfolio. Built with passion and cutting-edge technology.
          </p>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default App;