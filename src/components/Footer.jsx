import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            Premchandra<span className="text-brand">.</span>
          </a>
          <p className="text-sm mt-1 text-slate-500">Full Stack Developer</p>
        </div>
        
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} K Premchandra Reddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
