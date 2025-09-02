import { AnimatePresence, motion } from "framer-motion";
import ScrollFadeIn from "./ScrollInFade";

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-[#000000] bg-[url('https://www.transparenttextures.com/patterns/argyle.png')] min-h-screen text-white text-center px-2 md:px-6 py-24"
        id="hero"
      >
        <motion.div initial={{opacity: 0, scale:0}}
          animate={{opacity:1, scale: 1}}
          exit={{opacity:0, scale:0}}
          transition={{duration: 1}}
          >
        <img
          className="rounded-full mx-auto mb-8 w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg shadow-blue-400/40"
          src="./ezgif.com-resize.png"
          alt="hero-image"
        /></motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1 }}
        >
        <ScrollFadeIn direction="up">
          <h1 className="text-4xl font-bold mb-8">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              Srishylam
            </span>
            , Full Stack Developer
          </h1>
        
        <p className="text-lg mb-6 text-gray-400">
          I specialize in building modern and responsive web applications
        </p></ScrollFadeIn><ScrollFadeIn direction="up">
        <div className="space-x-4">
          <a href="#contact">
            <button
              className="btn btn-block text-white bg-gradient-to-r
             from-green-400 to-blue-500 px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Contact Me
            </button>
          </a>
          <a
            href="/Srishylam-Mern-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn btn-block text-white bg-gradient-to-r
             from-pink-400 to-yellow-500 px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Resume
            </button>
          </a>
        </div></ScrollFadeIn></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
