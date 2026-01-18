import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaCertificate, FaGraduationCap } from 'react-icons/fa';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: JSX.Element;
  colorClass: string;
}

interface Certification {
  name: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Redux', 'TypeScript', 'Tailwind CSS', 'Bootstrap/Sass', 'HTML5/Semantic Web', 'Responsive Design'],
      icon: <FaCode />,
      colorClass: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Middleware Integration', 'Authentication (JWT)', 'API Design'],
      icon: <FaServer />,
      colorClass: 'text-green-600 bg-green-50 border-green-100'
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL (SQL)', 'MongoDB (NoSQL)', 'Mongoose', 'Database Design', 'CRUD Operations', 'Data Modeling'],
      icon: <FaDatabase />,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git & Version Control', 'Bash Scripting', 'Linux Command Line', 'VS Code', 'npm/yarn', 'Postman'],
      icon: <FaTools />,
      colorClass: 'text-orange-600 bg-orange-50 border-orange-100'
    },
    {
      title: 'Data & Research',
      skills: ['Experimental Design', 'Statistical Analysis', 'Data Cleaning', 'Physiological Data Processing', 'Scientific Writing', 'Critical Evaluation'],
      icon: <FaBrain />,
      colorClass: 'text-purple-600 bg-purple-50 border-purple-100'
    }
  ];

  const certifications: Certification[] = [
    { name: 'Responsive Web Design', issuer: 'freeCodeCamp', status: 'Completed' },
    { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', status: 'Completed' },
    { name: 'Front End Development Libraries', issuer: 'freeCodeCamp', status: 'Completed' },
    { name: 'Relational Database', issuer: 'freeCodeCamp', status: 'Completed' },
    { name: 'Back End Development and APIs', issuer: 'freeCodeCamp', status: 'Completed' },
    { name: 'LPI Linux Essentials', issuer: 'WGU / LPI', status: 'In Progress' },
    { name: 'ITIL 4 Foundation', issuer: 'WGU / Axelos', status: 'In Progress' },
  ];

  const upcomingSkills = [
    'Java (Core & Advanced)',
    'Python (Data Structures)',
    'C++ Fundamentals',
    'Advanced Algorithms',
    'Software Design Patterns',
    'AI Foundations'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Technical <span className="text-blue-600">Skills & Arsenal</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-left md:text-center">
          My skill set combines strong <span className="font-semibold text-gray-800">analytical and research experience</span> from my background in physiological science with <span className="font-semibold text-gray-800">practical full-stack development foundations</span>. This unique blend positions me to build reliable, data-driven software solutions in health-tech and beyond.
        </p>
      </motion.div>

      {/* Skill Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`p-3 rounded-lg ${category.colorClass}`}>
                {category.icon}
              </span>
              <h3 className="font-bold text-gray-900 text-lg">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-100">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Upcoming/Learning Card */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="p-3 rounded-lg bg-gray-200 text-gray-700">
                <FaGraduationCap />
              </span>
              <h3 className="font-bold text-gray-900 text-lg">Upcoming at WGU</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Core competencies I am actively acquiring through my BSCS program.</p>
            <div className="flex flex-wrap gap-2">
              {upcomingSkills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 border-dashed">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
      </div>

      {/* Certifications Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-200 flex-grow"></div>
          <h2 className="px-6 text-2xl font-bold text-gray-800 uppercase tracking-wider flex items-center gap-3">
            <FaCertificate className="text-orange-500" /> Certifications
          </h2>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
             <div key={cert.name} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div>
                  <h4 className="font-bold text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  cert.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {cert.status}
                </span>
             </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
