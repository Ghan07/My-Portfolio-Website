
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, rgba(34, 34, 64, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 15s ease infinite"
      }}
    >
      <div className="text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-6xl font-bold text-white">
          Ghanshyam Chaudhary
        </h1>
        <h2 className="text-2xl text-gray-200 font-light">
          Cybersecurity Enthusiast
        </h2>
        <div className="flex justify-center space-x-6">
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform hover:scale-110 bg-white/20 border-white/40 text-white"
          >
            <a href="mailto:ghanshyamchaudhary@example.com" className="hover:text-blue-300">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform hover:scale-110 bg-white/20 border-white/40 text-white"
          >
            <a href="https://linkedin.com/in/ghanshyam-chaudhary" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform hover:scale-110 bg-white/20 border-white/40 text-white"
          >
            <a href="https://github.com/ghanshyamchaudhary" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
