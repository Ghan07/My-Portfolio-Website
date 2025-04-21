
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative parallax" style={{
      background: "linear-gradient(45deg, rgba(34, 34, 64, 0.9) 0%, rgba(9, 9, 121, 0.9) 50%, rgba(0, 212, 255, 0.9) 100%)",
      backgroundSize: "200% 200%",
      animation: "gradient-shift 15s ease infinite"
    }}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-white inline-block px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm mx-auto">
          Get In Touch
        </h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full relative overflow-hidden group hover:text-white transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Mail className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Email Me</span>
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full relative overflow-hidden group hover:text-white transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Linkedin className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full relative overflow-hidden group hover:text-white transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Github className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="default" size="lg" className="w-full">
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
