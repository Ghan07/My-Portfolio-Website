
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient relative">
      <div className="absolute inset-0 bg-white/40" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <Card className="max-w-3xl mx-auto transform transition-all hover:scale-[1.01] animate-fade-in">
          <CardContent className="p-6">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Computer Science student with a strong interest in software development 
              and cybersecurity. Proficient in multiple programming languages and tools, I am constantly 
              exploring new technologies and seeking opportunities to apply my technical skills in 
              real-world projects. My goal is to contribute to innovative solutions while expanding 
              my knowledge in software engineering and cybersecurity domains.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
