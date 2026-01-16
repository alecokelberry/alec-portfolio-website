import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import Button from '../components/ui/Button';

const Resume = () => {
  // Ideally, this file exists in public/resume.pdf
  const resumeUrl = '/resume.pdf'; 

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-8rem)] flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">Resume</h1>
            <p className="text-gray-600">View or download my resume below.</p>
          </div>
          
          <a href={resumeUrl} download="Alec_Okelberry_Resume.pdf">
            <Button size="lg" className="flex items-center gap-2">
              <FaDownload /> Download PDF
            </Button>
          </a>
        </div>

        <div className="flex-grow bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative">
          <iframe
            src={resumeUrl}
            title="Resume Preview"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
              <FaFilePdf size={48} className="mb-4 text-gray-400" />
              <p className="mb-4">Unable to display PDF directly.</p>
              <a href={resumeUrl} download>
                <Button variant="outline">Download to View</Button>
              </a>
            </div>
          </iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
