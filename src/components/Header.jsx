// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' if you're using Next.js

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition">
          MyBlog
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
          <Link to="/about" className="hover:text-cyan-300 transition">About</Link>
          <Link to="/blog" className="hover:text-cyan-300 transition">Blog</Link>
          <Link to="/contact" className="hover:text-cyan-300 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
