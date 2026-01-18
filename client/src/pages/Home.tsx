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
                <img src="/images/headshot.jpg" alt="Alec Okelberry" className="w-full h-full object-cover rounded-full" />
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
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Hi, I'm <span className="font-semibold text-gray-900">Alec Okelberry</span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Bridging Physiological Data <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              & Artificial Intelligence
            </span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            From analyzing human systems to architecting digital ones. I'm a former Pre-Med scholar turned Software Engineer, 
            applying the rigor of the scientific method to build accessible, pixel-perfect, and performant web applications.
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
