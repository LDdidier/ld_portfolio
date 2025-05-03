import { motion } from "framer-motion";
import { CalendarSync, LetterText, Paintbrush, Globe, Rocket, GraduationCap, Code, ChevronDown } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import didier from '../assets/didier.jpeg';
import { useState } from 'react';

// Importez vos logos de technologies
import reactLogo from '../assets/tech-logos/reactLogo.svg';
import nodeLogo from '../assets/tech-logos/nodeLogo.svg';
import figmaLogo from '../assets/tech-logos/figmaLogo.svg';
import typescriptLogo from '../assets/tech-logos/typescriptLogo.svg';
import nextjsLogo from '../assets/tech-logos/nextjsLogo.svg';
import mongodbLogo from '../assets/tech-logos/mongodbLogo.png';
import tailwindLogo from '../assets/tech-logos/tailwindLogo.svg';
import graphqlLogo from '../assets/tech-logos/graphqlLogo.png';

const About = () => {
    const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

    // Données des compétences avec technologies associées
    const skills = [
        {
            id: 1,
            title: "Développeur Frontend",
            description: "Je crée des interfaces dynamiques et réactives avec les dernières technologies frontales.",
            icon: <LetterText className="text-indigo-700" />,
            level: 92,
            technologies: [
                { name: "React", logo: reactLogo, color: "text-blue-500" },
                { name: "Next.js", logo: nextjsLogo, color: "text-gray-800" },
                { name: "TypeScript", logo: typescriptLogo, color: "text-blue-600" },
                { name: "Tailwind CSS", logo: tailwindLogo, color: "text-cyan-500" },
            ]
        },
        {
            id: 2,
            title: "Développeur Backend",
            description: "J'architecte des solutions serveur robustes et évolutives pour des applications performantes.",
            icon: <CalendarSync className="text-indigo-700" />,
            level: 88,
            technologies: [
                { name: "Node.js", logo: nodeLogo, color: "text-green-600" },
                { name: "MongoDB", logo: mongodbLogo, color: "text-green-500" },
                { name: "GraphQL", logo: graphqlLogo, color: "text-pink-600" },
            ]
        },
        {
            id: 3,
            title: "Design UI/UX",
            description: "Je conçois des expériences utilisateur intuitives et esthétiques qui captivent vos utilisateurs.",
            icon: <Paintbrush className="text-indigo-700" />,
            level: 85,
            technologies: [
                { name: "Figma", logo: figmaLogo, color: "text-purple-500" },
                { name: "Adobe XD", logo: "", color: "text-pink-600" },
                { name: "Principle", logo: "", color: "text-red-500" },
            ]
        },
    ];

    const education = [
        {
            year: "2020-2023",
            degree: "Master en Développement Web",
            institution: "Université Paris-Dauphine"
        },
        {
            year: "2017-2020",
            degree: "Licence en Informatique",
            institution: "Sorbonne Université"
        }
    ];

    // Animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const toggleSkill = (id: number) => {
        setExpandedSkill(expandedSkill === id ? null : id);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Présentation */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center lg:justify-start"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative w-64 h-64 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
                                <img 
                                    src={didier} 
                                    alt="Profil de Didier" 
                                    className="relative w-full h-full object-cover rounded-3xl shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
                                    <div className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-800 animate-bounce">
                                        👋 Bonjour !
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="lg:col-span-2 space-y-6"
                        >
                            <motion.h1 
                                variants={item} 
                                className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                            >
                                À Propos de Moi
                            </motion.h1>
                            
                            <motion.p 
                                variants={item} 
                                className="text-lg text-gray-600"
                                whileHover={{ x: 5 }}
                            >
                                Passionné par le développement web, je transforme les idées en applications performantes et interactives.
                            </motion.p>
                            
                            <motion.p 
                                variants={item} 
                                className="text-lg text-gray-600"
                                whileHover={{ x: 5 }}
                            >
                                Mon engagement : concevoir des solutions innovantes avec une attention particulière à l'UI/UX.
                            </motion.p>
                            
                            <motion.div 
                                variants={item} 
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <motion.div 
                                    className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                                    whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                                    <span>Paris, France</span>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                                    whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <Rocket className="w-5 h-5 mr-2 text-purple-600" />
                                    <span>Disponible pour missions</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Section Compétences */}
                    <div className="mb-24">
                        <motion.h2 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Code className="inline-block w-8 h-8 mr-2 text-purple-600" />
                            Mes Domaines d'Expertise
                        </motion.h2>

                        <motion.div 
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {skills.map((skill) => (
                                <motion.div 
                                    key={skill.id}
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                                >
                                    <button 
                                        onClick={() => toggleSkill(skill.id)}
                                        className="w-full p-6 text-left flex justify-between items-center"
                                    >
                                        <div className="flex items-center">
                                            <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                                                {skill.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                                                <p className="text-gray-600 text-sm">{skill.description}</p>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expandedSkill === skill.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="text-gray-400" />
                                        </motion.div>
                                    </button>

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ 
                                            height: expandedSkill === skill.id ? 'auto' : 0,
                                            opacity: expandedSkill === skill.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                            <div className="flex justify-between mb-3">
                                                <span className="text-sm text-gray-500">Maîtrise</span>
                                                <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1 }}
                                                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                                                />
                                            </div>

                                            <h4 className="text-sm font-medium text-gray-500 mb-3">Technologies maîtrisées :</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {skill.technologies.map((tech, index) => (
                                                    <motion.div
                                                        key={index}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200"
                                                    >
                                                        {tech.logo && (
                                                            <img 
                                                                src={tech.logo} 
                                                                alt={tech.name} 
                                                                className="w-5 h-5 mr-2"
                                                            />
                                                        )}
                                                        <span className={`text-sm font-medium ${tech.color}`}>{tech.name}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Section Formation */}
                    <div className="mb-16">
                        <motion.h2 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            whileHover={{ scale: 1.02 }}
                        >
                            <GraduationCap className="inline-block w-8 h-8 mr-2 text-blue-600" />
                            Mon Parcours Académique
                        </motion.h2>

                        <motion.div 
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative max-w-3xl mx-auto"
                        >
                            <div className="absolute left-5 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

                            {education.map((edu, index) => (
                                <motion.div 
                                    key={index}
                                    variants={item}
                                    className="mb-8 pl-12 relative"
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div 
                                        className="absolute left-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white flex items-center justify-center shadow-md"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </motion.div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                                        <p className="text-blue-600">{edu.institution}</p>
                                        <p className="text-sm text-gray-500 mt-2">{edu.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center mt-16"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Prêt à collaborer ?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Je suis disponible pour discuter de vos projets et répondre à vos questions.
                        </p>
                        <motion.button 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Contactez-moi</span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default About;