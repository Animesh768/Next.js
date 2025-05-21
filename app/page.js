'use client';

import React from 'react';
import Link from 'next/link';

const Header = ({ user, edit }) => {
  return (
    <main className="min-h-screen w-full flex flex-col bg-black text-white">
      
      {/* Header Bar */}
      <header className="w-full py-4 bg-gradient-to-r from-gray-950 via-purple-900 to-black flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://imgs.search.brave.com/inX0rF-6qv7TdYmlk8ncWACD0B-RF5P3tC0EH2bxoE8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM0LzZh/LzNmLzM0NmEzZjhm/YTZlMjc0YjY4ZDE1/ZjVlZjJhYTg1ZTZm/LmpwZw"
                alt="Next.js Logo"
                className="h-10 w-auto max-w-full"
              />
              <span className="text-white text-lg font-semibold">Next.JS</span>
            </div>
          </Link>
        </div>

        {/* Center: Username */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-4 md:mb-0">
          {user}
        </h2>

        {/* Right: Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-sm sm:text-base">
          <Link href="/Installation" className="hover:text-gray-400 text-lg sm:text-xl">Installation</Link>
          <Link href="/Components" className="hover:text-gray-400 text-lg sm:text-xl">Components</Link>
          <Link href="/Tools" className="hover:text-gray-400 text-lg sm:text-xl">Tools</Link>
          <Link href="/Blog" className="hover:text-gray-400 text-lg sm:text-xl">Blog</Link>
        </nav>
      </header>

      {/* Gradient Heading */}
      <section className="w-full py-10 px-4 flex justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
          Welcome to Next.JS
        </h1>
      </section>

      {/* Responsive Image  */}
      <section className="w-full px-4 pb-10">
        <div className="w-full flex justify-center">
          <img
            src="https://imgs.search.brave.com/47FdL1Yby66oayqzduMSinTMbikO4EnI_5l1nlcnFas/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzkyLzY1LzIz/LzM2MF9GXzk5MjY1/MjMyMV9XTTFvcThr/cWpQSlVUcWpxMXRo/MDZoSUxHeU82VmRZ/ZC5qcGc"
            alt="Reload th page to view the Image "
            className="w-full max-w-screen-xl h-auto object-contain"
          />
        </div>
      </section>

      {/* 🌒 Dark Gradient Footer */}
      <footer className="w-full bg-gradient-to-t from-gray-900 via-gray-950 to-black text-gray-400 text-center py-4 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Next.JS Guide. All rights reserved🌒.
        </p>
      </footer>
    </main>
  );
};

export default Header;
