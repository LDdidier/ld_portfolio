import { Mail, Download } from "lucide-react";
import ld from "../assets/ld.jpeg"; // Assurez-vous que c'est une image sans fond (.png)

const Home = () => {
    const onButtonClick = () => {
        const pdfUrl = "cv_didier.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id="Home" className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-16 px-6">
            {/* Texte de présentation */}
            <div className="text-center md:text-left max-w-lg">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Salut, je suis <br />
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Dogo Lobognon Didier
                    </span>
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    Développeur Fullstack passionné, je crée des applications web & mobiles modernes
                    en utilisant des technologies performantes.
                    Besoin d’un projet innovant ? Parlons-en ! 🚀
                </p>

                {/* Boutons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <a
                        href="mailto:didierlobognon56@gmail.com"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold flex items-center gap-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>

                    <a
                        // href="/didier.pdf"
                        onClick={onButtonClick}
                        download
                        className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold flex items-center gap-2 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        <Download className="w-5 h-5" />
                        Télécharger mon CV
                    </a>
                </div>
            </div>

            {/* Image avec effet */}
            <div className="relative md:ml-16 mt-10 md:mt-0">
            <div className="flex justify-center">
                    <div className="relative w-72 h-72">
                        <img
                            src={ld}
                            alt="Profile Image"
                            className="w-full h-full object-cover rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
