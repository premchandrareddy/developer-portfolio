import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Siddharth Institute of Engineering and Technology, Puttur, AP",
      cgpa: "6.94",
      year: "Nov 2020 - Dec 2024"
    },
    {
      degree: "AP Board of Intermediate (MPC)",
      institution: "Sri Vivekananda Junior College, Chittoor",
      cgpa: "6.69",
      year: "May 2018 - Jul 2020"
    },
    {
      degree: "AP Board of Secondary Education",
      institution: "Vijaya Vani High School, Chittoor",
      cgpa: "9.2",
      year: "May 2017 - Jun 2018"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative border-b-4 border-brand pb-2">
            Education
          </h2>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:space-y-0 space-y-12">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-0 md:flex items-center group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1.5 md:top-1/2 md:-translate-y-1/2 w-[9px] h-[9px] rounded-full ring-4 ring-white bg-brand group-hover:scale-150 transition-transform"></div>

              {/* Desktop view (alternating left/right) layout can be complex, let's keep it simple vertical list for clean UI */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative md:w-[calc(100%-8rem)] md:ml-[4rem]">
                <span className="text-brand font-medium text-sm mb-1 block">{item.year}</span>
                <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
                <p className="text-slate-500 mb-4">{item.institution}</p>
                <div className="inline-block px-4 py-1.5 bg-brand-light/10 rounded-lg text-brand-dark font-semibold text-sm">
                  CGPA: {item.cgpa}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
