import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const skills = [
    { name: "C Programming", level: 85 },
    { name: "Java", level: 80 },
    { name: "C++", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "ReactJS", level: 80 },
  ];

  const projects = [
    {
      title: "Automatic LED On/Off",
      description: "An automatic LED on/off system is a mechanism that controls an LED light based on certain conditions, such as motion detection, ambient light levels, or other environmental factors.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Portfolio",
      description: "My portfolio showcases my expertise in modern web development, featuring projects built with technologies like ReactJS. It highlights my skills in creating interactive user interfaces to solve complex problems and deliver innovative solutions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 relative group">
            <Avatar className="w-full h-full">
              <AvatarImage
                src="/lovable-uploads/1a6a501d-4d46-42dc-913e-fb46ec6ce1a4.png"
                alt="Brindha S"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Hi There! <br />
              I'M BRINDHA S
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 animate-fade-in">
              Frontend Developer
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section with enhanced styling */}
      <Section id="about" className="bg-white">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          About Me
        </SectionTitle>
        <div className="max-w-3xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I am a Computer Science and Engineering student at Knowledge Institute of Technology in Salem.
            I love solving complex problems through efficient and scalable code. My experience spans 
            across front-end design, back-end development, real-time communication, and integrating 
            AI-based features into modern applications. I enjoy learning and staying updated with 
            the latest in tech to continuously improve my skills and deliver high-quality products.
          </p>
        </div>
      </Section>

      {/* Skills section with enhanced cards */}
      <Section id="skills" className="bg-white">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Skills
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card 
              key={skill.name}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader>
                <CardTitle className="text-lg">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects Section with images */}
      <Section id="projects" className="bg-gray-50">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section with enhanced styling */}
      <Section id="contact" className="bg-white">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Contact
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5" /> brindhasuresh031@gmail.com
              </p>
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Phone className="w-5 h-5" /> +98122517784
              </p>
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <MapPin className="w-5 h-5" /> Valluvar street S.Papparapatty Attayampatty
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <Input 
              placeholder="Your Name" 
              className="transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400"
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400"
            />
            <Textarea 
              placeholder="Your Message" 
              className="h-32 transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Send Message
            </Button>
          </form>
        </div>
      </Section>

      {/* Footer with enhanced styling */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 hover:text-purple-400 transition-colors">Designed and developed by Brindha S</p>
          <p className="text-gray-400">© 2025 Brindha S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
