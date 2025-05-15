import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/profileData';
import ld_2 from '../../assets/images/ld_2.jpeg'

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Full Stack Developer", "Mobile Developer", "UI/UX Designer"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 bg-opacity-10 dark:bg-opacity-5"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.8, 0.5],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 py-16 mt-16">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="block text-blue-600 font-medium mb-3"
              variants={itemVariants}
            >
              Bonjour, je suis
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 h-[3rem]"
              variants={itemVariants}
            >
              <motion.h2
                key={textIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textAnimation}
              >
                {texts[textIndex]}
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              Basé à {personalInfo.location}, je crée des applications web et mobiles performantes 
              avec une expertise en React, Node.js, Vue.js, Laravel, Flutter et plus encore.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button href="#contact">Me contacter</Button>
              <Button href="#projects" variant="outline">Voir mes projets</Button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 mt-8"
              variants={itemVariants}
            >
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full h-96 md:h-auto">
              {/* 3D animated image/profile */}
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={ld_2} 
                  alt="Dogo Lobognon Didier" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <p className="font-medium text-center mb-3 text-gray-700 dark:text-gray-300">
                    {personalInfo.title}
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm">React</div>
                    <div className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 text-sm">Node.js</div>
                    <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 text-sm">Flutter</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating skill badges */}
              <motion.div 
                className="absolute -top-10 -left-10 px-4 py-2 rounded-lg bg-blue-600 text-white shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                React.js
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -right-5 px-4 py-2 rounded-lg bg-teal-500 text-white shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -5, 0], 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                Flutter
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 right-20 px-4 py-2 rounded-lg bg-purple-600 text-white shadow-lg"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
              >
                Node.js
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={24} className="mx-auto text-gray-600 dark:text-gray-400" />
          </motion.div>
          <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">Défiler vers le bas</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;