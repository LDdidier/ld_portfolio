import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contactez-moi
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Une question, un projet ou simplement envie de discuter ? Laissez-moi un message et je vous répondrai rapidement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez un message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Emmanuel Konan"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Konan@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mes coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Email</h3>
                      <a href="mailto:didierlobognon56@gmail.com" className="text-blue-600 hover:underline">
                        didierlobognon56@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full text-purple-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                      <a href="tel:+2250700000000" className="text-gray-700 hover:text-blue-600">
                        +225 07 00 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-full text-green-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Localisation</h3>
                      <p className="text-gray-700">Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Réseaux sociaux</h2>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', color: 'bg-blue-600' },
                    { name: 'GitHub', color: 'bg-gray-800' },
                    { name: 'Twitter', color: 'bg-sky-500' },
                    { name: 'Instagram', color: 'bg-pink-600' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ y: -4 }}
                      href="#"
                      className={`${social.color} text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all`}
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        {/* Icône factice - à remplacer par les vraies icônes */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;