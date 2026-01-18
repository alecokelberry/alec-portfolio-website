import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaSolarPanel, FaFlask, FaSyringe, FaNotesMedical } from 'react-icons/fa';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  icon: JSX.Element;
  colorClass: string;
}

const Experience = () => {
  const experiences: TimelineItem[] = [
    {
      id: 1,
      year: '2025',
      title: 'Medical Assistant',
      company: 'Southern Utah ENT',
      location: 'St. George, UT',
      description: [
        'Applied clinical expertise in a specialized ENT setting, adapting quickly to new workflows and patient care protocols.',
        'Maintained high precision in patient documentation and procedural assistance, ensuring operational efficiency.'
      ],
      icon: <FaUserMd />,
      colorClass: 'text-teal-600 bg-teal-50 border-teal-100'
    },
    {
      id: 2,
      year: '2024 – 2025',
      title: 'Medical Assistant',
      company: 'Revere Health Orem IM',
      location: 'Orem, UT',
      description: [
        'Managed electronic health records (EHR) for hundreds of patients daily, ensuring data accuracy and HIPAA compliance—skills directly transferable to secure data handling and system integrity.',
        'Collaborated with cross-functional teams (physicians, nurses, admin) to streamline workflows and resolve conflicts, essential for agile software development environments.',
        'Educated patients on treatment plans, minimizing ambiguity through clear technical communication—a user-centered approach applicable to software documentation and UI design.'
      ],
      icon: <FaUserMd />,
      colorClass: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      id: 3,
      year: '2020 – 2023',
      title: 'Structural & PV Designer',
      company: 'Solcius Solar',
      location: 'Provo, UT',
      description: [
        'Developed custom VBA macros and automated Excel templates for structural calculations, enabling efficient generation of compliant solar designs—early practical experience in programming logic.',
        'Validated calculations against ASCE 7 and IBC codes, demonstrating attention to detail and QA processes similar to code review and debugging.',
        'Optimized residential and commercial designs for structural integrity and cost, building skills in technical requirements gathering and delivering reliable solutions.'
      ],
      icon: <FaSolarPanel />,
      colorClass: 'text-yellow-600 bg-yellow-50 border-yellow-100'
    },
    {
      id: 4,
      year: '2022 – 2023',
      title: 'Medical Scribe',
      company: 'Timpanogos Regional Hospital ED',
      location: 'Orem, UT',
      description: [
        'Documented real-time interactions in high-pressure emergency settings, developing precision under time constraints and the ability to handle complex, dynamic data flows—parallels real-time system monitoring.',
        'Synthesized disparate medical data into coherent narratives, mirroring the process of debugging and system logging.'
      ],
      icon: <FaNotesMedical />,
      colorClass: 'text-red-600 bg-red-50 border-red-100'
    },
    {
      id: 5,
      year: '2022 – 2023',
      title: 'Research Assistant',
      company: 'Utah Valley University',
      location: 'Orem, UT',
      description: [
        'Supported exercise physiology research using ECG monitoring and NIRS, collecting and analyzing complex physiological data.',
        'Strengthened analytical mindset and experimental design skills, foundational to data-driven software development and algorithmic testing.'
      ],
      icon: <FaFlask />,
      colorClass: 'text-purple-600 bg-purple-50 border-purple-100'
    },
    {
      id: 6,
      year: '2022',
      title: 'COVID Technician',
      company: 'Utah Valley University',
      location: 'Orem, UT',
      description: [
        'Administered testing and vaccinations, adapting quickly to evolving guidelines and procedures during the pandemic.',
        'Cultivated resilience, rapid learning, and process-oriented thinking applicable to iterative software development cycles.'
      ],
      icon: <FaSyringe />,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      id: 7,
      year: '2021 – 2022',
      title: 'Medical Scribe',
      company: 'Advanced Orthopedics',
      location: 'Lehi, UT',
      description: [
        'Documented specialized orthopedic exams and procedures, requiring rapid assimilation of domain-specific terminology.',
        'Facilitated efficient clinic flow through accurate real-time data entry and information management.'
      ],
      icon: <FaNotesMedical />,
      colorClass: 'text-gray-600 bg-gray-50 border-gray-100'
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
          Professional <span className="text-blue-600">Experience</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
          My professional background is defined by a commitment to precision, data integrity, and process optimization. 
          From automating engineering calculations to managing complex health data in high-stakes environments, I brings 
          a disciplined, analytical approach to solving technical problems.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="space-y-12 relative border-l-2 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-12 pb-4">
        {experiences.map((item, index) => (
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
                    <p className="text-gray-700 font-medium">{item.company}</p>
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
    </div>
  );
};

export default Experience;
