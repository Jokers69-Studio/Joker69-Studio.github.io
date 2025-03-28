import React from 'react';
import Logo from '../../assets/img/Logo-Of-TheJokerML.jpg';

const Footer = () => {
  return (
    <header className="text-center py-8 bg-joker-purple">
      <img
        src={Logo}
        alt="Jokers69 Studio Logo"
        className="mx-auto mb-4 w-32 h-32 rounded-full"
      />
      <h1 className="text-5xl font-bold">🎭 Jokers69 Studio</h1>
      <p className="text-xl mt-2">Where Creativity Meets Innovation</p>
      <a
        href="#projects"
        className="mt-4 inline-block bg-white text-joker-purple py-2 px-4 rounded-full font-semibold hover:bg-gray-200"
      >
        Explore Our Work
      </a>
    </header>
  );
};

export default Footer;