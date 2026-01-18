import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaDna, FaCertificate } from 'react-icons/fa';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  institution: string;
  location: string;
  description: string[];
  icon: JSX.Element;
  colorClass: string;
}

const Education = () => {
  const education: TimelineItem[] = [
    {
      id: 1,
      year: 'Oct 2025 – Present (Anticipated Graduation: Summer 2026)',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Western Governors University',
      location: 'Salt Lake City, UT',
      description: [
        'Competency-based program emphasizing programming (Java, Python, C++), algorithms, data structures, software engineering, and AI foundations.',
        'ABET-accredited curriculum with 37 courses, including specialized certifications like Linux Essentials and Axelos ITIL Foundation.',
        'Accelerated track aligning with my analytical research background, focusing on building robust, scalable systems for real-world health informatics applications.',
        'Key technologies: Java, Python, C++, SQL, HTML/CSS, JavaScript, Data Structures & Algorithms.'
      ],
      icon: <FaCode />,
      colorClass: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      id: 2,
      year: '2019 – 2023',
      title: 'Bachelor of Science in Exercise Science',
      institution: 'Utah Valley University',
      location: 'Orem, UT',
      description: [
        'Graduated Summa Cum Laude with a 3.98 GPA; completed rigorous STEM core coursework including Biology, Chemistry, Human Anatomy, and Physiology.',
        'Honors Program graduate. Conducted independent Honors thesis research on "Investigating Caffeine Intake Prior to Exercise," funded by a URSCA grant. Honed experimental design and data interpretation skills transferable to algorithmic problem-solving.',
        'Pre-med track with extensive human subjects research, building a strong foundation in evidence-based analysis for future tech roles in wellness and health applications.'
      ],
      icon: <FaGraduationCap />,
      colorClass: 'text-green-600 bg-green-50 border-green-100'
    },
    {
      id: 3,
      year: '2019 – 2023 (Concurrent with BS)',
      title: 'Associate of Science in Biology',
      institution: 'Utah Valley University',
      location: 'Orem, UT',
      description: [
        'Achieved a 4.0 GPA while fulfilling general education and foundational science requirements.',
        'Provided deep knowledge in cellular biology and laboratory techniques, complementing exercise science studies.',
        'Enhanced analytical and scientific reasoning skills, creating a multidisciplinary perspective essential for complex data-heavy projects.'
      ],
      icon: <FaDna />,
      colorClass: 'text-purple-600 bg-purple-50 border-purple-100'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Education & <span className="text-blue-600">Academic Journey</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
          My educational journey bridges scientific inquiry with technical innovation. I began at Utah Valley University, 
          building a solid foundation in biology and exercise science while pursuing a pre-med track, culminating in 
          medical school acceptance in summer 2025. Driven by a deep passion for data-driven problem-solving, I chose 
          to pivot toward technology. After being accepted into UVU's Master of Science in Applied Artificial Intelligence 
          (set to begin Fall 2025), I opted instead for Western Governors University's competency-based Bachelor of 
          Science in Computer Science program. This path allowed me to establish a stronger, more practical technical 
          foundation to support my career transition. Ultimately, this diverse background has equipped me with transferable 
          analytical expertise ideal for software engineering—particularly in developing impactful health-tech solutions and beyond.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="space-y-12 relative border-l-2 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-12 pb-4">
        {education.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[43px] md:-left-[59px] top-0 w-6 h-6 rounded-full border-4 border-white shadow-md ${item.colorClass.split(' ')[1].replace('bg-', 'bg-')}`} />

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className={`p-3 rounded-xl ${item.colorClass}`}>
                    {item.icon}
                  </span>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">{item.title}</h2>
                    <p className="text-gray-700 font-medium">{item.institution}</p>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full self-start md:self-center mt-2 md:mt-0">
                  {item.year}
                </div>
              </div>

              <div className="ml-0 md:ml-16">
                 <p className="text-gray-500 text-sm mb-4 italic">{item.location}</p>
                 <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications & Ongoing Learning */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
      >
        <div className="flex items-center gap-4 mb-6">
          <FaCertificate className="text-orange-500 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-900">Certifications & Ongoing Learning</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Included in WGU Curriculum</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Axelos ITIL Foundation Certification</li>
              <li>• LPI Linux Essentials</li>
              <li>• CompTIA Project+ (Anticipated)</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
             <h3 className="font-bold text-gray-800 mb-2">Independent Study</h3>
             <ul className="space-y-2 text-gray-600 text-sm">
               <li>• Full Stack Open (React, Node.js, GraphQL)</li>
               <li>• Algorithms & Data Structures (LeetCode)</li>
               <li>• System Design Principles</li>
             </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
