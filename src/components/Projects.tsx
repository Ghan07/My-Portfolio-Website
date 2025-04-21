import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, Camera } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleCameraHover = () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 300);
  };

  const projects = [
    {
      title: "Photography Website",
      description: "A responsive website showcasing photography skills using modern web technologies.",
      tools: ["HTML", "CSS", "JavaScript", "Node.js"],
      github: "https://github.com/ghanshyamchaudhary/photography-website",
      live: "#",
      icon: <Camera className="h-6 w-6 text-blue-500" onMouseEnter={handleCameraHover} />,
      image: null
    },
    {
      title: "Food Resource Management",
      description: "A web application for managing and tracking food resources, helping reduce food waste.",
      tools: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ghanshyamchaudhary/food-resource-management",
      live: "#",
      icon: null,
      image: null
    },
  ];

  return (
    <section id="projects" className="py-20 relative parallax" style={{
      background: "linear-gradient(135deg, rgba(34, 34, 64, 0.9) 0%, rgba(9, 9, 121, 0.9) 50%, rgba(0, 212, 255, 0.9) 100%)",
      backgroundSize: "200% 200%",
      animation: "gradient-shift 15s ease infinite"
    }}>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-white inline-block px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group transform transition-all duration-300 hover:scale-110">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.icon && project.icon}
                </div>
              </CardHeader>
              <CardContent className="relative">
                {project.image && (
                  <div className="absolute -right-20 top-0 group-hover:right-0 transition-all duration-500 transform group-hover:scale-95">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-24 h-24 object-cover rounded-md shadow-md" 
                    />
                  </div>
                )}
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
