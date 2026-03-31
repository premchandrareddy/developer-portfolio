import React from 'react';
import { motion } from 'framer-motion';
import heroIm from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10">

        {/* Left: Text Content */}
        <motion.div
          className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand font-medium tracking-wide mb-2 sm:mb-4">Hello, I'm</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-4 tracking-tight leading-tight">
            K Premchandra Reddy
          </h1>
          <h2 className="text-xl sm:text-2xl text-slate-600 font-medium mb-4 sm:mb-6">
            Full Stack Developer (Java + React + Spring Boot)
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-lg leading-relaxed">
            Building scalable, secure, and high-performance web applications using Java, Spring Boot, and React.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              href="#contact"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md shadow-brand/30 hover:shadow-lg hover:shadow-brand/40 text-center"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1Nhgxk6prs5kEUUYuaiR2-4BKVPRefB1I/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md text-center"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="order-1 md:order-2 flex justify-center sticky top-0 md:relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            {/* Soft background gradient glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#60B1FF] to-[#319AFF] blur-3xl opacity-30 animate-pulse-slow"></div>

            <motion.img
              src={heroIm}
              alt="Premchandra Reddy"
              className="relative z-10 w-full h-full aspect-square object-cover object-top rounded-full border-4 border-white shadow-xl"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
