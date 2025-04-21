
import { Card, CardContent } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface Skill {
  name: string;
  logoUrl: string;
  wikiUrl: string;
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { 
          name: "C", 
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", 
          wikiUrl: "https://en.wikipedia.org/wiki/C_(programming_language)" 
        },
        { 
          name: "Python", 
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/Python_(programming_language)" 
        },
        { 
          name: "C++", 
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/C%2B%2B" 
        },
        { 
          name: "Java", 
          logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png", 
          wikiUrl: "https://en.wikipedia.org/wiki/Java_(programming_language)" 
        }
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { 
          name: "Git", 
          logoUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", 
          wikiUrl: "https://en.wikipedia.org/wiki/Git" 
        },
        { 
          name: "Docker", 
          logoUrl: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", 
          wikiUrl: "https://en.wikipedia.org/wiki/Docker_(software)" 
        },
        { 
          name: "Metasploit", 
          logoUrl: "https://www.metasploit.com/includes/images/favicon.png", 
          wikiUrl: "https://en.wikipedia.org/wiki/Metasploit_Project" 
        },
        { 
          name: "Wireshark", 
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/Wireshark" 
        },
        { 
          name: "TensorFlow", 
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/TensorFlow" 
        }
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { 
          name: "Problem Solving", 
          logoUrl: "/placeholder.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/Problem_solving" 
        },
        { 
          name: "Team Collaboration", 
          logoUrl: "/placeholder.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/Collaborative_software" 
        },
        { 
          name: "Quick Learning", 
          logoUrl: "/placeholder.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/Learning" 
        },
        { 
          name: "Cybersecurity Analysis", 
          logoUrl: "/placeholder.svg", 
          wikiUrl: "https://en.wikipedia.org/wiki/Computer_security" 
        }
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20"
      style={{
        background: "linear-gradient(45deg, oklab(74.4% 0.089 0.15), oklab(40.1% 0.022 -0.205), oklab(49.8% -0.108 0.089), oklab(28.8% 0.023 0.037), oklab(0% 0 0))"
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="transform transition-all hover:scale-[1.05] hover:shadow-xl animate-fade-in bg-white/10 backdrop-blur-sm border-white/20 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-purple-600"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: Skill) => (
                    <HoverCard key={skill.name}>
                      <HoverCardTrigger>
                        <a
                          href={skill.wikiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-indigo-900/30 text-indigo-100 rounded-full text-sm transition-colors hover:bg-indigo-800/50 flex items-center gap-2"
                        >
                          {skill.name}
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto p-2 bg-white">
                        <div className="flex flex-col items-center">
                          <img 
                            src={skill.logoUrl} 
                            alt={`${skill.name} logo`} 
                            className="w-16 h-16 object-contain"
                          />
                          <p className="mt-2 text-sm font-medium">{skill.name}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
