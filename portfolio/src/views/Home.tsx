import { Mail, Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <div className="flex flex-col min-h-screen">
        <Navbar />
  
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Salut, je suis <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                Dogo Lobognon Didier
              </span>
            </h1>
  
            <p className="mt-6 text-lg text-gray-600">
              Développeur Fullstack passionné, je crée des applications web & mobiles modernes
              en utilisant des technologies performantes.
              Besoin d'un projet innovant ? Parlons-en ! 
            </p>
  
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <a
                href="mailto:didierlobognon56@gmail.com"
                className="px-6 py-3 bg-blue-600 text-white font-semibold flex items-center gap-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                <Mail className="w-5 h-5" />
                Contactez-moi
              </a>
  
              <button
                onClick={onButtonClick}
                className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold flex items-center gap-2 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Download className="w-5 h-5" />
                Mon CV
              </button>
            </div>
          </div>
        </main>
  
        <footer className="bg-gray-100">
          <Footer />
        </footer>
      </div>
    );
  };
  

export default Home;
