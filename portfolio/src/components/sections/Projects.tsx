import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/profileData';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 font-medium mb-2">MES PROJETS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Réalisations Récentes</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Découvrez une sélection de projets que j'ai réalisés, démontrant mes compétences
            en développement web et mobile ainsi que ma sensibilité au design.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden group h-56">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="text-white font-semibold">{project.title}</div>
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {activeProject === project.id ? 'Voir moins' : 'Voir plus'}
                </button>
                
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Détails du projet :</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Interface utilisateur intuitive et réactive</li>
                        <li>Optimisation des performances</li>
                        <li>Intégration avec des APIs externes</li>
                        <li>Expérience utilisateur soignée</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;