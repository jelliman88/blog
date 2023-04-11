import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setShowMenu(false);
    }
  };

  return (
    <nav className="font-['Margarine'] flex justify-evenly my-5 text-2xl border-b-2 border-gray-400 p-1">
      <Link href="/">
        <span className="flex">
          <Image src="/logo.png" alt="logo" height="75" width="75" />
          <span className="font-['Margarine'] text-pink-500">JELLI.CLOUD</span>
        </span>
      </Link>
      {showMenu ? (
        <div className="flex flex-col md:flex-row md:items-center">
          <Link
            className="my-2 md:my-0 mx-5 hover:text-pink-500"
            href="/"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            className="my-2 md:my-0 mx-5 hover:text-pink-500"
            href="/blog"
            onClick={handleClick}
          >
            Blog
          </Link>
          <Link
            className="my-2 md:my-0 mx-5 hover:text-pink-500"
            href="/portfolio"
            onClick={handleClick}
          >
            Portfolio
          </Link>
          <DarkModeButton />
        </div>
        
      ) : (
        <button
          className="block md:hidden ml-auto p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* hide the burger menu on larger screens */}
      <div className="hidden md:flex items-center">
        <Link
          className="mx-5 hover:text-pink-500"
          href="/"
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          className="mx-5 hover:text-pink-500"
          href="/blog"
          onClick={handleClick}
        >
          Blog
        </Link>
        <Link
          className="mx-5 hover:text-pink-500"
          href="/portfolio"
          onClick={handleClick}
        >
          Portfolio
        </Link>
        <Link
          className="mx-5 hover:text-pink-500"
          href="/kimbel"
          onClick={handleClick}
        >
          Kimbel
        </Link>
        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Nav;
