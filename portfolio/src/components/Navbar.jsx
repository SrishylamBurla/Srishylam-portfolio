import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-gray-950 px-2 md:px-10 flex justify-center shadow-lg sticky top-0 z-50 shadow-blue-500/15">
      <div className="container flex justify-between items-center py-3">
        {/* Logo */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
          <a href="/">SRISHYLAM</a>
        </div>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <a
            href="#Hero"
            className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-4 mt-2 w-30 bg-[#000000] bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] rounded-xl shadow-lg drop-shadow-[0_0_1px_white] flex flex-col items-start p-4 space-y-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#Hero"
              onClick={() => setIsOpen(false)}
              className="text-lg text-white relative after:content-[''] 
              after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r
               from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-lg text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
