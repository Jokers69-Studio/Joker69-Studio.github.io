import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 bg-joker-purple mt-12">
      <p>
        📧{' '}
        <a href="mailto:thejokkers69@gmail.com" className="underline">
          thejokkers69@gmail.com
        </a>
      </p>
      <p className="mt-2">
        🌐{' '}
        <a href="https://github.com/thejokers69" className="underline">
          GitHub
        </a>
      </p>
      <p className="mt-2">🎭 Jokers69 Studio – Playful. Innovative. Impactful.</p>
    </footer>
  );
};

export default Footer;