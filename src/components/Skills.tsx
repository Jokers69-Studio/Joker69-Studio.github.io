import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "Software Development",
    "Creative Design",
    "Collaboration",
  ];

  return (
    <section id="skills" className="text-center">
      <h2 className="text-3xl font-bold mb-6">What We Bring</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-joker-purple py-2 px-4 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;