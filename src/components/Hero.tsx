import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 pointer-events-none" />
      <div className="text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Your Name
        </h1>
        <h2 className="text-2xl text-gray-600 font-light">
          Aspiring Software Engineer
        </h2>
        <div className="flex justify-center space-x-6">
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform hover:scale-110"
          >
            <a href="mailto:your.email@example.com" className="hover:text-blue-600">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform hover:scale-110"
          >
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform hover:scale-110"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
