// 'use client' must be at the top of the file, before any imports
'use client';

import React from 'react';
import Link from 'next/link'; // Correct import for Next.js Link component

const Header = (props) => {
  console.log(props);
  return (
    <div className="h-20 bg-gradient-to-b from-gray-500 via-purple-400 to-indigo-800 flex items-center justify-between">
      <h2 className="px-6">{props.user}</h2>
      <div className="flex gap-8">
        <Link href="/About" className="hover:text-white">
          About
        </Link>
        <Link href="/Career" className="hover:text-white">
          Career
        </Link>
        <Link href="/Home" className="hover:text-white">
          Home
        </Link>
        <Link href="/contact" className="hover:text-white margin">
          Contact
        </Link>
      </div> 
    </div>
  );
};

export default Header;
