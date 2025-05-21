import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 bg-joker-purple">
      <Image
        src="/assets/img/Logo-Of-TheJokerML.jpg"
        alt="Jokers69 Studio Logo"
        className="mx-auto mb-4 w-32 h-32 rounded-full"
        width={128}
        height={128}
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

export default Header;
