import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Home } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/profileData';

const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 font-medium mb-2">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Entrons en Contact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter.
            Je suis toujours ouvert à de nouvelles opportunités et collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              Envoyez-moi un message
            </motion.h3>
            
            <motion.form variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    placeholder="Votre email"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Sujet de votre message"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Votre message"
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit"
                  className="w-full sm:w-auto"
                  icon={<Send size={16} />}
                >
                  Envoyer Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:pl-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              Mes coordonnées
            </motion.h3>
            
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div 
                variants={itemVariants} 
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Phone className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Téléphone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Home className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Adresse</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.address}</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Me suivre</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;