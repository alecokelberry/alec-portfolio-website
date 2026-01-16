import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/alecokelberry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">GitHub</span>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/alecokelberry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/alecokelberry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <span className="sr-only">X (Twitter)</span>
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alec Okelberry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
