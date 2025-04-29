import didier from '../assets/didier.jpeg';
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je conçois des interfaces fluides et interactives en optimisant l'expérience utilisateur.",
        icon: <LetterText className="text-indigo-700 scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je construis des systèmes backend robustes et sécurisés pour des applications performantes.",
        icon: <CalendarSync className="text-indigo-700 scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Je mets un point d'honneur à créer des designs modernes et intuitifs pour une expérience utilisateur optimale.",
        icon: <Paintbrush className="text-indigo-700 scale-150" />,
    },
];

const About = () => {
    return (
        <>
            <Navbar />
            <section
                className="min-h-[calc(100vh-64px)] bg-gray-100 flex items-center justify-center px-4 md:px-8 py-10"
                id="About"
            >
                <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8 items-center">
                    {/* Image de profil */}
                    <div className="flex justify-center">
                        <div className="relative w-52 h-52 md:w-64 md:h-64">
                            <img src={didier} alt="Profil de Didier" className="w-full h-full object-cover rounded-3xl shadow-lg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                        </div>
                    </div>

                    {/* Introduction Texte */}
                    <div className="text-center md:text-left space-y-3 text-sm md:text-base">
                        <p className="text-gray-700 font-medium">
                            Passionné par le développement web, je transforme les idées en applications performantes et interactives.
                        </p>
                        <p className="text-gray-700 font-medium">
                            Mon engagement : concevoir des solutions innovantes avec une attention particulière à l'UI/UX.
                        </p>
                    </div>

                    {/* Cartes des compétences */}
                    <div className="grid gap-4">
                        {aboutSections.map((section) => (
                            <div key={section.id} className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-md">
                                <div className="text-xl">{section.icon}</div>
                                <div>
                                    <h2 className="text-indigo-700 font-semibold text-base">{section.title}</h2>
                                    <p className="text-gray-600 text-sm">{section.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
