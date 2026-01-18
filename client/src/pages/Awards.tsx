import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUniversity, FaScroll, FaMedal, FaStar, FaUserGraduate } from 'react-icons/fa';

interface Award {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
  icon: JSX.Element;
  colorClass: string;
}

const Awards = () => {
  const awards: Award[] = [
    {
      id: 1,
      title: 'College of Science Student Excellence Award',
      institution: 'Utah Valley University',
      year: '2023',
      description: 'Recognized for outstanding academic performance and contributions in Exercise Science & Outdoor Recreation among peers in the College of Science.',
      icon: <FaAward />,
      colorClass: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      id: 2,
      title: 'Presidential Scholar',
      institution: 'Utah Valley University',
      year: '2019 – 2023',
      description: 'Merit-based full-ride scholarship for students demonstrating exceptional academic potential and leadership throughout their undergraduate studies.',
      icon: <FaUniversity />,
      colorClass: 'text-purple-600 bg-purple-50 border-purple-100'
    },
    {
      id: 3,
      title: 'URSCA Research Grant',
      institution: 'Utah Valley University',
      year: '2023',
      description: 'Competitive grant funding awarded to support independent honors thesis research on caffeine\'s effects on exercise performance and stress responses.',
      icon: <FaScroll />,
      colorClass: 'text-green-600 bg-green-50 border-green-100'
    },
    {
      id: 4,
      title: 'Summa Cum Laude',
      institution: 'Bachelor of Science in Exercise Science',
      year: '2023',
      description: 'Graduated with highest academic honors, maintaining a 3.98 cumulative GPA across a rigorous STEM curriculum.',
      icon: <FaMedal />,
      colorClass: 'text-yellow-600 bg-yellow-50 border-yellow-100'
    },
    {
      id: 5,
      title: 'Dean\'s List',
      institution: 'Utah Valley University',
      year: 'Every Semester, 2019 – 2023',
      description: 'Consistent recognition for maintaining a GPA of 3.5 or higher each term, demonstrating sustained academic excellence.',
      icon: <FaStar />,
      colorClass: 'text-orange-600 bg-orange-50 border-orange-100'
    },
    {
      id: 6,
      title: 'Honors Program Graduate',
      institution: 'Utah Valley University',
      year: '2023',
      description: 'Completed rigorous honors curriculum including a capstone thesis and advanced scholarly work alongside major degree requirements.',
      icon: <FaUserGraduate />,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    }
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
          Honors & <span className="text-blue-600">Achievements</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
          A track record of academic excellence, leadership, and competitive achievement. These honors reflect a 
          commitment to rigor and quality—principles I apply directly to software engineering and problem-solving.
        </p>
      </motion.div>

      {/* Awards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`p-3 rounded-xl ${award.colorClass}`}>
                {React.cloneElement(award.icon, { size: 24 })}
              </span>
              <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-full uppercase tracking-wide">
                {award.year}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
              {award.title}
            </h3>
            
            <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
              {award.institution}
            </p>
            
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
