import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaDatabase, FaGitAlt, FaObjectGroup, FaSitemap,
  FaAws, FaDocker
} from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiApachemaven, SiApachekafka } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'REST APIs', icon: <TbApi /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'Microservices', icon: <FaSitemap /> },
    { name: 'Hibernate', icon: <SiHibernate /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Maven', icon: <SiApachemaven /> },
    { name: 'Kafka', icon: <SiApachekafka /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'OOP', icon: <FaObjectGroup /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative border-b-4 border-brand pb-2">
            Skills
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-md group"
            >
              <div className="text-slate-600 group-hover:text-brand transition-colors flex items-center justify-center text-[24px]">
                {skill.icon}
              </div>
              <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
