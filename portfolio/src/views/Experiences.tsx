import Title from "../components/Title";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
// import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Google",
        period: "Sep 2022 - Présent",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps.",
            "Optimisation des performances de l'application.",
        ],
        image: google,
        tech: [imgJS, imgNODE, imgREACT]
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Meta",
        period: "Jan 2021 - Août 2022",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image: meta,
        tech: [imgNEXT, imgTAILWIND, imgTYPE]
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Amazon",
        period: "Mai 2019 - Déc 2020",
        description: [
            "Développement d'une interface utilisateur pour Amazon Web Services.",
            "Implémentation des tests unitaires et E2E.",
        ],
        image: amazon,
        tech: [imgHTML, imgCSS, imgJS]
    },
];

const Experiences = () => {
    return (
        <>
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Section Experiencess */}
            <div id="Experiences" className="flex-1 bg-white flex flex-col justify-center items-center text-gray-900 py-10">
                <Title title="Expériences" />
                <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-6">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            className="w-full md:w-80 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={experience.image} alt={experience.company} className="w-16 h-16 rounded-full object-cover shadow-lg" />
                                <div>
                                    <h2 className="text-xl font-semibold text-blue-600">{experience.role}</h2>
                                    <h3 className="text-sm font-light text-gray-500">{experience.company}</h3>
                                    <span className="text-xs text-gray-400">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-inside list-disc text-gray-600 text-sm">
                                {experience.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                            <div className="flex mt-4 space-x-2">
                                {experience.tech.map((tech, idx) => (
                                    <img key={idx} src={tech} alt="tech" className="w-10 h-10 rounded-full shadow-sm" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
        </>
    );
};

export default Experiences;
