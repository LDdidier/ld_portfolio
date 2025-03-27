import Title from "./Title";
import { Github, Video } from "lucide-react";

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur.',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur.',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur.',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur.',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur.',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];

const Projects = () => {
    return (
        <div id="Projects" className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-800 py-16">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-8 px-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 rounded-xl object-cover mb-6"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                className="btn btn-accent w-full md:w-auto flex items-center justify-center space-x-2 py-2 px-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 text-white shadow-md hover:bg-indigo-500 hover:scale-105 transition-transform"
                                href={project.demoLink}
                            >
                                <Video className="w-4" />
                                <span>Demo</span>
                            </a>
                            <a
                                className="btn btn-neutral w-full md:w-auto flex items-center justify-center space-x-2 py-2 px-4 rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-700 hover:scale-105 transition-transform ml-2"
                                href={project.repoLink}
                            >
                                <Github className="w-4" />
                                <span>Repo</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
