
import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-navy-700">Portfolio</h1>
          <div className="hidden md:flex space-x-4">
            {["about", "skills", "projects", "education", "certificates", "contact"].map((section) => (
              <Button
                key={section}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
