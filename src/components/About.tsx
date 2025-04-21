
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const text = "I am a passionate Computer Science student with a strong interest in software development and cybersecurity. Proficient in multiple programming languages and tools, I am constantly exploring new technologies and seeking opportunities to apply my technical skills in real-world projects. My goal is to contribute to innovative solutions while expanding my knowledge in software engineering and cybersecurity domains.";

  return (
    <section 
      id="about" 
      className="py-20 relative parallax"
      style={{
        background: "radial-gradient(circle at center, rgba(34, 34, 64, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 15s ease infinite"
      }}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-white inline-block px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm">
          About Me
        </h2>
        <Card className="max-w-3xl mx-auto transform transition-all hover:scale-[1.01] bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6" ref={aboutRef}>
            <p className="text-white leading-relaxed min-h-[150px] transition-colors duration-300">
              {text.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block transition-colors duration-300 hover:text-[#98FB98]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: 'fadeInWord 0.5s forwards'
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
