import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 
    'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS',
    'Python', 'Java', 'Git/GitHub', 'RESTful APIs'
  ];

  const education = [
    {
      school: 'Western Governors University',
      degree: 'B.S. Computer Science',
      date: 'Expected Graduation: Summer 2026',
      description: 'Focusing on Data Structures, Algorithms, and Software Engineering.'
    },
    // Add more if needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-900 border-b pb-4">About Me</h1>
        
        {/* Bio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who I Am</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Hello! I'm Alec, a Computer Science student at Western Governors University with a passion for building software that solves real-world problems. 
            I love diving into full-stack development, from crafting intuitive user interfaces with React to architecting scalable backend systems with Node.js.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the great outdoors.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-blue-500">
                <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                <p className="text-blue-600 font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-500 mb-2">{edu.date}</p>
                <p className="text-gray-600">{edu.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
