
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <Card className="max-w-3xl mx-auto transform transition-all hover:scale-[1.01] animate-fade-in">
          <CardContent className="p-6">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Computer Science student at [Your University], with a keen interest in software development
              and artificial intelligence. Currently in my [Year] year, I'm actively seeking internship opportunities
              where I can apply my technical skills and learn from industry experts. My goal is to contribute to
              innovative projects while developing my expertise in full-stack development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
