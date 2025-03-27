import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>

      <div className="">
        <Navbar />
        <Home />
        <About />

      </div>


      <div className="">
        <Experiences />
        <Projects />
      </div>

      <Footer />

    </div>
  )
}