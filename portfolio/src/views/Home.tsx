import { Mail, Download, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  const onButtonClick = () => {
    const pdfUrl = "cv_didier.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-24">
        <div className="text-center md:text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block mb-2 text-gray-700">Bonjour, je suis</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Dogo Lobognon Didier
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              <span className="font-medium text-gray-800">Développeur Fullstack</span> spécialisé dans la création d'applications web et mobiles performantes. 
              Je transforme vos idées en solutions numériques élégantes et fonctionnelles 
              avec les dernières technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="mailto:didierlobognon56@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold flex items-center justify-center gap-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5" />
                Contactez-moi
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onButtonClick}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold flex items-center justify-center gap-2 rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-500"
            >
              <span className="px-3 py-1 bg-gray-100 rounded-full">React.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Next.js</span>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;