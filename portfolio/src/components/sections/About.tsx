import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Zap, Clock } from 'lucide-react';
import { personalInfo } from '../../data/profileData';
import ld_1 from '../../assets/images/ld_1.jpeg'

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const qualities = [
    { 
      icon: <Award className="w-10 h-10 text-blue-600" />, 
      title: 'Passionné', 
      description: 'Enthousiaste et dévoué à l\'excellence dans tous mes projets de développement.' 
    },
    { 
      icon: <Zap className="w-10 h-10 text-purple-600" />, 
      title: 'Créatif', 
      description: 'Capable de penser de manière innovante pour résoudre des problèmes complexes.' 
    },
    { 
      icon: <Users className="w-10 h-10 text-teal-600" />, 
      title: 'Collaboratif', 
      description: 'Excellent communicateur qui travaille efficacement en équipe.' 
    },
    { 
      icon: <Clock className="w-10 h-10 text-orange-600" />, 
      title: 'Rigoureux', 
      description: 'Méthodique, organisé et attentif aux détails pour des résultats de qualité.' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-blue-600 font-medium mb-2"
            variants={itemVariants}
          >
            À PROPOS DE MOI
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Qui suis-je?
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-8"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main image */}
            <motion.div
              className="relative z-20 rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={ld_1} 
                alt="Dogo Lobognon Didier coding" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-600 rounded-lg z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-purple-600 rounded-lg z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
              variants={itemVariants}
            >
              Développeur Full Stack & Mobile
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.about}
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Je suis spécialisé dans le développement d'applications web et mobiles performantes, 
              avec une expertise particulière en React, Node.js, Vue.js, Laravel, Flutter, Python 
              et MongoDB. Mon approche combine créativité et logique pour résoudre des problèmes complexes.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Full Stack Web Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Mobile App Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Database Management</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <div>
                <span className="block text-3xl font-bold text-blue-600">2+</span>
                <span className="text-gray-600 dark:text-gray-400">Années d'expérience</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-600">15+</span>
                <span className="text-gray-600 dark:text-gray-400">Projets complétés</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-600">7+</span>
                <span className="text-gray-600 dark:text-gray-400">Technologies maîtrisées</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Qualities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{quality.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{quality.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;