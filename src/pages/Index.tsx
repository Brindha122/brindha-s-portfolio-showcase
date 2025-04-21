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
    <div className="min-h-screen bg-black text-white">
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

      {/* About Section with new structure */}
      <Section id="about" className="bg-transparent">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          About Me
        </SectionTitle>
        <div className="max-w-3xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg text-gray-200 mb-7 leading-relaxed font-medium">
            I am Brindha S and I am a computer science and engineering student at Knowledge Institute of Technology in Salem.
            I am proficient in various programming languages like <span className="text-purple-400 font-semibold">C</span>, <span className="text-purple-400 font-semibold">C++</span>, <span className="text-purple-400 font-semibold">Java</span>, <span className="text-purple-400 font-semibold">HTML</span>, <span className="text-purple-400 font-semibold">CSS</span>, <span className="text-purple-400 font-semibold">Javascript</span>, <span className="text-purple-400 font-semibold">ReactJS</span>.
            I love solving complex problems through efficient and scalable code. My experience spans across front-end design, back-end development, real-time communication, and integrating AI-based features into modern applications. I enjoy learning and staying updated with the latest in tech to continuously improve my skills and deliver high-quality products.
          </p>
          <div className="text-left mt-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Educational Journey</h3>
              <p className="text-base text-gray-300 leading-relaxed pl-2">
                I have continuously expanded my knowledge through formal education, hands-on projects, and self-learning.
                Attending workshops and training programs has strengthened my expertise in web development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Technical Journey</h3>
              <p className="text-base text-gray-300 leading-relaxed pl-2">
                My technical expertise has grown through hands-on experience with modern frameworks and libraries.
                Staying up to date with cutting-edge innovations drives my passion for learning and development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Project Journey</h3>
              <p className="text-base text-gray-300 leading-relaxed pl-2">
                I have worked on various projects, blending front-end, back-end, and AI technologies to create impactful solutions.
                One of my key projects is "My Portfolio", where I showcased my skills using React.js, modern UI/UX design, and smooth animations to create a personal brand.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills section with white skill names */}
      <Section id="skills" className="bg-transparent">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Skills
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card 
              key={skill.name}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 bg-black"
            >
              <CardHeader>
                <CardTitle className="text-lg text-white">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
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
      <Section id="projects" className="bg-transparent">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-black">
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
                <p className="text-gray-300">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section with enhanced styling */}
      <Section id="contact" className="bg-transparent">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Contact
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors text-gray-300">
                <Mail className="w-5 h-5" /> brindhasuresh031@gmail.com
              </p>
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors text-gray-300">
                <Phone className="w-5 h-5" /> +98122517784
              </p>
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors text-gray-300">
                <MapPin className="w-5 h-5" /> Valluvar street S.Papparapatty Attayampatty
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <Input 
              placeholder="Your Name" 
              className="transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 bg-gray-900 text-white"
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 bg-gray-900 text-white"
            />
            <Textarea 
              placeholder="Your Message" 
              className="h-32 transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 bg-gray-900 text-white"
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
