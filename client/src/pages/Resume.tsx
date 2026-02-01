import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../components/ui/Button';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 print:bg-white print:p-0 print:py-0">
      {/* Action Bar - Hidden when printing */}
      <div className="max-w-[210mm] mx-auto px-4 mb-6 flex justify-between items-center print:hidden">
        <h1 className="text-xl font-bold text-gray-900">Resume</h1>
        <div className="flex gap-2">
            <Button onClick={handlePrint} size="sm" className="flex items-center gap-1">
                 Print / Save as PDF
            </Button>
        </div>
      </div>

      {/* Resume Container - Standard Letter Size for Screen, Auto for Print */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={resumeRef}
        className="max-w-[216mm] mx-auto bg-white shadow-2xl print:shadow-none p-12 md:p-16 text-gray-800 font-sans print:w-full print:max-w-none print:mx-0 print:p-0"
        style={{ minHeight: '279mm' }}
      >
        {/* Print Container specific wrapper to enforce dimensions if needed */}
        <div className="print:w-full print:h-full">

        {/* Header */}
        <header className="border-b-2 border-gray-900 pb-4 mb-4 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight uppercase mb-1">Alec Okelberry</h1>
              <p className="text-base font-semibold text-blue-700">Aspiring Data Analyst</p>
            </div>
            <div className="text-right text-xs space-y-1">
               <div className="flex items-center justify-end gap-2">
                <span className="font-medium">Salt Lake City, UT</span>
                 <FaMapMarkerAlt className="text-gray-500"/>
              </div>
              <div className="flex items-center justify-end gap-2">
                 <a href="mailto:alecokelberry@gmail.com" className="hover:text-blue-600 font-medium">alecokelberry@gmail.com</a>
                 <FaEnvelope className="text-gray-500" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="font-medium">(801) 310-1175</span>
                <FaPhone className="text-gray-500"/>
              </div>
               <div className="flex items-center justify-end gap-3 mt-1">
                <a href="https://linkedin.com/in/alec-okelberry" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-700"><FaLinkedin size={14}/></a>
                <a href="https://github.com/Okie15" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><FaGithub size={14}/></a>
              </div>
            </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-12 gap-8 print:gap-6">
            
            {/* Left Column (Main) */}
            <div className="col-span-12 md:col-span-8 print:col-span-8">
                
                {/* Summary */}
                <section className="mb-5">
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-2 pb-1">Professional Summary</h2>
                    <p className="text-xs text-gray-700 text-justify leading-relaxed">
                        Detail-oriented aspiring data analyst transitioning from health sciences and renewable energy design, with hands-on experience in data automation using Excel VBA and physiological data analysis from research projects. Proficient in statistical methods, data cleaning, and deriving insights from complex datasets. Eager to apply a 3.98 GPA academic foundation and practical skills to support data-driven decisions in an entry-level role.
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-5">
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-3 pb-1">Professional Experience</h2>
                    
                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-gray-900 text-sm">Structural Designer</h3>
                            <span className="text-gray-600 text-xs font-semibold">2020 – 2023</span>
                        </div>
                        <div className="text-blue-700 font-medium text-xs mb-2">Solcius • Provo, UT</div>
                        <ul className="list-disc list-outside ml-3 space-y-1 text-xs text-gray-700 leading-relaxed marker:text-gray-400">
                            <li>Developed custom <strong>VBA macros</strong> in Excel to automate structural engineering calculations, reducing manual processing time significantly and minimizing errors in load assessments (ASCE 7 standards).</li>
                            <li>Analyzed site-specific data to optimize designs for residential/commercial projects, improving compliance and efficiency through data-driven iterations.</li>
                            <li>Collaborated with licensed engineers to validate datasets and outputs, enhancing data accuracy and supporting cost savings.</li>
                        </ul>
                    </div>
                </section>

                 {/* Research */}
                 <section className="mb-5">
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-3 pb-1">Research Projects</h2>
                    
                    <div className="mb-3">
                        <div className="flex justify-between items-baseline mb-0.5">
                            <h3 className="font-bold text-gray-900 text-sm">Honors Thesis: Caffeine & Exercise</h3>
                            <span className="text-gray-600 text-xs font-semibold">2023</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            <span className="italic text-gray-500">Utah Valley University</span> • Analyzed heart rate complexity data from human subjects (URSCA grant); no significant dosage effects found, demonstrating statistical evaluation methodology.
                        </p>
                    </div>

                    <div className="mb-3">
                        <div className="flex justify-between items-baseline mb-0.5">
                            <h3 className="font-bold text-gray-900 text-sm">Poster: Cerebral Oxygenation</h3>
                            <span className="text-gray-600 text-xs font-semibold">2023</span>
                        </div>
                         <p className="text-xs text-gray-700 leading-relaxed">
                            <span className="italic text-gray-500">NSCA National Conference</span> • Processed near-infrared spectroscopy data to compare brain responses, co-authored and presented nationally.
                        </p>
                    </div>
                    
                    <div className="mb-0">
                        <div className="flex justify-between items-baseline mb-0.5">
                            <h3 className="font-bold text-gray-900 text-sm">Presentation: Cardiorespiratory Responses</h3>
                            <span className="text-gray-600 text-xs font-semibold">2023</span>
                        </div>
                         <p className="text-xs text-gray-700 leading-relaxed">
                            <span className="italic text-gray-500">SWACSM Annual Meeting</span> • Extended thesis data analysis focusing on ventilation metrics; published in conference proceedings.
                        </p>
                    </div>
                </section>
                
                 {/* Technical Projects Removed as per user request to save space */}

            </div>

             {/* Right Column (Sidebars) */}
             <div className="col-span-12 md:col-span-4 print:col-span-4 pl-0 md:pl-6 print:pl-6 border-l-0 md:border-l border-gray-100 print:border-gray-200">
                
                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-3 pb-1">Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-[11px] font-bold text-gray-800 uppercase mb-1">Technical</h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Excel (Advanced, VBA), SQL, Python, Data Cleaning, Statistical Analysis
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[11px] font-bold text-gray-800 uppercase mb-1">Tools</h3>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                Tableau, Power BI, CAD, ECG/NIRS sensors
                             </p>
                        </div>
                         <div>
                            <h3 className="text-[11px] font-bold text-gray-800 uppercase mb-1">Soft Skills</h3>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                Problem-Solving, Cross-Functional Collaboration, Technical Writing
                             </p>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-3 pb-1">Education</h2>
                    
                    <div className="mb-3">
                        <h3 className="font-bold text-gray-900 text-sm">B.S. Computer Science</h3>
                        <div className="text-xs text-gray-600">Western Governors Univ.</div>
                         <div className="text-xs text-gray-400 italic mb-1">Est. 2026</div>
                        <p className="text-xs text-gray-600 leading-snug">Algorithms, Data Structures, Software Engineering, AI.</p>
                    </div>

                    <div className="mb-3">
                        <h3 className="font-bold text-gray-900 text-sm">B.S. Exercise Science</h3>
                        <div className="text-xs text-gray-600">Utah Valley University</div>
                        <div className="text-xs text-gray-400 italic mb-1">2023</div>
                         <p className="text-xs text-gray-600 leading-snug">Summa Cum Laude (3.98 GPA); Honors Program.</p>
                    </div>

                    <div className="mb-0">
                        <h3 className="font-bold text-gray-900 text-sm">A.S. Biology</h3>
                        <div className="text-xs text-gray-600">Utah Valley University</div>
                        <div className="text-xs text-gray-400 italic mb-1">2023</div>
                         <p className="text-xs text-gray-600 leading-snug">4.0 GPA.</p>
                    </div>
                </section>

                {/* Awards */}
                 <section className="mb-6">
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-3 pb-1">Awards</h2>
                    <ul className="space-y-1 text-xs text-gray-600 leading-tight">
                        <li>• UVU Student Excellence (2023)</li>
                        <li>• Presidential Scholar ('19-'23)</li>
                        <li>• URSCA Research Grant</li>
                        <li>• Dean's List (All Semesters)</li>
                    </ul>
                </section>

                 {/* Certifications */}
                 <section>
                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 mb-3 pb-1">Certifications</h2>
                     <ul className="space-y-2">
                        <li>
                            <div className="text-xs font-bold text-gray-800">freeCodeCamp</div>
                            <p className="text-xs text-gray-600 leading-tight">Responsive Web Design, JS Algos, Python, SQL (In Progress)</p>
                        </li>
                         <li>
                            <div className="text-xs font-bold text-gray-800">Anticipated</div>
                            <p className="text-xs text-gray-600 leading-tight">Linux Essentials, ITIL 4</p>
                        </li>
                     </ul>
                </section>

             </div>
        </div>
        </div>
      </motion.div>
      
      <style>{`
        @media print {
            @page { margin: 0; size: auto; }
            body, html { 
                height: 100%;
                margin: 0 !important; 
                padding: 0 !important; 
                overflow: hidden;
            }
        }
      `}</style>
    </div>
  );
};

export default Resume;
