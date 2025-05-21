'use client';

import React from 'react';
import Link from 'next/link'; // Correct import for Next.js Link component

const Header = (props) => {
  console.log(props);
  return (
    <div className="h-24 bg-gradient-to-b from-gray-500 via-purple-400 to-indigo-800 flex items-center justify-between">
      <h2 className="text-3xl text-white px-6">{props.user}</h2> {/* Make header text larger */}
      <div className="flex gap-8 items-center justify-center text-white">
        <Link href="/Installation" className="hover:text-black">
          Installation
        </Link>
        <Link href="/Components" className="hover:text-black">
          Components
        </Link>
        <Link href="/Tools" className="hover:text-black">
          Tools
        </Link>
        <Link href="/Blog" className="hover:text-black">
          Blog
        </Link>
        {/* Placeholder for Vercel link */}
        <Link href="https://imgs.search.brave.com/RoE_g-_BTswJfbp4K4XowoRX81XNk_9MDXd6sPv8AFQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg4LzE2LzA5/LzM2MF9GXzg4MTYw/OTU2X3ZiWHhGTnBZ/aWNQcTJ2MVR2cHo1/bzRMdEFIRVNjTllO/LmpwZw" className="hover:text-white">
          <i className="fa fa-cloud-upload-alt"></i> {/* This is an icon placeholder */}
        </Link>
      </div>
    </div>
  );
};

export default Header;
