import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          zIndex: 60,
          backgroundImage: "linear-gradient(to right, #1C6EA4, #f87171, #437057, #67C090, #124170, #6A0066)",
        }}
      />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
