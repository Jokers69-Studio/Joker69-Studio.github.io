import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "purple",
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
      color: "blue",
    },
    {
      category: "Tools & Services",
      icon: "🛠️",
      skills: ["Docker", "AWS", "Git", "Firebase", "Vercel"],
      color: "green",
    },
    {
      category: "Creative",
      icon: "✨",
      skills: ["UI/UX Design", "Figma", "Creative Coding", "Animation"],
      color: "pink",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return {
          card: "border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/30",
          badge:
            "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50 border-purple-200 dark:border-purple-700",
        };
      case "blue":
        return {
          card: "border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/30",
          badge:
            "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-700",
        };
      case "green":
        return {
          card: "border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/30",
          badge:
            "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 border-green-200 dark:border-green-700",
        };
      case "pink":
        return {
          card: "border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50/50 to-pink-100/30 dark:from-pink-950/20 dark:to-pink-900/30",
          badge:
            "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50 border-pink-200 dark:border-pink-700",
        };
      default:
        return {
          card: "border-gray-200 dark:border-gray-800",
          badge:
            "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:hover:bg-gray-900/50",
        };
    }
  };

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            💪 Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skills across the modern development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <Card
                key={category.category}
                className={cn(
                  "group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2",
                  colors.card
                )}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-4">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={cn(
                          "text-xs px-3 py-1 transition-all duration-300 hover:scale-105 border",
                          colors.badge
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional skills section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
            Always Learning, Always Growing
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Machine Learning",
              "WebGL",
              "Three.js",
              "GraphQL",
              "Rust",
              "Go",
              "Kubernetes",
              "Blockchain",
              "AR/VR",
              "IoT",
              "Progressive Web Apps",
              "Microservices",
              "DevOps",
              "Cybersecurity",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-4 py-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 dark:from-gray-800 dark:to-gray-700 dark:text-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 border border-gray-300 dark:border-gray-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
