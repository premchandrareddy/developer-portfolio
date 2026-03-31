import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Sales Savvy",
      type: "Full Stack E-Commerce Platform",
      description: "Developed a full-stack e-commerce web application for managing products, users, and orders. Features include secure authentication via Spring Security & JWT, payment integrations (Razorpay/Stripe/PayPal), and Docker deployment.",
      techStack: ["React.js", "Spring Boot", "MySQL", "Docker", "REST APIs"],
      github: "#",
      live: "#"
    },
    {
      title: "Learn Sphere",
      type: "E-Learning Platform",
      description: "An advanced e-learning platform using a modular, service-oriented architecture. Implemented user role management, course administration, and structured lesson delivery functionalities.",
      techStack: ["React", "Java", "Spring Boot", "MySQL"],
      github: "#",
      live: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative border-b-4 border-brand pb-2">
            Projects
          </h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-brand">{project.type}</p>
                </div>
                <div className="flex gap-3 text-slate-500">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 rounded-full hover:bg-brand hover:text-white transition-colors hover:shadow-md hover:-translate-y-1 transform duration-200 text-lg"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 rounded-full hover:bg-brand hover:text-white transition-colors hover:shadow-md hover:-translate-y-1 transform duration-200 text-lg"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-brand-light/10 text-brand-dark text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
