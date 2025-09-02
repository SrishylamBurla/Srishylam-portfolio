import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useSubscribeUserMutation } from "../redux/api/subscribeApi";

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribeUser, {isSuccess, isLoading, error}] = useSubscribeUserMutation()

  const submitHandler = async (e) => {
    e.preventDefault()
    if(!email) return;
    await subscribeUser(email)
    setEmail("")
  }
  

  return (
    <footer className="bg-[#000000] bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] text-white shadow-[0_3px_10px_theme(colors.blue.500/40)]">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-items-start space-y-6 py-10">
          <div className="flex-1 px-4">
            <h1 className="text-sm font-bold text-gray-200">Srishylam</h1>
            <p className="text-sm max-w-md text-gray-400">
              Full Stack Developer based in Hyderabad, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1">
            <form onSubmit={submitHandler} className="flex flex-row w-full md:max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="w-full bg-gray-800 rounded-l-lg p-2 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                disabled={isLoading}
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 to-blue-500 
              hover:scale-105 px-4 py-2 md:px-8 rounded-r-lg transition-transform"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
              
            </form>
            {isSuccess && <p className="text-sm text-green-600 mt-2 text-center">Subscription successful..</p>}
              {error && <p className="text-dm text-red-500 mt-2 text-center">{error.data?.message || "something went wrong"} </p>}
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} srishylam burla all rights
            reserved
          </p>
          <div className="flex space-x-4 my-4 md:mb-4">
            <a
              href="https://wa.me/917036188347"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400"
            >
              <FaWhatsapp />
            </a>
            <a 
            href="https://www.facebook.com/" 
            className="text-blue-600"
            target="_blank" 
            rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/srishylam_25"
              className="text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/SrishylamBurla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4 text-xs">
            <a href="#privacy" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#services" className="text-gray-400 hover:text-white">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
