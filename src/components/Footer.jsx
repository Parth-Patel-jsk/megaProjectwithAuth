// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-cyan-400 transition">Privacy</a>
          <a href="#" className="hover:text-cyan-400 transition">Terms</a>
          <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
