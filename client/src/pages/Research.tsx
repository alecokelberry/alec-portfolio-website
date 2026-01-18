import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaChartLine, FaMicrophoneAlt, FaExternalLinkAlt, FaDatabase, FaCogs, FaCheckCircle } from 'react-icons/fa';

interface ResearchProject {
  id: number;
  title: string;
  subtitle?: string;
  role: string;
  venue: string;
  date: string;
  description: string;
  techStack: string[];
  achievements: string[];
  link?: { text: string; url: string };
  icon: JSX.Element;
  colorClass: string;
}

const Research = () => {
  const projects: ResearchProject[] = [
    {
      id: 1,
      title: 'Investigating Caffeine Intake Prior to Exercise',
      subtitle: 'The Effects of Caffeine Dosage on Exercise Performance and Stress Responses',
      role: 'Principal Investigator (Honors Thesis)',
      venue: 'Utah Valley University Honors Program',
      date: '2023',
      description: 'Independently designed and executed a controlled human-subjects study examining body weight-based caffeine dosing on exercise performance metrics and autonomic stress responses (heart rate complexity and cardiac rhythm).',
      techStack: ['Experimental Design', 'ECG Data Analysis', 'Statistical Modeling'],
      achievements: [
        'Secured funding through URSCA grant (Undergraduate Research Scholarly and Creative Activities).',
        'Collected, cleaned, and statistically analyzed physiological time-series data (ECG-derived metrics).',
        'Concluded that personalized caffeine dosing produced no significant effect on measured cardiac parameters — demonstrating critical evaluation of results and scientific skepticism.'
      ],
      link: { text: 'View Archived Thesis', url: 'https://uvu.contentdm.oclc.org/digital/collection/UVUTheses/id/914' },
      icon: <FaFlask />,
      colorClass: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Cerebral Oxygenation Responses to Cycling',
      subtitle: 'Comparing Arm and Leg Cycling at Moderate and Heavy Intensities',
      role: 'Co-Author & Data Analyst',
      venue: 'NSCA National Conference (Las Vegas, NV) - Poster #37',
      date: 'July 2023',
      description: 'Collaborative study using near-infrared spectroscopy (NIRS) to compare prefrontal cerebral oxygenation patterns during upper-body vs. lower-body cycling.',
      techStack: ['NIRS Signal Processing', 'Data Visualization', 'Collaborative Research'],
      achievements: [
        'Assisted with participant testing and real-time signal processing of hemodynamic data.',
        'Contributed to interpreting differential neural responses between exercise modes, with implications for fatigue monitoring.',
        'Abstract published in Journal of Strength and Conditioning Research (Vol. 37, Issue 12).'
      ],
      link: { text: 'NSCA 2023 Poster Presenters', url: 'https://www.nsca.com/events/nsca-national-conference/2023-national-conference-poster-presentations/' }, // Generic link placeholder if specific one isn't available, or keep generic text
      icon: <FaChartLine />,
      colorClass: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Effects of Caffeine Doses on Cardiorespiratory Responses',
      role: 'Co-Author & Presenter',
      venue: 'SWACSM Annual Meeting (Irvine, CA)',
      date: 'October 2023',
      description: 'Extension of thesis work investigating acute effects of low and moderate caffeine doses on ventilation, oxygen uptake, and other cardiorespiratory parameters during incremental exercise.',
      techStack: ['Metabolic Cart Configuration', 'Data Acquisition', 'Technical Presentation'],
      achievements: [
        'Supported protocol implementation, data acquisition (metabolic cart and ECG), and statistical analysis.',
        'Helped prepare and refine the presentation delivered to an audience of exercise scientists and clinicians.',
        'Proceedings published in International Journal of Exercise Science: Conference Proceedings (Vol. 14, Issue 4).'
      ],
      icon: <FaMicrophoneAlt />,
      colorClass: 'from-orange-500 to-red-500'
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
          Research <span className="text-blue-600">& Data Analysis</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-left md:text-center">
          During my time at Utah Valley University, I conducted rigorous human-subjects research in exercise physiology, 
          contributing to three distinct projects presented at the national level. These experiences sharpened my ability 
          to design experiments, collect and analyze complex physiological data, apply statistical methods, and communicate 
          technical findings — skills that translate directly to <span className="font-semibold text-gray-800">building reliable data pipelines, debugging algorithmic models, ensuring reproducibility,</span> and collaborating on interdisciplinary technical teams.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            {/* Colored Header Bar */}
            <div className={`h-2 w-full bg-gradient-to-r ${project.colorClass}`} />
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.colorClass} bg-opacity-10 text-white shadow-sm`}>
                  {React.cloneElement(project.icon, { className: 'text-xl' })}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  {project.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-sm text-gray-500 font-medium mb-4 italic">
                  {project.subtitle}
                </p>
              )}

              <div className="mb-6 space-y-1">
                 <p className="text-sm font-semibold text-gray-800">{project.role}</p>
                 <p className="text-sm text-gray-500">{project.venue}</p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Skills / Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded border border-gray-100">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Achievements */}
              <div className="mt-auto bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaCogs /> Engineering Impact
                </h4>
                <ul className="space-y-3">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors self-start group/link"
                >
                  {project.link.text}
                  <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer / Connect to Tech */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100"
      >
        <p className="text-gray-700 font-medium max-w-2xl mx-auto">
          "This body of work demonstrates my ability to handle real human data, apply rigorous methodology, 
          think critically about results, and effectively communicate complex technical information — 
          <span className="text-blue-600 font-bold"> competencies I continue to build and apply in software engineering projects.</span>"
        </p>
      </motion.div>
    </div>
  );
};

export default Research;
