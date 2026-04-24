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
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed font-light space-y-4">
            <p>
              Most developers say they build scalable systems. I've actually had to — APIs I built at KodNest were handling over 6,000 requests every single day, and when they started slowing down, I didn't just throw more resources at the problem. I found where the queries were breaking down, fixed them, and got response times 30% faster.
            </p>
            <p>
              I work across the full stack — Java and Spring Boot on the backend, React.js on the frontend, MySQL underneath it all. I care about writing code that's clean enough for someone else to read, fast enough to hold up in production, and structured well enough that it doesn't need to be rewritten six months later.
            </p>
            <p>
              Right now I'm looking for a Full Stack Java Developer or Associate SDE role — full time, immediately available, and open to Bengaluru, Hyderabad, Chennai, or remote.
            </p>
          </div>
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
              <li>Built Spring Boot microservices handling 6,000+ daily API requests — when response times started slipping, tracked it down to query-level issues and fixed them, cutting load times by 30%.</li>
              <li>Set up an AWS S3-based file system from scratch that handled 2,000+ daily uploads without dropping a single one during the internship.</li>
              <li>Wired 5+ REST APIs into React.js dashboards so managers could see live data instead of waiting for end-of-day reports.</li>
              <li>Built JWT-based login and role access using Spring Security — 3 user roles, zero security incidents the entire time I was there.</li>
              <li>Refactored a messy codebase into clean MVC structure using OOP principles, which cut code duplication by around 40% and made the whole thing a lot easier to work with.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
