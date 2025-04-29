import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mooves from "../assets/mooves.png";
import dash from "../assets/dash.mp4";
import dashboard from "../assets/dashboard.png";

type ProjectType = "link" | "video";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: ProjectType;
  imageUrl?: string;
  projectUrl?: string;
  videoUrl?: string;
}

const Projects = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "My Rotten Tomatoes",
            description: "My Rotten Tomatoes est une application web de critiques de films qui permet de découvrir, évaluer et explorer facilement les films populaires avec une interface fluide et intuitive.",
            technologies: ["Next.js", "MongoDB", "Tailwind"],
            imageUrl: mooves,
            projectUrl: "https://my-rotten-tomatoes-one.vercel.app/movies",
            type: "link"
        },
        {
            id: 2,
            title: "Dashboard Analytics",
            description: "Application de tableau de bord avec analytics en temps réel et visualisation de données.",
            technologies: ["React", "Node.js", "Tailwind", "Chart.js"],
            videoUrl: dash,
            type: "video"
        },
        {
            id: 3,
            title: "Projet 3",
            description: "Description courte du troisième projet. Expliquez brièvement le but du projet.",
            technologies: ["React", "Tailwind", "Node.js"],
            imageUrl: "https://via.placeholder.com/300x200",
            projectUrl: "#",
            type: "link"
        },
    ];

    const openVideoModal = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setShowVideoModal(true);
    };

    const handleVideoClick = (project: Project) => {
        if (project.type === "video" && project.videoUrl) {
            openVideoModal(project.videoUrl);
        }
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setCurrentVideo(null);
    };

    return (
        <>
            <Navbar />
            <div id="Projects" className="min-h-screen bg-gray-100 py-12 pt-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Mes Projets</h1>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                {project.type === "video" ? (
                                    <div 
                                        className="w-full h-48 bg-gray-200 flex items-center justify-center cursor-pointer relative group"
                                        onClick={() => handleVideoClick(project)}
                                    >
                                        <img 
                                            src={dashboard} 
                                            alt="Miniature vidéo" 
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity group-hover:bg-opacity-50">
                                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <img 
                                        src={project.imageUrl || "https://via.placeholder.com/300x200"} 
                                        alt={project.title} 
                                        className="w-full h-48 object-cover"
                                    />
                                )}

                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.type === "video" ? (
                                        <button
                                            onClick={() => handleVideoClick(project)}
                                            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                                            disabled={!project.videoUrl}
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                            </svg>
                                            Voir la démo
                                        </button>
                                    ) : (
                                        <a 
                                            href={project.projectUrl || "#"} 
                                            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Voir le projet
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Video */}
            {showVideoModal && currentVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
                    <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 focus:outline-none"
                            aria-label="Fermer la vidéo"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <video 
                                controls 
                                autoPlay 
                                className="w-full"
                                onEnded={closeVideoModal}
                            >
                                <source src={currentVideo} type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Projects;