import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative" style={{
      background: "linear-gradient(45deg, rgba(34, 34, 64, 0.9) 0%, rgba(9, 9, 121, 0.9) 50%, rgba(0, 212, 255, 0.9) 100%)",
      backgroundSize: "200% 200%",
      animation: "gradient-shift 15s ease infinite"
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" className="w-full">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" className="w-full">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" className="w-full">
                <Github className="mr-2 h-5 w-5" />
                GitHub
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
