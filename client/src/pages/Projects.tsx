import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Mock Data
const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A full-stack portfolio website built with React, Node.js, and Prisma. Features a contact form with email integration and dynamic blog capabilities.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/alecokelberry/alec-portfolio-website',
    demo: 'https://alec-portfolio.vercel.app', // Placeholder
    // image: '/projects/portfolio.png'
  },
  {
    id: 2,
    title: 'Bank Dice Game',
    description: 'An interactive dice game built with JavaScript. Players roll dice to accumulate points, demonstrating DOM manipulation and game logic.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/alecokelberry/bank-dice-game',
    demo: '#', 
  },
  {
    id: 3,
    title: 'Task Manager API',
    description: 'A RESTful API for managing tasks and users. Includes JWT authentication, filtering, and pagination.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Jest'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Projects</h1>
        <p className="text-gray-600 mb-8 text-lg">A showcase of my recent work.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 w-full object-cover flex items-center justify-center text-gray-400">
                  <span className="text-4xl">🖥️</span>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                                <FaGithub className="mr-2" /> Code
                            </Button>
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" className="w-full">
                                <FaExternalLinkAlt className="mr-2" /> Live
                            </Button>
                        </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
