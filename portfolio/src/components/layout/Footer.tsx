import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data/profileData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Didier.dev
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Développeur Full Stack & Mobile basé à Abidjan, Côte d'Ivoire.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Liens rapides
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Formation', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace('à ', '')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Contact
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-gray-400">
                {personalInfo.address}
              </li>
              <li className="text-gray-400">
                {personalInfo.nationality}
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Newsletter
            </motion.h4>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Restez informé de mes derniers projets et articles.
            </motion.p>
            <motion.form 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <input
                type="email"
                placeholder="Votre email"
                className="bg-slate-800 text-white p-2 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                S'inscrire
              </button>
            </motion.form>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-slate-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>&copy; {currentYear} Dogo Lobognon Didier. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;