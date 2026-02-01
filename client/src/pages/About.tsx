import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Education from './Education';
import Experience from './Experience';
import Research from './Research';
import Skills from './Skills';
import Awards from './Awards';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive look at my academic background, professional
            experience, and technical skillset.
          </p>
        </div>

        <section id="education">
          <Education />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="research">
          <Research />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="awards">
          <Awards />
        </section>
      </motion.div>
    </div>
  );
};

export default About;
