import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: "JokerCard API",
      desc: "A fast, playful API for managing card games.",
      stack: "Node.js, Express, MongoDB",
      link: "https://github.com/thejokers69",
    },
    {
      name: "CodeJoker CLI",
      desc: "Boost productivity with this quirky CLI tool.",
      stack: "Python, Click, Flask",
      link: "https://github.com/thejokers69",
    },
    {
      name: "JokerSphere",
      desc: "A social platform for sharing wild ideas.",
      stack: "React, Firebase, Tailwind",
      link: "https://github.com/thejokers69",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.desc}</p>
            <p className="mt-2 text-sm text-gray-400">{project.stack}</p>
            <a href={project.link} className="text-joker-purple underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;