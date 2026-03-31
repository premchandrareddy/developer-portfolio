import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: "Netflix Clone (HTML & CSS)",
      issuer: "Letsupgrade",
      date: "Completed",
      skills: ["HTML", "CSS"],
      link: "#"
    },
    {
      title: "Industry 4.0 & Industrial IoT",
      issuer: "NPTEL",
      date: "Completed",
      skills: ["Automation", "IoT"],
      link: "#"
    },
    {
      title: "Java Full Stack-1",
      issuer: "QSpiders, Bengaluru",
      date: "Completed",
      skills: ["Java", "Spring Boot", "React"],
      link: "#"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative border-b-4 border-brand pb-2">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-6 border border-slate-100 flex flex-col h-full relative group transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{cert.issuer} • {cert.date}</p>
              
              <div className="flex-grow">
                <p className="text-sm font-medium text-slate-700 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.link && (
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 text-slate-400 hover:text-brand transition-colors p-2 bg-slate-50 rounded-full hover:bg-brand-light/10"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
