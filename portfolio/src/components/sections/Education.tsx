import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education, experiences } from '../../data/profileData';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 font-medium mb-2">MON PARCOURS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Formation & Expérience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center mb-10"
            >
              <GraduationCap size={28} className="text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Formation</h3>
            </motion.div>

            <div className="relative pl-10 border-l-2 border-blue-600">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="mb-10 relative"
                >
                  <div className="absolute -left-[29px] top-1 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{education.length - index}</span>
                  </div>
                  <div className="ml-4">
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{item.institution}</p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{item.duration}</p>
                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center mb-10"
            >
              <Briefcase size={28} className="text-teal-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Expérience</h3>
            </motion.div>

            <div className="relative pl-10 border-l-2 border-teal-600">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="mb-10 relative"
                >
                  <div className="absolute -left-[29px] top-1 w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                    <span className="text-teal-600 dark:text-teal-400 font-bold">{experiences.length - index}</span>
                  </div>
                  <div className="ml-4">
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">{item.role}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{item.company}</p>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">{item.duration}</p>
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-teal-600 rounded-full mt-1.5 mr-2"></span>
                            <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;