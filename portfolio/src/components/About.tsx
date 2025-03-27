import Title from "./Title";
import didier from '../assets/didier.jpeg';
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

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
        <section className="bg-gray-100 py-20 px-6 md:px-16" id="About">
            <Title title="À propos de moi" />

            <div className="container mx-auto grid md:grid-cols-3 gap-12 items-center">
                
                {/* Image de profil */}
                <div className="flex justify-center">
                    <div className="relative w-72 h-72">
                        <img src={didier} alt="Profil de Didier" className="w-full h-full object-cover rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                    </div>
                </div>

                {/* Introduction Texte */}
                <div className="text-center md:text-left space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        🚀 Passionné par le développement web, je transforme les idées en applications performantes et interactives. Mon expertise s'étend du développement frontend, avec des interfaces modernes et réactives, au backend, où je veille à la stabilité et la sécurité des systèmes.
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                        🎨 Mon engagement : concevoir des solutions innovantes avec une attention particulière à l'UI/UX, garantissant une expérience utilisateur immersive et intuitive.
                    </p>
                </div>

                {/* Cartes des compétences */}
                <div className="grid gap-6">
                    {aboutSections.map((section) => (
                        <div key={section.id} className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="text-3xl">{section.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold text-indigo-700">{section.title}</h2>
                                <p className="text-gray-600">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
