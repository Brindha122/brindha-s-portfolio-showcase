
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "C Programming", level: 85 },
    { name: "Java", level: 80 },
    { name: "C++", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "ReactJS", level: 80 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Section className="pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Hi There! <br />
          I'M BRINDHA S
        </h1>
        <p className="text-2xl text-muted-foreground mb-8 animate-fade-in">
          Frontend Developer
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
        >
          Get in Touch
        </Button>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            I am a Computer Science and Engineering student at Knowledge Institute of Technology in Salem.
            I am passionate about developing innovative products. In my free time, I enjoy learning new
            technologies and products.
          </p>
        </div>
      </Section>

      {/* Education & Technical Journey */}
      <Section id="journey" className="bg-gray-50">
        <SectionTitle>My Journey</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Educational Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                I have continuously expanded my knowledge through formal education, hands-on projects,
                and self-learning. Attending workshops and training programs has strengthened my
                expertise in web development.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technical Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                My technical expertise has grown through hands-on experience with modern frameworks and
                libraries. Staying up to date with cutting-edge innovations drives my passion for
                learning and development.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-white">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle className="text-lg">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-gray-50">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Automatic LED On/Off</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                An automatic LED on/off system is a mechanism that controls an LED light based on
                certain conditions, such as motion detection, ambient light levels, or other
                environmental factors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                My portfolio showcases my expertise in modern web development, featuring projects built
                with technologies like ReactJS. It highlights my skills in creating interactive user
                interfaces to solve complex problems and deliver innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <SectionTitle>Contact</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" /> brindhasuresh031@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> +98122517784
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Valluvar street S.Papparapatty Attayampatty
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="h-32" />
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">Designed and developed by Brindha S</p>
          <p className="text-gray-400">© 2025 Brindha S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
