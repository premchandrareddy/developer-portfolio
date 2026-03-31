import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 inline-block relative border-b-4 border-brand pb-2">
            Career Objective
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Motivated Full Stack Java Developer with hands-on experience in building scalable web applications using Java, Spring Boot, and React.js. Strong foundation in OOP, Data Structures, and MVC Architecture. Seeking an entry-level role to contribute technical expertise and develop impactful software solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 inline-block relative border-b-4 border-brand pb-2">
            Internship / Training
          </h2>
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">Full Stack Java Developer Trainee <span className="text-brand font-medium">– KodNest</span></h3>
            <ul className="mt-4 list-disc text-base md:text-lg text-slate-600 space-y-2 ml-5 leading-relaxed marker:text-brand">
              <li>Developed REST APIs using Spring Boot and backend logic with Java & JDBC</li>
              <li>Built responsive UI using React.js, HTML, CSS, JavaScript</li>
              <li>Worked with MySQL and Spring Data JPA for database integration</li>
              <li>Gained practical experience in MVC architecture and real-world projects</li>
              <li>Used Git, Postman, Eclipse, VS Code for development and testing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
