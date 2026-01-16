import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Profile Image Placeholder / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mx-auto relative z-10">
             <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-4xl">👨‍💻</span>
                {/* Replace with <img src="/profile.jpg" alt="Alec Okelberry" className="w-full h-full object-cover" /> */}
             </div>
          </div>
          {/* Decorative Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Alec Okelberry</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            Aspiring Software Engineer | WGU BSCS Graduate
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            I build accessible, pixel-perfect, and performant web applications. 
            Passionate about full-stack development, cloud solutions, and creating intuitive user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projects">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/30">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
