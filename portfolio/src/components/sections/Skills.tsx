import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/profileData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'tools', label: 'Outils' },
    { id: 'design', label: 'Design' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Color mapping for different categories
  const categoryColors = {
    frontend: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    backend: 'bg-gradient-to-r from-purple-500 to-pink-500',
    mobile: 'bg-gradient-to-r from-green-500 to-emerald-400',
    tools: 'bg-gradient-to-r from-orange-500 to-amber-400',
    design: 'bg-gradient-to-r from-indigo-500 to-violet-400',
    all: 'bg-gradient-to-r from-blue-600 to-purple-600'
  };

  const getSkillColor = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || categoryColors.all;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 font-medium mb-2">MES COMPÉTENCES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Expertise Technique</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Au fil des années, j'ai acquis et perfectionné diverses compétences techniques 
            me permettant de concevoir des applications web et mobiles complètes et performantes.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-xl">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{skill.name}</h3>
              
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${getSkillColor(skill.category)}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;