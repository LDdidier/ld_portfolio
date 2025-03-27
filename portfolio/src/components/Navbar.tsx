import { Container } from "lucide-react";

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                {/* Logo */}
                <a href="#"
                    className="flex items-center text-white font-bold text-3xl md:text-xl transition-transform duration-300 hover:scale-110"
                >
                    <Container className="mr-2 text-white" />
                    Ld_Didier   
                    <span className="text-accent">DEV</span>
                </a>

                {/* Navigation */}
                <ul className="hidden md:flex space-x-8 text-white">
                    <li>
                        <a href="#Home"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#About"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            À propos
                        </a>
                    </li>
                    <li>
                        <a href="#Experiences"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Mes expériences
                        </a>
                    </li>
                    <li>
                        <a href="#Projects"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Mes projets
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">
                        <Container className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
