import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "JokerCard API",
      desc: "A lightning-fast, playful API for managing card games with real-time multiplayer features and advanced game state management.",
      stack: ["Node.js", "Express", "MongoDB", "Socket.io"],
      link: "https://github.com/thejokers69",
      status: "Live",
      stars: "24",
      forks: "8",
      color: "purple",
    },
    {
      name: "CodeJoker CLI",
      desc: "Supercharge your development workflow with this intuitive CLI tool featuring code generation, project scaffolding, and automation.",
      stack: ["Python", "Click", "Flask", "Docker"],
      link: "https://github.com/thejokers69",
      status: "Beta",
      stars: "156",
      forks: "23",
      color: "pink",
    },
    {
      name: "JokerSphere",
      desc: "A vibrant social platform where creators share wild ideas, collaborate on projects, and build the future together.",
      stack: ["React", "Firebase", "Tailwind", "TypeScript"],
      link: "https://github.com/thejokers69",
      status: "Development",
      stars: "89",
      forks: "15",
      color: "blue",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700";
      case "Beta":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700";
      case "Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-700";
    }
  };

  const getCardColor = (color: string) => {
    switch (color) {
      case "purple":
        return "hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 group-hover:from-purple-50/50 dark:group-hover:from-purple-950/20";
      case "pink":
        return "hover:border-pink-200 dark:hover:border-pink-700 hover:shadow-pink-500/20 dark:hover:shadow-pink-500/30 group-hover:from-pink-50/50 dark:group-hover:from-pink-950/20";
      case "blue":
        return "hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 group-hover:from-blue-50/50 dark:group-hover:from-blue-950/20";
      default:
        return "hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-gray-500/20 dark:hover:shadow-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            📂 Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our latest innovations and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className={cn(
                "group relative overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm",
                getCardColor(project.color)
              )}
            >
              {/* Background gradient overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  getCardColor(project.color)
                )}
              />

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs font-medium border",
                      getStatusColor(project.status)
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>
              </CardContent>

              <CardFooter className="relative z-10 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full group/button border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4 group-hover/button:scale-110 transition-transform" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out our complete portfolio on GitHub
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 hover:scale-105 transition-all duration-300"
          >
            <a
              href="https://github.com/thejokers69"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
