import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
  const achievements = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2023",
    },
    {
      title: "First Place - University Hackathon",
      issuer: "University Tech Club",
      date: "2023",
    },
  ];

  return (
    <section id="certificates" className="py-20 relative" style={{
      background: "linear-gradient(315deg, rgba(34, 34, 64, 0.9) 0%, rgba(9, 9, 121, 0.9) 50%, rgba(0, 212, 255, 0.9) 100%)",
      backgroundSize: "200% 200%",
      animation: "gradient-shift 15s ease infinite"
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white inline-block px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm">
          Certificates & Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.title}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Award className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{achievement.issuer}</p>
                <p className="text-gray-500 text-sm">{achievement.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
