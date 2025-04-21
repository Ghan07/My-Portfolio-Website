
import { Card, CardContent } from "./ui/card";
import { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "I am a passionate Computer Science student with a strong interest in software development and cybersecurity. Proficient in multiple programming languages and tools, I am constantly exploring new technologies and seeking opportunities to apply my technical skills in real-world projects. My goal is to contribute to innovative solutions while expanding my knowledge in software engineering and cybersecurity domains.";
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    } else {
      setDisplayText("");
    }
  }, [isVisible]);

  return (
    <section 
      id="about" 
      className="py-20 relative"
      style={{
        background: "radial-gradient(circle, rgba(34, 34, 64, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          About Me
        </h2>
        <Card className="max-w-3xl mx-auto transform transition-all hover:scale-[1.01] animate-fade-in bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6" ref={aboutRef}>
            <p className="text-gray-100 leading-relaxed min-h-[150px]">
              {displayText}
              <span className={`inline-block w-1 h-5 ml-1 bg-white ${displayText.length === fullText.length ? 'opacity-0' : 'animate-pulse'}`}></span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
