import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Menu,
  X,
  Shield,
  Terminal,
  Code,
  Server,
  Network,
  Search,
  GitBranch,
  Play,
  Eye,
  Film,
  Book,
  Tv,
  Target
} from "lucide-react";
import { FaLinux, FaPython, FaGitAlt } from "react-icons/fa";
import TerminalAnimation from "@/components/terminal-animation";
import SkillBar from "@/components/skill-bar";
import ProjectCard from "@/components/project-card";
import TimelineItem from "@/components/timeline-item";
import ContactForm from "@/components/contact-form";
// CCNA logo will be referenced directly from public folder

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const technicalSkills = [
    { name: "Linux Administration", icon: FaLinux, color: "text-cyber-green" },
    { name: "Python Development", icon: FaPython, color: "text-cyber-blue" },
    { name: "Network Security (CCNA)", icon: Network, color: "text-cyber-green" },
    { name: "Penetration Testing", icon: Shield, color: "text-cyber-blue" },
    { name: "Burp Suite", icon: Shield, color: "text-cyber-green" },
    { name: "Wireshark", icon: Network, color: "text-cyber-blue" },
    { name: "Nmap", icon: Search, color: "text-cyber-green" },
    { name: "Git", icon: FaGitAlt, color: "text-cyber-blue" }
  ];

  const currentProjects = [
    {
      title: "AI Home Lab",
      description: "Personal AI server built with Nvidia Jetson Orin Nano Super for machine learning and security research.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["NVIDIA", "AI/ML", "Research"],
      link: "#",
      color: "border-cyber-green"
    },
    {
      title: "Open Source Portfolio",
      description: "Collection of open-source contributions and personal projects showcasing diverse technical skills.",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["GitHub", "Multiple Languages", "Community"],
      link: "https://github.com/meandmyno0dles",
      color: "border-cyber-blue"
    },
    {
      title: "KDE Xeyes Clone",
      description: "Modern implementation of the classic Xeyes widget for KDE Plasma desktop environment.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["C++", "Qt", "KDE"],
      link: "#",
      color: "border-cyber-green"
    },
    {
      title: "DragonBall JezzBall (Python)",
      description: "Recreation of the classic JezzBall game featuring DragonBall Z characters, built with Python and Pygame.",
      image: "/dbJezz2_1754149376739.gif",
      tags: ["Python", "Pygame", "Game Dev"],
      link: "/dragonJezz_1754149588268.zip",
      downloadLink: true,
      color: "border-cyber-blue"
    }
  ];

  const timelineItems = [
    {
      title: "IT/Security Projects",
      period: "2021 - Present",
      location: "Sanford, FL",
      description: [
        "Delivered hands-on support for local clients",
        "Led personal and team-based security challenges",
        "Specialized in home labs and network troubleshooting"
      ],
      color: "cyber-green",
      side: "left"
    },
    {
      title: "Executive Chef",
      period: "2013 - 2025",
      location: "Multi-State Operations",
      description: [
        "Led kitchen teams of 10-30+ people",
        "Coordinated high-volume operations across 4 states",
        "Developed crisis management and leadership skills"
      ],
      color: "cyber-blue",
      side: "right"
    },
    {
      title: "Computer Science",
      period: "2011 - 2013",
      location: "Colorado State University",
      description: [
        "Partial degree in Computer Science",
        "Self-directed continuous learning",
        "6+ hours/day technical study"
      ],
      color: "cyber-green",
      side: "left"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cyber-dark/90 backdrop-blur-sm border-b border-cyber-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-orbitron font-bold text-cyber-green text-xl">
              TYLER.ROSSITTO
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { label: "Home", id: "home" },
                { label: "Skills", id: "skills" },
                { label: "CTF", id: "achievements" },
                { label: "Projects", id: "projects" },
                { label: "Culinary", id: "culinary" },
                { label: "Experience", id: "experience" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link hover:text-cyber-green transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyber-green"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-t border-cyber-green/20 py-4"
            >
              <div className="flex flex-col space-y-4">
                {[
                  { label: "Home", id: "home" },
                  { label: "Skills", id: "skills" },
                  { label: "CTF", id: "achievements" },
                  { label: "Projects", id: "projects" },
                  { label: "Culinary", id: "culinary" },
                  { label: "Experience", id: "experience" },
                  { label: "Contact", id: "contact" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-cyber-green transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="matrix-bg w-full h-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-cyber-slate/30 backdrop-blur border border-cyber-green/30 p-6 mb-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-cyber-muted text-sm font-mono">security@terminal:~$</div>
                </div>
                <TerminalAnimation />
              </CardContent>
            </Card>
            
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-cyber-green mb-4">
              TYLER ROSSITTO
            </h1>
            <p className="text-xl md:text-2xl text-cyber-blue mb-8">
              Security Engineer • CTF Champion • Network Specialist
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="outline"
                className="border-cyber-blue text-cyber-blue px-8 py-3 font-semibold hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-cyber-slate/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyber-green">[</span> TECHNICAL ARSENAL <span className="text-cyber-green">]</span>
          </motion.h2>
          
          {/* Combined Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-orbitron text-cyber-blue mb-8 text-center">Core Competencies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-cyber-slate/50 p-4 rounded-lg text-center hover:bg-cyber-green/10 transition-all duration-300 cursor-pointer"
                  >
                    <IconComponent className={`text-3xl ${skill.color} mb-2 mx-auto`} />
                    <div className="font-mono text-sm">{skill.name}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTF Achievements */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyber-green">[</span> CTF ACHIEVEMENTS <span className="text-cyber-green">]</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "#104", title: "Global Ranking", subtitle: "Hack The Box Team Leader", color: "border-cyber-green" },
              { number: "100+", title: "Machines Owned", subtitle: "HTB Platform", color: "border-cyber-blue" },
              { number: "40+", title: "Challenges", subtitle: "Various CTF Platforms", color: "border-cyber-green" }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`bg-cyber-slate/30 ${achievement.color}/30 border ${achievement.color} p-6 text-center hover:${achievement.color} transition-all duration-300`}>
                  <CardContent className="p-0">
                    <div className={`text-4xl font-orbitron font-bold ${achievement.color === 'border-cyber-green' ? 'text-cyber-green' : 'text-cyber-blue'} mb-2`}>
                      {achievement.number}
                    </div>
                    <div className={`${achievement.color === 'border-cyber-green' ? 'text-cyber-blue' : 'text-cyber-green'} font-semibold mb-2`}>
                      {achievement.title}
                    </div>
                    <div className="text-sm text-cyber-muted">{achievement.subtitle}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Hack The Box Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-cyber-slate/30 border border-cyber-green/30 p-8">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-orbitron text-cyber-green">Hack The Box Profile</h3>
                  <Button variant="link" className="text-cyber-blue hover:text-cyber-green transition-colors duration-300" asChild>
                    <a href="https://app.hackthebox.com/users/2364740" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Profile
                    </a>
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-4">Team Leadership</h4>
                    <p className="text-cyber-muted mb-4">
                      Founded and lead a global HTB team, achieving #104 worldwide ranking through strategic coordination and skill development.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Target className="text-cyber-green mr-2 h-4 w-4" />
                        Team coordination & strategy
                      </li>
                      <li className="flex items-center">
                        <Target className="text-cyber-green mr-2 h-4 w-4" />
                        Mentoring team members
                      </li>
                      <li className="flex items-center">
                        <Target className="text-cyber-green mr-2 h-4 w-4" />
                        Challenge analysis & documentation
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyber-blue mb-4">Technical Expertise</h4>
                    <div className="space-y-3">
                      {[
                        { skill: "Web Application Security", level: "Expert", color: "text-cyber-green" },
                        { skill: "Binary Exploitation", level: "Advanced", color: "text-cyber-blue" },
                        { skill: "Cryptography", level: "Advanced", color: "text-cyber-blue" },
                        { skill: "Reverse Engineering", level: "Expert", color: "text-cyber-green" }
                      ].map((item) => (
                        <div key={item.skill} className="flex justify-between">
                          <span>{item.skill}</span>
                          <span className={item.color}>{item.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CCNA Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Card className="bg-cyber-slate/30 border border-cyber-blue/30 p-8">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-orbitron text-cyber-blue">CCNA Certification</h3>
                  <div className="flex items-center">
                    <img src="/ccna-logo.jpg" alt="CCNA Logo" className="h-12 w-auto mr-4" />
                    <Button variant="link" className="text-cyber-green hover:text-cyber-blue transition-colors duration-300" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Verify
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-cyber-green mb-4">Core Networking Skills</h4>
                    <p className="text-cyber-muted mb-4">
                      Comprehensive foundation in enterprise networking technologies, protocols, and security fundamentals.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Network className="text-cyber-blue mr-2 h-4 w-4" />
                        IP addressing & subnetting (IPv4/IPv6)
                      </li>
                      <li className="flex items-center">
                        <Network className="text-cyber-blue mr-2 h-4 w-4" />
                        VLANs & inter-VLAN routing
                      </li>
                      <li className="flex items-center">
                        <Network className="text-cyber-blue mr-2 h-4 w-4" />
                        Spanning Tree Protocol (STP)
                      </li>
                      <li className="flex items-center">
                        <Network className="text-cyber-blue mr-2 h-4 w-4" />
                        OSPF & EIGRP routing protocols
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyber-green mb-4">Security & Troubleshooting</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Shield className="text-cyber-blue mr-2 h-4 w-4" />
                        <span>Network Access Control (802.1X)</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="text-cyber-blue mr-2 h-4 w-4" />
                        <span>VPN technologies (IPSec, SSL/TLS)</span>
                      </div>
                      <div className="flex items-center">
                        <Search className="text-cyber-blue mr-2 h-4 w-4" />
                        <span>Network monitoring & analysis</span>
                      </div>
                      <div className="flex items-center">
                        <Search className="text-cyber-blue mr-2 h-4 w-4" />
                        <span>Packet capture & protocol analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-cyber-slate/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyber-green">[</span> CURRENT PROJECTS <span className="text-cyber-green">]</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Portfolio Gallery */}
      <section id="culinary" className="py-20 bg-cyber-slate/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyber-green">[</span> CULINARY ARTISTRY <span className="text-cyber-green">]</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-lg mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Before transitioning to cybersecurity, I honed my attention to detail and precision through professional pastry arts. 
            These skills translate directly to security work - both require meticulous planning, creative problem-solving, and flawless execution.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/dessert1.jpg', alt: 'Artisan pastries with powdered sugar' },
              { src: '/dessert2.jpg', alt: 'Torched meringue cake with professional finish' },
              { src: '/dessert3.jpg', alt: 'Chocolate cake with raspberry garnish' },
              { src: '/dessert4.jpg', alt: 'Strawberry crepe with artistic plating' },
              { src: '/dessert5.jpg', alt: 'Golden meringue cake with flame finish' },
              { src: '/dessert6.jpg', alt: 'Crème brûlée with berry and chocolate garnish' },
              { src: '/dessert7.jpg', alt: 'Layered cheesecake with berry coulis' },
              { src: '/dessert8.jpg', alt: 'Cheesecake with artistic sauce design' },
              { src: '/dessert9.jpg', alt: 'Tiramisu with chocolate shavings and berry' },
              { src: '/dessert10.jpg', alt: 'Layered chocolate cake with artistic plating' },
              { src: '/dessert11.jpg', alt: 'Chocolate layer cake with berry garnish' },
              { src: '/dessert12.jpg', alt: 'Chocolate mousse cake with precise plating' }
            ].map((dessert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-lg border border-cyber-blue/30 bg-black/40 backdrop-blur-sm"
              >
                <img 
                  src={dessert.src} 
                  alt={dessert.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-xs text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {dessert.alt}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-cyber-blue font-orbitron">
              "Precision in the kitchen translates to precision in securing networks"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyber-green">[</span> PROFESSIONAL TIMELINE <span className="text-cyber-green">]</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-cyber-green"></div>
            
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cyber-slate/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-orbitron font-bold text-center mb-16"
          >
            <span className="text-cyber-green">[</span> ESTABLISH CONNECTION <span className="text-cyber-green">]</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-orbitron text-cyber-blue mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-cyber-green mr-4 h-6 w-6" />
                  <span>Sanford, Florida</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-cyber-green mr-4 h-6 w-6" />
                  <a href="mailto:t.rossitto@yahoo.com" className="hover:text-cyber-green transition-colors duration-300">
                    t.rossitto@yahoo.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="text-cyber-green mr-4 h-6 w-6" />
                  <span>303-594-0402</span>
                </div>
                <div className="flex items-center">
                  <Github className="text-cyber-green mr-4 h-6 w-6" />
                  <a href="https://github.com/meandmyno0dles" className="hover:text-cyber-green transition-colors duration-300">
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Target className="text-cyber-green mr-4 h-6 w-6" />
                  <a href="https://app.hackthebox.com/users/2364740" className="hover:text-cyber-green transition-colors duration-300">
                    Hack The Box
                  </a>
                </div>
              </div>
              
              {/* Personal Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-cyber-blue mb-4">Beyond the Code</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Target className="text-cyber-green mr-2 h-4 w-4" />
                    Chess (1400 rating)
                  </div>
                  <div className="flex items-center">
                    <Film className="text-cyber-blue mr-2 h-4 w-4" />
                    Film Enthusiast
                  </div>
                  <div className="flex items-center">
                    <Book className="text-cyber-green mr-2 h-4 w-4" />
                    Avid Reader
                  </div>
                  <div className="flex items-center">
                    <Tv className="text-cyber-blue mr-2 h-4 w-4" />
                    Anime Fan
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-dark border-t border-cyber-green/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="font-orbitron text-cyber-green mb-4">TYLER.ROSSITTO</div>
          <p className="text-cyber-muted text-sm">© 2024 Tyler Rossitto. Securing the digital frontier.</p>
        </div>
      </footer>
    </div>
  );
}
