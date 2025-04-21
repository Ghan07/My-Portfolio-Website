import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 relative" style={{
      background: "linear-gradient(225deg, rgba(34, 34, 64, 0.9) 0%, rgba(9, 9, 121, 0.9) 50%, rgba(0, 212, 255, 0.9) 100%)",
      backgroundSize: "200% 200%",
      animation: "gradient-shift 15s ease infinite"
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>B.tech in Computer Science and Engineering</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">LOVELY PROFESSIONAL UNIVERSITY</p>
                <p className="text-gray-500">2022 - 2026</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "DBMS", "Web Development", "Cyber Security"]
                    .map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
