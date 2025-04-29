import { Container } from "lucide-react";
import { Link } from "react-router-dom";
import ld_logo from "../assets/ld_logo.png";

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center text-white font-bold text-3xl md:text-xl transition-transform duration-300 hover:scale-110"
                >
                    <img src={ld_logo} alt="logo_ld didier" className="w-14 rounded-sm" />
                </Link>

                {/* Navigation */}
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
                    <button className="text-white">
                        <Container className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
