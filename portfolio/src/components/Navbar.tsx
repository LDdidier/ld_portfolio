import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ld_logo from "../assets/ld_logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg fixed w-full z-50">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center text-white font-bold text-3xl md:text-xl transition-transform duration-300 hover:scale-110"
                >
                    <img src={ld_logo} alt="logo_ld didier" className="w-14 rounded-sm" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 text-white">
                    <li>
                        <Link
                            to="/"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/experiences"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Mes expériences
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Mes projets
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-b from-blue-600 to-purple-600 absolute top-20 left-0 right-0 shadow-lg">
                    <ul className="flex flex-col space-y-4 p-4 text-white">
                        <li>
                            <Link
                                to="/"
                                className="block text-lg font-medium transition-colors duration-300 hover:text-yellow-400 py-2"
                                onClick={toggleMenu}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block text-lg font-medium transition-colors duration-300 hover:text-yellow-400 py-2"
                                onClick={toggleMenu}
                            >
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/experiences"
                                className="block text-lg font-medium transition-colors duration-300 hover:text-yellow-400 py-2"
                                onClick={toggleMenu}
                            >
                                Mes expériences
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="block text-lg font-medium transition-colors duration-300 hover:text-yellow-400 py-2"
                                onClick={toggleMenu}
                            >
                                Mes projets
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block text-lg font-medium transition-colors duration-300 hover:text-yellow-400 py-2"
                                onClick={toggleMenu}
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;